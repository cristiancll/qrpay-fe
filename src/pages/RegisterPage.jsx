import {Button, Grid, TextField, Typography} from "@mui/material";
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Error from "../common/error.js";
import CenterContainer from "../components/CenterContainer.jsx";
import FormField from "../components/FormField.jsx";
import {useAuthentication} from "../providers/AuthProvider.jsx";

const RegisterPage = () => {
    const navigate = useNavigate()
    const auth = useAuthentication();
    const [form, setForm] = useState({
        name: {
            value: "",
            error: null,
        },
        phone: {
            value: "",
            error: null,
        },
        email: {
            value: "",
            error: null,
        },
        password: {
            value: "",
            error: null,
        },
        confirmPassword: {
            value: "",
            error: null,
        },
    });

    const validateInputs = () => {
        let ok = true;
        const update = form;
        if (form.name.value === "") {
            update.name.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (form.phone.value === "") {
            update.phone.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (form.email.value === "") {
            update.email.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (form.password.value === "") {
            update.password.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (form.confirmPassword.value === "") {
            update.confirmPassword.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (form.password.value !== form.confirmPassword.value) {
            update.password.error = Error.PASSWORDS_DO_NOT_MATCH;
            update.confirmPassword.error = Error.PASSWORDS_DO_NOT_MATCH;
            ok = false;
        }
        if (!ok) {
            setForm({
                ...form,
                ...update
            })
        }
        return ok;
    }

    const handleSubmit = () => {
        const ok = validateInputs();
        if (ok) {
            // TODO: Register
        }
    }

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
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: {
                ...form[name],
                value: value,
            }
        })

    }

    return (
        <CenterContainer>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                rowSpacing={3}
            >
                <Grid xs={12}>
                    <Typography
                        variant="h2"
                        color="#BDBDBD">
                        Cadastro
                    </Typography>
                </Grid>
                <FormField
                    label="Nome"
                    type="text"
                    id="name"
                    form={form}
                    events={{handleChange, handleBlur}}
                />
                <FormField
                    label="Telefone"
                    type="phone"
                    id="phone"
                    form={form}
                    events={{handleChange, handleBlur}}
                />
                <FormField
                    label="Email"
                    type="email"
                    id="email"
                    form={form}
                    events={{handleChange, handleBlur}}
                />
                <FormField
                    label="Senha"
                    type="password"
                    id="password"
                    form={form}
                    events={{handleChange, handleBlur}}
                />
                <FormField
                    label="Confirmar Senha"
                    type="password"
                    id="confirmPassword"
                    form={form}
                    events={{handleChange, handleBlur}}
                />
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Registrar
                    </Button>
                </Grid>
            </Grid>
        </CenterContainer>
    )
};

// const InputField = ({fields}) => {
//     return (
//         <TextField
//             label={fields.label}
//             type={fields.type}
//             name={fields.id}
//             id={fields.id}
//             password="password"
//             variant="outlined"
//             helperText={form.password.error}
//             error={Error.has(form.password.error)}
//             value={form.password.value}
//             onChange={events.handleChange}
//             onBlur={events.handleBlur}
//         />
//     );
// }

export default RegisterPage;
