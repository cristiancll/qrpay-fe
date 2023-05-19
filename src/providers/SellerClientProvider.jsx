import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../api/api.js";
import Utils from "../common/utils.js";
import {useNotification} from "./NotificationProvider.jsx";

const SellerClientContext = createContext({});

const useSeller = (user) => {
    const notify = useNotification();
    const navigate = useNavigate();

    const [available, setAvailable] = useState();
    const [items, setItems] = useState();
    const [skus, setSkus] = useState();
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [retrieval, setRetrieval] = useState({});
    const [expandedItems, setExpandedItems] = useState([]);
    const [total, setTotal] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        API.SKU.List({},
            (res) => setSkus(res.getSkusList().map((s) => Utils.sanitizeProto(s))),
            (err) => notify.show(err.message, "error")
        )
        API.Item.List({},
            (res) => setItems(res.getItemsList().map((i) => Utils.sanitizeProto(i))),
            (err) => notify.show(err.message, "error")
        )
    }, [])

    useEffect(() => {
        if (user && user.uuid) {
            API.Sale.ListAvailableByUser({uuid: user.uuid},
                (res) => setAvailable(res.getSaleitemsList().map((s) => Utils.sanitizeProto(s))),
                (err) => notify.show(err.message, "error"))
        }
    }, [user?.uuid]);

    useEffect(() => {
        if (!available || !items || !skus) {
            return
        }
        const retrievalMap = {}
        available.forEach((a) => {
            const saleItemUUID = a.uuid
            const skuUUID = a.sku.uuid
            const itemUUID = a.sku.item.uuid
            if (retrievalMap[skuUUID]) {
                retrievalMap[skuUUID].available.push(saleItemUUID)
                retrievalMap[skuUUID].totalAvailable += 1
                return
            }
            retrievalMap[skuUUID] = {
                sku: skus.find((s) => s.uuid === skuUUID),
                item: items.find((i) => i.uuid === itemUUID),
                available: [saleItemUUID],
                totalAvailable: 1,
                retrieved: [],
                totalRetrieved: 0,
            }
        })
        setRetrieval(retrievalMap)
        setIsLoaded(true)
    }, [available, items, skus])



    const getAvailableItems = () => {
        const availableItemsUUIDs = available.map((a) => a.sku.item.uuid)
        return items.filter((i) => availableItemsUUIDs.includes(i.uuid))
    }

    const getAvailableSKUs = (item) => {
        const availableSKUsUUIDs = available.filter((a) => a.sku.item.uuid === item.uuid).map((a) => a.sku.uuid)
        return skus.filter((s) => availableSKUsUUIDs.includes(s.uuid))

    }

    const changeAmount = (sku, isDecrease) => {
        let skuRetrieval = retrieval[sku.uuid]
        if (isDecrease && skuRetrieval.retrieved.length === 0) {
            return
        }
        if (!isDecrease && skuRetrieval.available.length === 0) {
            return
        }
        if (isDecrease) {
            const saleItemUUID = skuRetrieval.retrieved.pop()
            skuRetrieval.available.push(saleItemUUID)
            setTotal(total - 1)
        } else {
            const saleItemUUID = skuRetrieval.available.pop()
            skuRetrieval.retrieved.push(saleItemUUID)
            setTotal(total + 1)
        }
        skuRetrieval.totalAvailable = skuRetrieval.available.length
        skuRetrieval.totalRetrieved = skuRetrieval.retrieved.length
        retrieval[sku.uuid] = skuRetrieval
        setRetrieval({...retrieval})
    }

    const toggleExpandItem = (item) => {
        // Checks if there is an SKU in the retrievals that uses this item and prevents it closing
        const found = Object.keys(retrieval).find((skuUuid) => retrieval[skuUuid]?.item.uuid === item.uuid && retrieval[skuUuid]?.quantity > 0)
        if (found) {
            return
        }
        if (expandedItems.includes(item.uuid)) {
            setExpandedItems(expandedItems.filter((i) => i !== item.uuid))
        } else {
            setExpandedItems([...expandedItems, item.uuid])
        }
    }

    const confirmRetrieval = () => {
        const saleItemUUIDs = []
        Object.keys(retrieval).forEach((skuUuid) => {
            if (retrieval[skuUuid].retrieved.length === 0) {
                return
            }
            saleItemUUIDs.push(...retrieval[skuUuid].retrieved)
        })
        const formData = {
            uuid: user.uuid,
            saleItemUUIDs,
        }
        API.Retrieval.Create(formData,
            (res)=> navigate("/seller"),
            (err) => notify.show(err.message, "error"))
    }


    return {
        user,

        skus,
        items,
        available,

        retrieval,
        getSKURetrieval: (sku) => retrieval[sku.uuid],
        total,

        getAvailableSKU: (sku) => available.filter((a) => a.sku.uuid === sku.uuid),

        completeOrder: () => setConfirmDialogOpen(true),
        confirmDialogOpen,
        closeConfirmDialog: () => setConfirmDialogOpen(false),
        changeAmount: changeAmount,
        confirmRetrieval,
        getAvailableItems,
        getAvailableSKUs,

        expandedItems,
        toggleExpandItem,

        isLoaded,

    }
}

const SellerClientProvider = ({ children, user }) => {
    const sellerClient = useSeller(user);
    return (
        <SellerClientContext.Provider value={ sellerClient }>
            {children}
        </SellerClientContext.Provider>
    )
}

export const useSellerClient = () => {
    return useContext(SellerClientContext);
}
export default SellerClientProvider;
