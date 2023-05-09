import HomeIcon from "@mui/icons-material/Home.js";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn.js";
import {IconButton, Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Auth from "../common/auth.js";
import {useAuthentication} from "../providers/AuthProvider.jsx";
import CenterContainer from "../components/CenterContainer.jsx";

const LogoutPage = () => {
    const auth = useAuthentication();
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (Auth.isAuthenticated(auth)) {
            setLoading(false);
            return;
        }
        navigate("/login");
    }, [navigate]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown - 1);
        }, 1000);
        if (countdown === 0) {
            auth.logout();
        }
        return () => clearInterval(interval);
    }, [countdown]);

    if (loading) {
        return null;
    }
    return (
        <CenterContainer middle>
            <Typography variant="h6" color={"#BDBDBD"}>
                Você será deslogado em {countdown} segundos
            </Typography>
            <IconButton onClick={() => navigate("/")}>
                <HomeIcon/>
            </IconButton>
            <IconButton onClick={() => navigate(-1)}>
                <KeyboardReturnIcon/>
            </IconButton>
        </CenterContainer>
    );
};

export default LogoutPage;
