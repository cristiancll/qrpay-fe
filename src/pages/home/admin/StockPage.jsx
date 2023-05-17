import CircularProgress from "@mui/material/CircularProgress";
import React, {useEffect, useState} from 'react';
import Utils from "../../../common/utils.js";
import OutletContainer from "../../../components/OutletContainer.jsx";
import {useAuthentication} from "../../../providers/AuthProvider";
import Auth from "../../../common/auth";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage";
import AdminTable from "../../../components/AdminTable";
import API from "../../../api/api";

const entityName = {
    plural: "Estoque",
    singular: "Estoque",
}

const columns = [
    {
        name: "uuid",
        label: "ID",
    },
    {
        name: "sku",
        label: "SKU",
    },
    {
        name: "quantity",
        label: "Quantidade",
    },
    {
        name: "createdAt",
        label: "Criado em",
    },
    {
        name: "updatedAt",
        label: "Atualizado em",
    },
    {
        name: "actions",
        label: "Ações",
    }
];

const StockPage = () => {
    const auth = useAuthentication()
    const notify = useNotification()
    const [isLoading, setIsLoading] = useState(true)
    const [tableData, setTableData] = useState([])
    const [skus, setSkus] = useState([])

    useEffect(() => {
        if (Auth.isAdmin(auth)) {
            API.Stock.List({}, (res) => {
                const stockSkus = new Set()
                const stockList = res.getStocksList().map((s) => {
                    const stock = Utils.sanitizeProto(s)
                    const skuUUID = stock.sku.uuid
                    if (!stockSkus.has(skuUUID)) {
                        stockSkus.add(skuUUID)
                    }
                    stock.sku = stock.sku.name
                    return stock
                })
                API.SKU.List({}, (res) => {
                    const skuList = res.getSkusList().map((s) => {
                        const sku = Utils.sanitizeProto(s)
                        sku.metadata = {}
                        if (stockSkus.has(sku.uuid)) {
                            sku.metadata.disabled = true;
                        }
                        return sku
                    })
                    setSkus(skuList)
                    setTableData(stockList)
                    setIsLoading(false)
                }, (err) => {
                    notify.show(err.message, "error")
                })
            }, (err) => {
                notify.show(err.message, "error")
            })
        }
    }, [])
    if (!Auth.isAdmin(auth)) {
        return <UnauthorizedPage/>
    }
    if (isLoading) {
        return <CircularProgress />
    }
    const handleUpdate = (uuid, formData) => {
        API.Stock.Update({uuid, quantity: formData.quantity.value}, (res) => {
            notify.show("Estoque atualizado com sucesso!", "success")
            setTableData(tableData.map((s) => {
                if (s.uuid === uuid) {
                    const stock = Utils.sanitizeProto(res.getStock())
                    stock.sku = stock.sku.name
                    return stock
                }
                return s
            }))
        }, (err) => {
            notify.show(err.message, "error")
        })
    }

    const handleDelete = (uuid) => {
        API.Stock.Delete({uuid}, (res) => {
            notify.show("Estoque deletado com sucesso!", "success")
            const deletedStock = tableData.find((s) => s.uuid === uuid)
            setTableData(tableData.filter((s) => s.uuid !== uuid))
            // TODO: improve this, we should rely on UUID not name
            const sku = skus.find((s) => s.name === deletedStock.sku)
            sku.metadata = { disabled: false }
            setSkus([...skus])
        }, (err) => {
            notify.show(err.message, "error")
        })
    }

    const handleCreate = (formData) => {
        API.Stock.Create({sku: formData.sku.value, quantity: formData.quantity.value}, (res) => {
            notify.show("Estoque criado com sucesso!", "success")
            const stock = Utils.sanitizeProto(res.getStock())
            stock.sku = stock.sku.name
            setTableData([...tableData, stock])
            const sku = skus.find((s) => s.uuid === formData.sku.value)
            sku.metadata = { disabled: true }
            setSkus([...skus])
        }, (err) => {
            notify.show(err.message, "error")
        })
    }

    const structure = [
        {
            name: "sku",
            label: "SKU",
            type: "select",
            options: skus.map((c) => ({value: c.uuid, label: c.name, disabled: c.metadata?.disabled})),
            onUpdate: {
                visible: false,
            }
        },
        {
            name: "quantity",
            label: "Estoque",
            type: "numberic",
        },
    ];
    return (
        <OutletContainer>
            <AdminTable
                entityName={entityName}
                columns={columns}
                data={tableData}
                structure={structure}
                onUpdate={handleUpdate}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </OutletContainer>

    )
};

export default StockPage;
