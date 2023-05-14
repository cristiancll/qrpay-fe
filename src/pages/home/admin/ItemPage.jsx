import React from 'react';
import {useAuthentication} from "../../../providers/AuthProvider";
import Auth from "../../../common/auth";
import UnauthorizedPage from "../../UnauthorizedPage";

const ItemPage = () => {
    const auth = useAuthentication()
    if (!Auth.isAdmin(auth)) {
        return <UnauthorizedPage/>
    }
    return (
        <div>
            <h1>ITEMS!</h1>
        </div>
    );
};

export default ItemPage;
