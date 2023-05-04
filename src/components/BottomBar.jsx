import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import React, {useState} from 'react';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaidIcon from '@mui/icons-material/Paid';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuthentication} from "../providers/AuthProvider.jsx";
import Auth from "../common/auth.js";
const BottomBar = () => {
    const auth = useAuthentication()
    const location = useLocation()
    const navigate = useNavigate()
    const path = location.pathname.slice(1)
    const [value, setValue] = useState(path);
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
                label="Gerencia"
                value="manager"
                disabled={!Auth.isManager(auth)}
                icon={<SupervisorAccountIcon/>}
            />
            <BottomNavigationAction
                label="Caixa"
                value="billing"
                disabled={!Auth.isBilling(auth)}
                icon={<PaidIcon/>}
            />
            <BottomNavigationAction
                label="Venda"
                value="seller"
                disabled={!Auth.isSeller(auth)}
                icon={<StorefrontIcon/>}
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
