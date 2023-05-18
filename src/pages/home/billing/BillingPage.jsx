import {Button, Grid} from "@mui/material";
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import MainButton from "../../../buttons/MainButton.jsx";
import QRCodeButton from "../../../buttons/QRCodeButton.jsx";
import Auth from "../../../common/auth.js";
import Utils from "../../../common/utils.js";
import OptionsColumn from "../../../components/OptionsColumn.jsx";
import QRScanner from "../../../components/qr/QRScanner.jsx";
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage.jsx";

const BillingPage = () => {
    const navigate = useNavigate()
    const notify = useNotification()
    const auth = useAuthentication()
    const [showQR, setShowQR] = useState(false);

    if (!Auth.isBilling(auth)) {
        return <UnauthorizedPage/>
    }
    const onScan = (code) => {
        if (Utils.isValidUUID(code)) {
            navigate(`/billing/client?uuid=${code}`)
            return
        }
        notify.show("QR inválido!", "error")
        setShowQR(false)
    }
    const onClose = () => {
        setShowQR(false)
    }
    return (
        <>
            <QRScanner visible={showQR} onScan={onScan} onClose={onClose}/>
            <OptionsColumn>
                <MainButton
                    onClick={() => setShowQR(true)}
                >
                    LER QR
                </MainButton>
                <MainButton
                    onClick={() => navigate("/billing/create")}
                >
                    CRIAR QR
                </MainButton>
            </OptionsColumn>
        </>
    );
};

export default BillingPage;
