import {Grid, TextField} from "@mui/material";
import React from 'react';
import Error from "../common/error.js";

const FormField = ({label, type, id, form, events}) => {
    return (
        <Grid item xs={12} md={3} sx={{width: "100%"}} >
            <TextField
                label={label}
                type={type}
                name={id}
                id={id}
                variant="outlined"
                helperText={form[id].error}
                error={Error.has(form[id].error)}
                value={form[id].value}
                onChange={events.handleChange}
                onBlur={events.handleBlur}
                sx={{width: "100%"}}
            />
        </Grid>
    );
};

export default FormField;
