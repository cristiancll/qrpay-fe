import React, {useState} from 'react';
import ButtonOption from "../components/ButtonOption.jsx";
import CenterContainer from "../components/CenterContainer.jsx";
import FormField from "../components/FormField.jsx";
import OptionsColumn from "../components/OptionsColumn.jsx";
import PageHeader from "../components/PageHeader.jsx";
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
        <OptionsColumn middle>
            <PageHeader
                text="Login"
            />
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
            <ButtonOption
                text="Entrar"
                onClick={handleSubmit}
            />
            <ButtonOption
                text="Esqueci minha senha"
                onClick={() => navigate("/reset-password")}
                variant="text"
            />
            <ButtonOption
                text="Não tenho conta"
                onClick={() => navigate("/register")}
                variant="text"
            />
        </OptionsColumn>
    )
};

export default LoginPage;
