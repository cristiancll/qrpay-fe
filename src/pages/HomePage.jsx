import {Alert, Container, useMediaQuery, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Cookies from "js-cookie";
import React, {useEffect, useState} from 'react';
import API from "../api/api.js";
import CenterContainer from "../components/CenterContainer.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import Loading from "../components/Loading.jsx";
import TopBar from "../components/TopBar.jsx";
import BottomBar from "../components/BottomBar.jsx";
import {useAuthentication} from "../providers/AuthProvider.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import CssBaseLine from "@mui/material/CssBaseline";
import Auth from "../common/auth.js";
import NotificationProvider from "../providers/NotificationProvider.jsx";
import OutletContainer from "../components/OutletContainer.jsx";


const HomePage = () => {
    const auth = useAuthentication()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!Auth.isAuthenticated(auth)) {
            navigate("/login")
        }
        setLoading(false);
    }, [navigate]);

    if (loading) {
        return null;
    }
    return (
        <>
            <CssBaseline/>
            <TopBar/>
            <OutletContainer>
                <Outlet/>
            </OutletContainer>
            <BottomBar/>
        </>
    );
};

export default HomePage;
