import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import QrCode2Icon from "@mui/icons-material/QrCode2";
import TopMenu from "./TopMenu";

const TopBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    return (
        <Box sx={{flexGrow: 1, width: "100%"}}>
            <AppBar position="static">
                <Toolbar>
                    <QrCode2Icon sx={{fontSize: "3rem"}}/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, fontSize: "2rem", marginLeft: "10px"}}>
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
                        <AccountCircle/>
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
