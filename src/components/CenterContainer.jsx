import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const CenterContainer = ({ middle = false, children }) => {
    const css = middle ? { height: "100vh" } : {};
    return (
        <Grid container justifyContent="center" alignItems="center" style={css} >
            <Grid xs={9} md={2} >
                <Box textAlign="center">
                    { children }
                </Box>
            </Grid>
        </Grid>
    );
};

export default CenterContainer;
