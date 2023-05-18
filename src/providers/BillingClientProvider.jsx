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

    const selectCategory = (category) => {
        setSelectedCategory(category)
    }

    const toggleExpandItem = (item) => {
        if (expandedItems.includes(item.uuid)) {
            setExpandedItems(expandedItems.filter((i) => i !== item.uuid))
        } else {
            setExpandedItems([...expandedItems, item.uuid])
        }
    }

    const getCategoryItems = () => {
        if (!selectedCategory) {
            return []
        }
        return items.filter((i) => i.category.uuid === selectedCategory.uuid)
    }

    const getItemSkus = (item) => {
        return skus.filter((s) => s.item.uuid === item.uuid)
    }

    const completeOrder = () => {
        setConfirmDialogOpen(true)
    }
    const closeConfirmDialog = () => {
        setConfirmDialogOpen(false)
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

    const getOrderSKU = (sku) => {
        return order[sku.uuid]
    }

    const getStock = (sku) => {
        return stocks.find((s) => s.sku.uuid === sku.uuid)
    }
    return {
        categories,
        items,
        skus,
        stocks,

        expandedItems,
        toggleExpandItem,

        selectedCategory,
        selectCategory,

        getCategoryItems,

        getItemSkus,

        total,
        completeOrder,

        confirmDialogOpen,
        closeConfirmDialog,

        confirmOrder,

        order,
        getOrderSKU,
        changeAmount,

        getStock,
        user,
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
