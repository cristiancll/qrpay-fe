import {Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from 'react';

const ConfirmDialog = ({ danger = false, closeDialog, open, confirmDialog, title = "Confirmação necessária", text = "Você deseja confirmar a ação?"}) => {
    return (
        <Dialog
            open={open}
            onClose={closeDialog}
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
                <Button onClick={closeDialog}>Cancelar</Button>
                <Button onClick={confirmDialog} autoFocus color={danger ? "error" : "success"}>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
