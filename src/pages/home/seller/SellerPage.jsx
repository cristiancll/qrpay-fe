import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import MainButton from "../../../buttons/MainButton.jsx";
import Auth from "../../../common/auth.js";
import OptionsColumn from "../../../components/OptionsColumn.jsx";
import QRScanner from "../../../components/qr/QRScanner.jsx";
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage.jsx";

const SellerPage = () => {
    const navigate = useNavigate()
    const auth = useAuthentication()
    const [code, setCode] = useState("");
    const [showQR, setShowQR] = useState(false);
    if (!Auth.isSeller(auth)) {
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
        <>
            <QRScanner visible={showQR} onScan={onScan} onClose={onClose}/>
            <OptionsColumn>
                <MainButton
                    onClick={() => setShowQR(true)}
                >
                    LER QR
                </MainButton>
            </OptionsColumn>
        </>
    );
};

export default SellerPage;
