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
    plural: "SKUs",
    singular: "SKU",
}

const columns = [
    {
        name: "uuid",
        label: "ID",
    },
    {
        name: "item",
        label: "Item",
    },
    {
        name: "name",
        label: "Nome",
    },
    {
        name: "description",
        label: "Descrição",
    },
    {
        name: "price",
        label: "Preço",
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

const SkuPage = () => {
    const auth = useAuthentication()
    const notify = useNotification()
    const [isLoading, setIsLoading] = useState(true)
    const [tableData, setTableData] = useState([])
    const [items, setItems] = useState([])
    useEffect(() => {
        if (Auth.isAdmin(auth)) {
            API.SKU.List({}, (res) => {
                const skusList = res.getSkusList().map((s) => {
                    const sku = Utils.sanitizeProto(s)
                    sku.item = sku.item.name
                    return sku
                })
                setTableData(skusList)
                setIsLoading(false)
            })
            API.Item.List({}, (res) => {
                const itemsList = res.getItemsList().map((i) => Utils.sanitizeProto(i))
                setItems(itemsList)
                setIsLoading(false)
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
        const req = {
            uuid,
            itemUUID: formData.item.value,
            name: formData.name.value,
            description: formData.description.value,
            price: formData.price.value,
        }
        API.SKU.Update(req, (res) => {
            notify.show("SKU atualizado com sucesso!", "success")
            setTableData(tableData.map((s) => {
                if (s.uuid === uuid) {
                    const sku = Utils.sanitizeProto(res.getSku())
                    sku.item = sku.item.name
                    return sku
                }
                return s
            }))
        })
    }
    const handleDelete = (uuid) => {
        API.SKU.Delete({uuid}, (res) => {
            notify.show("SKU deletado com sucesso!", "success")
            setTableData(tableData.filter((s) => s.uuid !== uuid))
        })
    }

    const handleCreate = (formData) => {
        const req = {
            itemUUID: formData.item.value,
            name: formData.name.value,
            description: formData.description.value,
            price: formData.price.value,
        }
        API.SKU.Create(req, (res) => {
            notify.show("SKU criado com sucesso!", "success")
            const sku = Utils.sanitizeProto(res.getSku())
            sku.item = sku.item.name
            setTableData([...tableData, sku])
        })
    }

    const structure = [
        {
            name: "item",
            label: "Item",
            type: "select",
            options: items.map((i) => ({value: i.uuid, label: i.name})),
        },
        {
            name: "name",
            label: "Nome",
            type: "text",
        },
        {
            name: "description",
            label: "Descrição",
            type: "text",
            required: false,
        },
        {
            name: "price",
            label: "Preço",
            type: "currency",
        }
    ];
    return (
        <OutletContainer>
            <AdminTable
                entityName={entityName}
                columns={columns}
                data={tableData}
                structure={structure}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onCreate={handleCreate}
            />
        </OutletContainer>

    )
};

export default SkuPage;
