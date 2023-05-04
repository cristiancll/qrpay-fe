import Box from "@mui/material/Box";
import React from "react";

const NoMediaDevices = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: "100vh",
        }}
    >
        <h3>Seu navegador não suporta acesso à câmera</h3>
    </Box>
)

export default NoMediaDevices;
