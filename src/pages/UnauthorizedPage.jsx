import React from "react";
import {Typography, Button, Grid, Box, IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import HomeIcon from '@mui/icons-material/Home';
import CenterContainer from "../components/CenterContainer.jsx";

function UnauthorizedPage() {
    const navigate = useNavigate()
    return (
        <CenterContainer>
            <Typography variant="h1" color={"#BDBDBD"}>
                401
            </Typography>
            <IconButton onClick={() => navigate("/")}>
                <HomeIcon/>
            </IconButton>
            <IconButton onClick={() => navigate(-1)}>
                <KeyboardReturnIcon/>
            </IconButton>
        </CenterContainer>
    );
}

export default UnauthorizedPage;
