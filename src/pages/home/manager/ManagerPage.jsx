import React from 'react';
import Auth from "../../../common/auth.js";
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage.jsx";

const ManagerPage = () => {
    const auth = useAuthentication()
    if (!Auth.isManager(auth)) {
        return <UnauthorizedPage/>
    }
    return (
        <div>

        </div>
    );
};

export default ManagerPage;
