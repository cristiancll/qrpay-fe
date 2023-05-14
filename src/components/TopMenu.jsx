import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {useAuthentication} from "../providers/AuthProvider";
import {useNavigate} from "react-router-dom";
import Auth from "../common/auth";

const TopMenu = ({anchorElState}) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = anchorElState;

    const handleNavigate = (path) => {
        setAnchorEl(null)
        navigate(path)
    }

    return (
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
        >
            <AdminOptions handleNavigate={handleNavigate}/>
            <UserOptions handleNavigate={handleNavigate}/>
        </Menu>
    );
};


const Options = ({options, handleNavigate}) => {
    return (
        <>
            { Object.keys(options).map((path) =>
                    <MenuItem key={path} onClick={() => handleNavigate(path)}>{options[path]}</MenuItem>
            )}
        </>
    )
}
const UserOptions = ({handleNavigate}) => {
    const options = {
        "/user": "Minha Conta",
        "/about": "Sobre",
        "/logout": "Sair"
    }
    return <Options options={options} handleNavigate={handleNavigate}/>
}

const AdminOptions = ({handleNavigate}) => {
    const auth = useAuthentication()
    if (!Auth.isAdmin(auth)) {
        return null
    }
    const options = {
        "/admin/category": "Gerenciar Categorias",
        "/admin/item": "Gerenciar Itens",
        "/admin/sku": "Gerenciar SKUs",
        "/admin/stock": "Gerenciar Estoque",
        "/admin/users": "Gerenciar Usuários",

    }
    return <Options options={options} handleNavigate={handleNavigate}/>
};


export default TopMenu;
