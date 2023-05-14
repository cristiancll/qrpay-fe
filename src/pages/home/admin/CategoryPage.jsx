import React, {useEffect, useState} from 'react';
import {useAuthentication} from "../../../providers/AuthProvider";
import Auth from "../../../common/auth";
import UnauthorizedPage from "../../UnauthorizedPage";
import AdminTable from "../../../components/AdminTable";
import API from "../../../api/api";
import CenterContainer from "../../../components/CenterContainer";
import AdminContainer from "../../../components/AdminContainer";

const title = "Categorias";
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
    const handleEdit = (data) => {
        console.log("EDIT: ", data)
        // API.Category.Update({uuid}, (res) => {
        //
        // })
    }
    const handleDelete = (data) => {
        console.log("DELETE: ", data)
        // API.Category.Delete({uuid}, (res) => {
        //
        // })
    }
    return (
        <AdminContainer>
            <AdminTable
                title={title}
                columns={columns}
                data={data}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </AdminContainer>
    )
};

export default CategoryPage;
