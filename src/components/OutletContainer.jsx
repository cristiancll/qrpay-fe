import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import Auth from "../common/auth.js";
import {useAuthentication} from "../providers/AuthProvider.jsx";
import NotificationProvider from "../providers/NotificationProvider.jsx";

const OutletContainer = ({children}) => {
    const auth = useAuthentication()
    const barsHeight = Auth.onlyOneRole(auth) ? 64 : 120;
    const css = {
        height: `calc(100vh - ${barsHeight}px)`,
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
            <NotificationProvider>
                <Grid sx={{width: "100%"}}>
                    <Box textAlign="center">{children}</Box>
                </Grid>
            </NotificationProvider>
        </Grid>
    );
};

export default OutletContainer;
