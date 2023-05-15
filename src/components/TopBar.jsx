import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import QrCode2Icon from "@mui/icons-material/QrCode2";
import {useNavigate} from "react-router-dom";
import {useAuthentication} from "../providers/AuthProvider.jsx";
import TopMenu from "./TopMenu";

const TopBar = () => {
    const auth = useAuthentication()
    const navigate = useNavigate()
    const userName = auth?.user?.name || "Usuário";
    const [anchorEl, setAnchorEl] = useState(null);

    const titleCSS = {
        flexGrow: 1,
        fontSize: "2rem",
        marginLeft: "10px"
    }
    return (
        <Box sx={{flexGrow: 1, width: "100%"}}>
            <AppBar position="static">
                <Toolbar>
                    <QrCode2Icon sx={{fontSize: "3rem"}} onClick={() => navigate("/")}/>
                    <Typography variant="h6" component="div" sx={titleCSS}>
                        QR Pay
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                        color="inherit"
                    >
                        <Typography sx={{fontSize: "1rem", marginRight: "10px"}}>{userName}</Typography>
                        <AccountCircle sx={{marginRight: "-15px"}}/>
                    </IconButton>
                    <TopMenu
                        anchorElState={[anchorEl, setAnchorEl]}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default TopBar
