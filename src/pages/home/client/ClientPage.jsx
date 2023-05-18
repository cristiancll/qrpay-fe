import React from 'react';
import Auth from "../../../common/auth.js";
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage.jsx";

const ClientPage = () => {
    const auth = useAuthentication()
    if (!Auth.isClient(auth)) {
        return <UnauthorizedPage/>
    }
    return (
        <div>

        </div>
    );
};

export default ClientPage;
