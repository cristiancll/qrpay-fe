import React from 'react';
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import Auth from "../../../common/auth.js";
import UnauthorizedPage from "../../UnauthorizedPage.jsx";

const AdminPage = () => {
    const auth = useAuthentication()
    if (!Auth.isAdmin(auth)) {
        return <UnauthorizedPage/>
    }
    return (
        <div>

        </div>
    );
};

export default AdminPage;
