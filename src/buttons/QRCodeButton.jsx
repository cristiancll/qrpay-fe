import QrCode2Icon from "@mui/icons-material/QrCode2.js";
import {Button} from "@mui/material";
import React from 'react';

const QRCodeButton = ({onClick}) => {
    return (
        <Button
            variant="contained"
            size="large"
            onClick={onClick}
            startIcon={<QrCode2Icon/>}
            sx={{
                fontSize: '2.5rem',
                padding: '2rem 3rem',
            }}
        >QR CODE</Button>
    );
};

export default QRCodeButton;
