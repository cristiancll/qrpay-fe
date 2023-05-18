import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import Auth from "../common/auth.js";
import {useAuthentication} from "../providers/AuthProvider.jsx";
import NotificationProvider from "../providers/NotificationProvider.jsx";

const OutletContainer = ({children, rowSpacing, columnSpacing, rowGap, columnGap, alignItems = "center", justifyContent = "center"}) => {
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
            justifyContent={justifyContent}
            alignItems={alignItems}
            style={css}
            rowSpacing={rowSpacing}
            rowGap={rowSpacing}
            columnSpacing={columnSpacing}
            columnGap={columnSpacing}
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
