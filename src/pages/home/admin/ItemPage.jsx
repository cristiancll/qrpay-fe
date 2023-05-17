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
    plural: "Itens",
    singular: "Item",
}

const columns = [
    {
        name: "uuid",
        label: "ID",
    },
    {
        name: "category",
        label: "Categoria",
    },
    {
        name: "name",
        label: "Nome",
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

const ItemPage = () => {
    const auth = useAuthentication()
    const notify = useNotification()
    const [isLoading, setIsLoading] = useState(true)
    const [tableData, setTableData] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        if (Auth.isAdmin(auth)) {
            API.Item.List({}, (res) => {
                const itemsList = res.getItemsList().map((i) => {
                    const item = Utils.sanitizeProto(i)
                    item.category = item.category.name
                    return item
                })
                setTableData(itemsList)
                setIsLoading(false)
            }, (err) => {
                notify.show(err.message, "error")
            })
            API.Category.List({}, (res) => {
              const categoryList = res.getCategoriesList().map((c) => Utils.sanitizeProto(c))
                setCategories(categoryList)
                setIsLoading(false)
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
        API.Item.Update({uuid, name: formData.name.value, categoryUUID: formData.category.value}, (res) => {
            notify.show("Item atualizado com sucesso!", "success")
            setTableData(tableData.map((i) => {
                if (i.uuid === uuid) {
                    const item = Utils.sanitizeProto(res.getItem())
                    item.category = item.category.name
                    return item
                }
                return i
            }))
        }, (err) => {
            notify.show(err.message, "error")
        })
    }
    const handleDelete = (uuid) => {
        API.Item.Delete({uuid}, (res) => {
            notify.show("Item deletado com sucesso!", "success")
            setTableData(tableData.filter((i) => i.uuid !== uuid))
        }, (err) => {
            notify.show(err.message, "error")
        })
    }

    const handleCreate = (formData) => {
        API.Item.Create({name: formData.name.value, categoryUUID: formData.category.value}, (res) => {
            notify.show("Item criado com sucesso!", "success")
            const item = Utils.sanitizeProto(res.getItem())
            item.category = item.category.name
            setTableData([...tableData, item])
        }, (err) => {
            notify.show(err.message, "error")
        })
    }

    const structure = [
        {
            name: "category",
            label: "Categoria",
            type: "select",
            options: categories.map((c) => ({value: c.uuid, label: c.name})),
        },
        {
            name: "name",
            label: "Nome",
            type: "text",
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
                onDelete={handleDelete}
                onCreate={handleCreate}
            />
        </OutletContainer>

    )
};

export default ItemPage;
