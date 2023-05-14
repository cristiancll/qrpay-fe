import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

const AdminContainer = ({children}) => {
    const css = { height: "100vh" };
    return (
        <Grid container style={css} >
            <Grid xs={12} md={12} >
                <Box textAlign="center">
                    { children }
                </Box>
            </Grid>
        </Grid>
    );
};

export default AdminContainer;
