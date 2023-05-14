import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuthentication} from "../../../providers/AuthProvider";
import Auth from "../../../common/auth";
import UnauthorizedPage from "../../UnauthorizedPage";

const CategoryPage = () => {
    const auth = useAuthentication()
    if (!Auth.isAdmin(auth)) {
        return <UnauthorizedPage/>
    }
    return (
        <div>

        </div>
    );
};

export default CategoryPage;
