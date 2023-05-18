import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import React, {useState, useEffect} from 'react';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PaidIcon from '@mui/icons-material/Paid';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuthentication} from "../providers/AuthProvider.jsx";
import Auth from "../common/auth.js";
const BottomBar = () => {
    const auth = useAuthentication()
    const location = useLocation()
    const navigate = useNavigate()
    const [value, setValue] = useState(location.pathname.slice(1));
    useEffect(() => {
        setValue(location.pathname.slice(1))
    }, [location]);

    if (Auth.onlyOneRole(auth)) {
        return null
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate("/" + newValue)
    };
    return (
        <BottomNavigation showLabels sx={{ width: "100%" }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Admin"
                value="admin"
                disabled={!Auth.isAdmin(auth)}
                icon={<AdminPanelSettingsIcon/>}
            />
            <BottomNavigationAction
                label="Gerência"
                value="manager"
                disabled={!Auth.isManager(auth)}
                icon={<SupervisorAccountIcon/>}
            />
            <BottomNavigationAction
                label="Balcão"
                value="seller"
                disabled={!Auth.isSeller(auth)}
                icon={<FastfoodIcon/>}
            />
            <BottomNavigationAction
                label="Caixa"
                value="billing"
                disabled={!Auth.isBilling(auth)}
                icon={<PaidIcon/>}
            />
            <BottomNavigationAction
                label="Cliente"
                value="client"
                disabled={!Auth.isClient(auth)}
                icon={<PersonIcon/>}
            />
        </BottomNavigation>
    );
};

export default BottomBar;
