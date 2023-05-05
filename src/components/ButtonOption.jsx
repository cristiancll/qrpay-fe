import {Button, Grid} from "@mui/material";
import React from 'react';

const ButtonOption = ({ text, variant = "contained", onClick = () => {}}) => {
    return (
        <Grid item xs={12}>
            <Button
                variant={variant}
                onClick={onClick}
            >
                { text }
            </Button>
        </Grid>
    );
};

export default ButtonOption;
