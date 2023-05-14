import React from 'react';
import {useAuthentication} from "../../../providers/AuthProvider";
import Auth from "../../../common/auth";
import UnauthorizedPage from "../../UnauthorizedPage";

const SkuPage = () => {
    const auth = useAuthentication()
    if (!Auth.isAdmin(auth)) {
        return <UnauthorizedPage/>
    }
    return (
        <div>

        </div>
    );
};

export default SkuPage;
