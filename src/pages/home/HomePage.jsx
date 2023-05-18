import CssBaseline from "@mui/material/CssBaseline";
import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import TopBar from "../../components/TopBar.jsx";
import BottomBar from "../../components/BottomBar.jsx";
import {useAuthentication} from "../../providers/AuthProvider.jsx";
import Auth from "../../common/auth.js";
import OutletContainer from "../../components/OutletContainer.jsx";


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
