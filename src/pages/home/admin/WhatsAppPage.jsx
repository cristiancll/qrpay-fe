import React from 'react';
import Auth from "../../../common/auth.js";
import OutletContainer from "../../../components/OutletContainer.jsx";
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage.jsx";

const WhatsAppPage = () => {
    const auth = useAuthentication()

    if (!Auth.isAdmin(auth)) {
        return <UnauthorizedPage/>
    }
    return (
        <OutletContainer>
        </OutletContainer>
    );
};

export default WhatsAppPage;
