import {Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from 'react';

const ConfirmDialog = ({ openState, onConfirm = () => {}, title = "Confirmação necessária", text = "Você deseja confirmar a ação?", danger = false}) => {
    const [open, setOpen] = openState;
    const handleClose = (e) => {
        setOpen(false);
    }

    const handleAgree = (e) => {
        onConfirm();
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                { title }
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    { text }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleAgree} autoFocus color={danger ? "error" : "success"}>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
