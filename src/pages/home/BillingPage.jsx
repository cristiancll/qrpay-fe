import {Button, Grid} from "@mui/material";
import React, {useState} from 'react';
import MainButton from "../../buttons/MainButton.jsx";
import QRCodeButton from "../../buttons/QRCodeButton.jsx";
import Auth from "../../common/auth.js";
import CenterContainer from "../../components/CenterContainer.jsx";
import OptionsColumn from "../../components/OptionsColumn.jsx";
import QRScanner from "../../components/qr/QRScanner.jsx";
import {useAuthentication} from "../../providers/AuthProvider.jsx";
import UnauthorizedPage from "../UnauthorizedPage.jsx";
import QrCode2Icon from '@mui/icons-material/QrCode2';

const BillingPage = () => {
    const auth = useAuthentication()
    const [code, setCode] = useState("");
    const [showQR, setShowQR] = useState(false);

    if (!Auth.isBilling(auth)) {
        return <UnauthorizedPage/>
    }
    const onScan = (code) => {
        setCode(code)
        setShowQR(false)
    }
    const onClose = () => {
        setShowQR(false)
        setCode("")
    }
    return (
        <div>
            <QRScanner visible={showQR} onScan={onScan} onClose={onClose}/>
                <OptionsColumn>
                    <MainButton
                        onClick={() => setShowQR(true)}
                    >
                        LER QR CODE
                    </MainButton>
                    <MainButton>
                        CRIAR QR CODE
                    </MainButton>
                </OptionsColumn>
            <p>{code}</p>
        </div>
    );
};

export default BillingPage;
