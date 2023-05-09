import {Container, useMediaQuery, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import React, {useEffect, useState} from 'react';
import CenterContainer from "../components/CenterContainer.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import Loading from "../components/Loading.jsx";
import TopBar from "../components/TopBar.jsx";
import BottomBar from "../components/BottomBar.jsx";
import {useAuthentication} from "../providers/AuthProvider.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import CssBaseLine from "@mui/material/CssBaseline";
import Auth from "../common/auth.js";

const OutletContainer = ({children}) => {
    const css = {
        height: "calc(100vh - 112px)",
        width: "100%",
        overflow: "auto",
    }
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={css}
        >
            <Grid sx={{width: "100%"}}>
                <Box textAlign="center">{children}</Box>
            </Grid>
        </Grid>
    );
};

const HomePage = () => {
    const auth = useAuthentication()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (Auth.isAuthenticated(auth)) {
            setLoading(false);
            return;
        }
        navigate("/login")
        return () => {
            setLoading(true)
        }
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
