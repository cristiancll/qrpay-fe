import {Alert, Box, AlertTitle, Collapse, IconButton} from "@mui/material";
import React, {useEffect} from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Notification = ({visibleState, body, severity, title}) => {
    const [visible, setVisible] = visibleState;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [visible])

    const css = {
        width: "100%",
        position: "absolute",
        zIndex: 999,
        top: "56px",
    };

    return (
        <Collapse in={visible} sx={css}>
            <Alert
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setVisible(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                }
                severity={severity}
                sx={{mb: 2}}
            >
                {title && <AlertTitle>{title}</AlertTitle>}
                {body}
            </Alert>
        </Collapse>
    );
};

export default Notification;
