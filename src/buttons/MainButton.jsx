import {Button} from "@mui/material";
import React from 'react';

const MainButton = ({ icon, onClick, children }) => {
    return (
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
    );
};

export default MainButton;
