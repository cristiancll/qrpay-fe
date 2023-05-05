import {Grid, Typography} from "@mui/material";
import React from 'react';

const PageHeader = ({text = "", variant = "h1"}) => {
    return (
        <Grid>
            <Typography
                variant={variant}
                color="#BDBDBD">
                {text}
            </Typography>
        </Grid>
    );
};

export default PageHeader;
