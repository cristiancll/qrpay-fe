import {Container, useMediaQuery, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import React, {useEffect} from 'react';
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
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{height: "calc(100vh - 120px)"}}
        >
            <Grid>
                <Box textAlign="center">{children}</Box>
            </Grid>
        </Grid>
    );
};

const HomePage = () => {
    const auth = useAuthentication()
    const navigate = useNavigate()
    useEffect(() => {
        if (!Auth.isAuthenticated(auth)) {
            navigate("/login")
        }
    }, [navigate]);
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
