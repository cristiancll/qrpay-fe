import {Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from 'react';

const UpdateDialog = ({ openState, onConfirm = () => {}, title = "Atualizar Dados"}) => {
    const [open, setOpen] = openState;
    const handleClose = (e) => {
        setOpen(false);
    }

    const handleConfirm = (e) => {
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

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleConfirm} autoFocus color={"success"}>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UpdateDialog;
