import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const CenterContainer = ({ children }) => {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
            <Grid sx={{width: "80%"}}>
                <Box textAlign="center">
                    { children }
                </Box>
            </Grid>
        </Grid>
    );
};

export default CenterContainer;
