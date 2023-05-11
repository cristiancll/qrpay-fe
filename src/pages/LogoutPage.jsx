import {Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import {useAuthentication} from "../providers/AuthProvider.jsx";
import CenterContainer from "../components/CenterContainer.jsx";
import {useNavigate} from "react-router-dom";
import Auth from "../common/auth.js";

const LogoutPage = () => {
    const auth = useAuthentication();
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        if (!Auth.isAuthenticated(auth)) {
            navigate("/login");
            return;
        }
        setIsLoading(false)
        auth.logout()
    }, []);
    if (isLoading) {
        return null;
    }
    return (
        <CenterContainer middle>
            <Typography variant="h6" color={"#BDBDBD"}>
                Você será deslogado do sistema...
            </Typography>
        </CenterContainer>
    );
};

export default LogoutPage;
