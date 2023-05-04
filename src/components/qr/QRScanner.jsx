import Backdrop from "@mui/material/Backdrop";
import React from 'react';
import Device from "../../common/device.js";
import NoMediaDevices from "./NoMediaDevices.jsx";
import QRCamera from "./QRCamera.jsx";

const QRScanner = ({visible = true, onScan, onClose}) => {
    if (!visible) {
        return null;
    }
    return (
        <Backdrop
            sx={{zIndex: (theme) => theme.zIndex.drawer + 1, color: "#FFF"}}
            open={true}
            onClick={onClose}
        >
            { !Device.isMediaSupported()
                ? <NoMediaDevices/>
                : <QRCamera onScan={onScan} onClose={onClose}/>
            }

        </Backdrop>
    );
};

export default QRScanner;
