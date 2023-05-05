import {Button, Grid} from "@mui/material";
import React from 'react';

const MainButton = ({icon, onClick, children}) => {
    return (
        <Grid item xs={12} md={3} sx={{width: "100%"}}>
            <Button
                variant="contained"
                size="large"
                onClick={onClick}
                startIcon={icon}
                sx={{
                    fontSize: '2.5rem',
                    padding: '2rem 3rem',
                }}
            >
                {children}
            </Button>
        </Grid>
    );
};

export default MainButton;
