import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../api/api.js";
import Utils from "../common/utils.js";
import {useNotification} from "./NotificationProvider.jsx";

const BillingClientContext = createContext({});

const useBilling = (user) => {
    const notify = useNotification();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [skus, setSkus] = useState([]);
    const [stocks, setStocks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [expandedItems, setExpandedItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [order, setOrder] = useState({});


    useEffect(() => {
        API.Category.List({},
            (res) => setCategories(res.getCategoriesList().map((c) => Utils.sanitizeProto(c))),
            (err) => notify.show(err.message, "error")
        )
        API.Item.List({},
            (res) => setItems(res.getItemsList().map((i) => Utils.sanitizeProto(i))),
            (err) => notify.show(err.message, "error")
        )
        API.SKU.List({},
            (res) => setSkus(res.getSkusList().map((s) => Utils.sanitizeProto(s))),
            (err) => notify.show(err.message, "error")
        )
        API.Stock.List({},
            (res) => setStocks(res.getStocksList().map((s) => Utils.sanitizeProto(s))),
            (err) => notify.show(err.message, "error")
        )
    }, []);

    useEffect(() => {
        if (categories.length === 0 || items.length === 0 || skus.length === 0 || stocks.length === 0) {
            return
        }
        setIsLoaded(true)
    }, [categories, items, skus, stocks]);

    const toggleExpandItem = (item) => {
        // Checks if there is an SKU in the order that uses this item and prevents it closing
        const found = Object.keys(order).find((skuUuid) => order[skuUuid]?.item.uuid === item.uuid && order[skuUuid]?.quantity > 0)
        if (found) {
            return
        }
        if (expandedItems.includes(item.uuid)) {
            setExpandedItems(expandedItems.filter((i) => i !== item.uuid))
        } else {
            setExpandedItems([...expandedItems, item.uuid])
        }
    }

    const confirmOrder = () => {
        API.Sale.Create({order, uuid: user.uuid},
        (res)=>{
            navigate("/billing")
            notify.show("Pedido realizado com sucesso!", "success")
        },
        (err)=>{
            notify.show(err.message, "error")
        })
    }

    const changeAmount = (sku, n) => {
        const isDecrease = n <= 0
        let skuOrder = order[sku.uuid]
        if (!skuOrder) {
            if (isDecrease) {
                return
            }
            skuOrder = {
                quantity: n,
                item: sku.item,
                price: sku.price,
                name: sku.name,
                subtotal: sku.price * n,
            }
            setTotal(total + (skuOrder.price * n))
            order[sku.uuid] = skuOrder
            setOrder({...order})
            return
        }
        const currentAmount = skuOrder.quantity
        if (isDecrease && currentAmount === 0) {
            return
        }
        const newQuantity = currentAmount + n
        const newSubtotal = skuOrder.price * newQuantity
        skuOrder.quantity = newQuantity
        skuOrder.subtotal = newSubtotal
        order[sku.uuid] = skuOrder
        setOrder({...order})
        setTotal(total + (skuOrder.price * n))
    }

    return {
        categories,
        items,
        skus,
        stocks,

        expandedItems,
        toggleExpandItem,

        selectedCategory,
        selectCategory: (cat) => setSelectedCategory(cat),

        getCategoryItems: () => {
            if (!selectedCategory) {
                return []
            }
            return items.filter((i) => i.category.uuid === selectedCategory.uuid)
        },

        getItemSkus: (item) => skus.filter((s) => s.item.uuid === item.uuid),

        total,
        completeOrder: () => setConfirmDialogOpen(true),

        confirmDialogOpen,
        closeConfirmDialog: () => setConfirmDialogOpen(false),

        confirmOrder,

        order,
        getOrderSKU: (sku) => order[sku.uuid],
        changeAmount,

        getStock: (sku) => stocks.find((s) => s.sku.uuid === sku.uuid),
        user,

        isLoaded,
    }
}

const BillingClientProvider = ({ children, user }) => {
    const billingClient = useBilling(user);
    return (
        <BillingClientContext.Provider value={ billingClient }>
            {children}
        </BillingClientContext.Provider>
    )
}

export const useBillingClient = () => {
    return useContext(BillingClientContext);
}
export default BillingClientProvider;
