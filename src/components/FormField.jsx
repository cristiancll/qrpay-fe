import {Grid, TextField} from "@mui/material";
import React from 'react';
import Check from "../common/check.js";
import Error from "../common/error.js";
import ReactPhoneInput from 'react-phone-input-material-ui';
import "react-phone-input-material-ui/lib/style.css";

const FormField = ({label, type, id, formState, disabled, required = true}) => {
    const [form, setForm] = formState;
    const handleBlur = (value) => {
        if (!required) {
            return;
        }
        let isValid = (value !== "")
        if (type === "tel") {
            const sanitized = value.replace(/[^\d]/g, "")
            isValid = (sanitized.length === 13)
        }
        const update = form;
        update[id].error = isValid ? null : Error.MANDATORY_FIELD;
        setForm({
            ...form,
            ...update
        })
    }
    const handleChange = (value) => {
        setForm({
            ...form,
            [id]: {
                ...form[id],
                value: value,
            }
        })
    }

    const isTel = type === "tel";
    return (
        <Grid item xs={12} md={3} sx={{width: "100%"}} >
            { isTel
                ? <TelephoneField
                    disabled={disabled}
                    label={label}
                    type={type}
                    id={id}
                    form={form}
                    handleChange={handleChange}
                    handleBlur={(e) => handleBlur(e.target.value)}
                    />
                : <DefaultField
                    disabled={disabled}
                    label={label}
                    type={type}
                    id={id}
                    form={form}
                    handleChange={(e) => handleChange(e.target.value)}
                    handleBlur={(e) => handleBlur(e.target.value)}
                />
            }
        </Grid>
    );
};


const DefaultField = ({disabled, label, type, id, form, handleChange, handleBlur}) => {
    return (
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
    )
}

const TelephoneField = ({disabled, label, type, id, form, handleBlur, handleChange}) => {
    return (
        <ReactPhoneInput
            country={'br'}
            onlyCountries={['br']}

            copyNumbersOnly={true}
            countryCodeEditable={false}

            isValid={!Error.has(form[id].error)}
            enableAreaCodes={true}
            defaultMask={'(..) . .... ....'}
            alwaysDefaultMask={true}
            disableDropdown={true}
            showDropdown={false}
            component={TextField}
            disabled={disabled}
            label={label}
            type={type}
            name={id}
            id={id}
            variant="outlined"
            value={form[id].value}
            onChange={handleChange}
            onBlur={handleBlur}
            sx={{width: "100%"}}
        />
    );
}
export default FormField;
