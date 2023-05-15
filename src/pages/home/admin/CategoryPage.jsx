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
    plural: "Categorias",
    singular: "Categoria",
}

const columns = [
    {
        name: "uuid",
        label: "ID",
    },
    {
        name: "name",
        label: "Name",
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

const CategoryPage = () => {
    const auth = useAuthentication()
    const notify = useNotification()
    const [isLoading, setIsLoading] = useState(true)
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        if (Auth.isAdmin(auth)) {
            API.Category.List({}, (res) => {
                const categoryList = res.getCategoriesList().map((c) => Utils.sanitizeProto(c))
                console.log("CATEGORY LIST", categoryList)
                setTableData(categoryList)
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
        API.Category.Update({uuid, name: formData.name.value}, (res) => {
            console.log("UPDATE RESPONSE", res.getCategory().toObject())
            notify.show("Categoria atualizada com sucesso!", "success")
            setTableData(tableData.map((c) => {
                if (c.uuid === uuid) {
                    return Utils.sanitizeProto(res.getCategory())
                }
                return c
            }))
        })
    }
    const handleDelete = (uuid) => {
        API.Category.Delete({uuid}, (res) => {
            notify.show("Categoria deletada com sucesso!", "success")
            setTableData(tableData.filter((c) => c.uuid !== uuid))
        })
    }

    const handleCreate = (formData) => {
        console.log("CREATE: ", formData)
        API.Category.Create({name: formData.name.value}, (res) => {
            notify.show("Categoria criada com sucesso!", "success")
            setTableData([...tableData, Utils.sanitizeProto(res.getCategory())])
        })
    }

    const structure = [
        {
            name: "name",
            label: "Nome",
            type: "text",
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

export default CategoryPage;
