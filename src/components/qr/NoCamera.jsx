import NoPhotographyIcon from "@mui/icons-material/NoPhotography.js";
import Box from "@mui/material/Box";
import React from "react";

const NoCamera = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: "100vh",
        }}
    >
        <NoPhotographyIcon sx={{fontSize: "10rem"}}/>
        <h1>Sem acesso à câmera</h1>
    </Box>
);

export default NoCamera;
