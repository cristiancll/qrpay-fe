import {Grid, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from 'react';
import Error from "../common/error.js";
import ReactPhoneInput from 'react-phone-input-material-ui';
import "react-phone-input-material-ui/lib/style.css";
import { NumericFormat } from 'react-number-format';
const FormField = ({options, label, type, id, formState, disabled, required = true, autoFocus = false}) => {
    const [form, setForm] = formState;
    const handleBlur = (value) => {
        if (!required) {
            return;
        }
        let isValid = (value !== "")

        if (type === "numberic") {
            isValid = value !== 0
        }
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
        handleBlur(value)
        if (type === "numberic") {
            value = value.replace(/^0+|[^0-9]/g, "")
        }
        setForm({
            ...form,
            [id]: {
                ...form[id],
                value: value,
            }
        })
    }

    let inputField;

    switch (type) {
        case "currency":
            inputField = (
                <CurrencyField
                    autoFocus={autoFocus}
                    disabled={disabled}
                    label={label}
                    id={id}
                    form={form}
                    handleChange={handleChange}
                    handleBlur={(e) => handleBlur(e.target.value)}
                />
            )
            break;
        case "select":
            inputField = (
                <SelectField
                    options={options}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    label={label}
                    type={type}
                    id={id}
                    form={form}
                    handleChange={(e) => handleChange(e.target.value)}
                    handleBlur={(e) => handleBlur(e.target.value)}
                />
            )
            break;
        case "tel":
            inputField = (
                <TelephoneField
                    autoFocus={autoFocus}
                    disabled={disabled}
                    label={label}
                    type={type}
                    id={id}
                    form={form}
                    handleChange={handleChange}
                    handleBlur={(e) => handleBlur(e.target.value)}
                />
            )
            break;
        default:
            inputField = (
                <DefaultField
                    autoFocus={autoFocus}
                    disabled={disabled}
                    label={label}
                    type={type}
                    id={id}
                    form={form}
                    handleChange={(e) => handleChange(e.target.value)}
                    handleBlur={(e) => handleBlur(e.target.value)}
                />
            )
            break;
    }
    return (
        <Grid item xs={12} md={3} sx={{width: "100%"}}>
            { inputField }
        </Grid>
    );
};

const SelectField = ({options, autoFocus, disabled, label, id, form, handleBlur, handleChange}) => {
    const existingValue = form[id].value
    const value = options.find((o) => o.value === existingValue || o.label === existingValue)?.value || ""
    return (
        <TextField
            autoFocus={autoFocus}
            disabled={disabled}
            label={label}
            select
            name={id}
            id={id}
            variant="outlined"
            helperText={form[id].error}
            error={Error.has(form[id].error)}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            sx={{width: "100%"}}
        >
            {options && options.map((o) => (
                <MenuItem disabled={o.disabled || false} key={o.value} value={o.value}>{o.label}</MenuItem>
            ))}
        </TextField>
    )
}

const CurrencyField = ({autoFocus, disabled, label, id, form, handleChange, handleBlur}) => {
    let value = form[id].value
    if (value > 0) {
        value = value / 100
    }
    return (
        <NumericFormat
            value={value}
            allowNegative={false}
            customInput={TextField}
            prefix={'R$ '}
            decimalScale={2}
            decimalSeparator={','}
            fixedDecimalScale={true}
            label={label}
            disabled={disabled}
            autoFocus={autoFocus}
            name={id}
            id={id}
            variant="outlined"
            sx={{width: "100%"}}
            helperText={form[id].error}
            error={Error.has(form[id].error)}
            onBlur={handleBlur}
            onValueChange={(values) => {
                handleChange(values.floatValue * 100)
            }}
        />
    )
}
const DefaultField = ({autoFocus, disabled, label, type, id, form, handleChange, handleBlur}) => {
    return (
        <TextField
            autoFocus={autoFocus}
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
