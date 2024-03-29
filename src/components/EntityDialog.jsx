import React, {useState, useLayoutEffect} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import FormField from "./FormField.jsx";

const EntityDialog = ({open, confirmDialog, closeDialog, entityName, structure, existingData, currentUUID}) => {
    const [data, setData] = useState(existingData)
    useLayoutEffect(() => {
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
            <DialogTitle sx={{marginBottom: "10px"}}>{titleText}</DialogTitle>
            <DialogContent sx={{paddingTop: "10px"}}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    rowSpacing={3}
                    sx={{paddingTop: "10px"}}
                >
                    { structure.map((entity, index) => {
                        const {onUpdate, onCreate} = entity
                        if (isUpdate) {
                            if (onUpdate?.visible === false) return null
                        } else {
                            if (onCreate?.visible === false) return null
                        }
                    return (<FormField
                        autoFocus={!isUpdate}
                        key={index}
                        label={entity.label}
                        type={entity.type}
                        id={entity.name}
                        formState={[data, setData]}
                        options={entity.options}
                        required={entity.required}
                        />
                    )})}
                </Grid>
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
