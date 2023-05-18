import CircularProgress from "@mui/material/CircularProgress";
import CssBaseline from "@mui/material/CssBaseline";
import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import API from "../../../api/api.js";
import Auth from "../../../common/auth.js";
import Utils from "../../../common/utils.js";
import OutletContainer from "../../../components/OutletContainer.jsx";
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import BillingClientProvider from "../../../providers/BillingClientProvider.jsx";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage.jsx";
import BillingClientBar from "./BillingClientBar.jsx";
import BillingClientConfirmOrderDialog from "./BillingClientConfirmOrderDialog.jsx";
import CategoryCards from "./CategoryCards.jsx";

const BillingClientPage = () => {
    const auth = useAuthentication()
    const notify = useNotification()
    const [user, setUser] = useState({})
    const [searchParams, setSearchParams] = useSearchParams()
    const uuid = searchParams.get("uuid")
    useEffect(() => {
        API.User.Get({uuid},
            (res) => setUser(Utils.sanitizeProto(res.getUser())),
            (err) => notify.show(err.message, "error")
        )
    }, [uuid])

    if (!Auth.isBilling(auth)) {
        return <UnauthorizedPage/>
    }
    if (!user) {
        return null
    }
    return (
        <BillingClientProvider user={user}>
            <OutletContainer rowSpacing={1} alignItems={"flex-start"} justifyContent={"space-between"}>
                <BillingClientConfirmOrderDialog/>
                <CssBaseline/>
                <CategoryCards/>
                <BillingClientBar/>
            </OutletContainer>
        </BillingClientProvider>
    );

}


export default BillingClientPage;
