import {Grid} from "@mui/material";
import React from 'react';
import CenterContainer from "./CenterContainer.jsx";

const OptionsColumn = ({middle = false, children}) => {
    if (!children) {
        return null
    }
    return (
        <CenterContainer middle={middle}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                rowSpacing={3}
            >
                { children }
            </Grid>
        </CenterContainer>
    );
};

export default OptionsColumn;
