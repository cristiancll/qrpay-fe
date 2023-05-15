import React, {useState, useEffect} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import FormField from "./FormField.jsx";

const EntityDialog = ({open, confirmDialog, closeDialog, entityName, structure, existingData, currentUUID}) => {
    const [data, setData] = useState(existingData)
    useEffect(() => {
        setData(existingData)
    }, [existingData])

    const isUpdate = !!currentUUID
    let titleText, buttonText;
    if (isUpdate) {
        titleText = `Atualizar ${entityName.singular} existente`
        buttonText = "Atualizar"
    } else {
        titleText = `Adicionar novo(a) ${entityName.singular}`
        buttonText = "Adicionar"
    }
    return (
        <Dialog open={open} onClose={closeDialog} fullWidth={true} maxWidth={"sm"}>
            <DialogTitle>{titleText}</DialogTitle>
            <DialogContent>
                { structure.map((entity, index) => (
                    <FormField
                        autoFocus={!isUpdate}
                        key={index}
                        label={entity.label}
                        type={entity.type}
                        id={entity.name}
                        formState={[data, setData]}
                        />
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>Cancelar</Button>
                <Button onClick={() => confirmDialog(data, isUpdate)} autoFocus color={"success"}>
                    { buttonText }
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EntityDialog;
