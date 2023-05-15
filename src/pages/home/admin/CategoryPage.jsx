import CssBaseLine from "@mui/material/CssBaseline";
import React, {useEffect, useState} from 'react';
import OutletContainer from "../../../components/OutletContainer.jsx";
import {useAuthentication} from "../../../providers/AuthProvider";
import Auth from "../../../common/auth";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage";
import AdminTable from "../../../components/AdminTable";
import API from "../../../api/api";
import CenterContainer from "../../../components/CenterContainer";

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
        name: "created_at",
        label: "Criado em",
    },
    {
        name: "updated_at",
        label: "Atualizado em",
    },
    {
        name: "actions",
        label: "Ações",
    }
];

function testData() {
    const data = []
    for (let i = 0; i < 100; i++) {
        data.push({
            uuid: i,
            name: "Category " + i,
            created_at: "2021-09-01 12:00:00",
            updated_at: "2021-09-01 12:00:00",
            actions: "Ações " + i,
        })
    }
    return data
}

const CategoryPage = () => {
    const auth = useAuthentication()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(testData())
    // useEffect(() => {
    //     if (Auth.isAdmin(auth)) {
    //         API.Category.List({}, (res) => {
    //             const categoryList = res.getCategoriesList().map((c) => c.toObject())
    //             setData(categoryList)
    //             setIsLoading(false)
    //         })
    //         setIsLoading(false)
    //     }
    // })
    if (!Auth.isAdmin(auth)) {
        return <UnauthorizedPage/>
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    const handleUpdate = (uuid, data) => {
        console.log("HANDLE UPDATE", uuid, data)
        // API.Category.Update({uuid}, (res) => {
        //
        // })
    }
    const handleDelete = (data) => {
        console.log("HANDLE DELETE", data)
        // API.Category.Delete({uuid}, (res) => {
        //
        // })
    }

    const handleCreate = (data) => {
        console.log("HANDLE CREATE", data)
        // API.Category.Create({uuid}, (res) => {
        //
        // })
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
                data={data}
                structure={structure}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onCreate={handleCreate}
            />
        </OutletContainer>

    )
};

export default CategoryPage;
