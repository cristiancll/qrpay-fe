import React, {useState} from 'react';
import CenterContainer from "../components/CenterContainer.jsx";
import FormField from "../components/FormField.jsx";
import {useAuthentication} from "../providers/AuthProvider.jsx";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import Error from "../common/error.js";


const LoginPage = () => {
    const navigate = useNavigate()
    const auth = useAuthentication();
    const [form, setForm] = useState({
        user: {
            value: "",
            error: null,
        },
        password: {
            value: "",
            error: null,
        }
    });

    const validateInputs = () => {
        let ok = true;
        const update = form;
        if (form.user.value === "") {
            update.user.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (form.password.value === "") {
            update.password.error = Error.MANDATORY_FIELD;
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
            auth.login(form.user.value, form.password.value, (err) => {
                console.log(err)
                const update = form;
                update.user.error = Error.INVALID_CREDENTIALS;
                update.password.error = Error.INVALID_CREDENTIALS;
                setForm({
                    ...form,
                    ...update
                })
            });
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
                <Grid>
                    <Typography
                        variant="h1"
                        color="#BDBDBD">
                        Login
                    </Typography>
                </Grid>
                <FormField
                    label="Usuário"
                    type="text"
                    id="user"
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
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Entrar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="text"
                        onClick={() => navigate("/reset-password")}
                    >
                        Esqueci minha senha
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="text"
                        onClick={() => navigate("/register")}
                    >
                        Não tenho conta
                    </Button>
                </Grid>
            </Grid>
        </CenterContainer>
    )
};

export default LoginPage;
