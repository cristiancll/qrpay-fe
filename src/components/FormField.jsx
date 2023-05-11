import {Grid, TextField} from "@mui/material";
import React from 'react';
import Check from "../common/check.js";
import Error from "../common/error.js";
import {useAuthentication} from "../providers/AuthProvider.jsx";

const FormField = ({label, type, id, formState, disabled}) => {
    const [form, setForm] = formState;
    const handleBlur = (e) => {
        const {name, value} = e.target;
        const update = form;
        update[name].error = (value === "") ? Error.MANDATORY_FIELD : null;
        setForm({
            ...form,
            ...update
        })
    }
    const handleChange = (e) => {
        const {name} = e.target;
        const sanitizedValue = Check.Input.sanitize(e)
        setForm({
            ...form,
            [name]: {
                ...form[name],
                value: sanitizedValue,
            }
        })
    }

    return (
        <Grid item xs={12} md={3} sx={{width: "100%"}} >
            <TextField
                disabled={disabled}
                label={label}
                type={type}
                name={id}
                id={id}
                variant="outlined"
                helperText={form[id].error}
                error={Error.has(form[id].error)}
                value={form[id].value}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{width: "100%"}}
            />
        </Grid>
    );
};

export default FormField;
