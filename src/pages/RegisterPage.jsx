import {Button, Grid, TextField, Typography} from "@mui/material";
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import API from "../api/api.js";
import Check from "../common/check.js";
import Error from "../common/error.js";
import ButtonOption from "../components/ButtonOption.jsx";
import CenterContainer from "../components/CenterContainer.jsx";
import FormField from "../components/FormField.jsx";
import OptionsColumn from "../components/OptionsColumn.jsx";
import PageHeader from "../components/PageHeader.jsx";
import {useAuthentication} from "../providers/AuthProvider.jsx";

const RegisterPage = () => {
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
            const formData = {
                name: form.name.value,
                phone: form.phone.value,
                password: form.password.value,
            }
            API.User.Create(formData, () => {
                auth.login(formData.phone, formData.password)
            });
        }
    }

    return (
        <OptionsColumn middle>
            <PageHeader
                text="Cadastro"
                variant="h2"
            />
            <FormField
                label="Nome"
                type="text"
                id="name"
                formState={[form, setForm]}
            />
            <FormField
                label="Telefone"
                type="tel"
                id="phone"
                formState={[form, setForm]}
            />
            <FormField
                label="Senha"
                type="password"
                id="password"
                formState={[form, setForm]}
            />
            <FormField
                label="Confirmar Senha"
                type="password"
                id="confirmPassword"
                formState={[form, setForm]}
            />
            <ButtonOption
                text="Registrar"
                onClick={handleSubmit}
            />
        </OptionsColumn>
    )
};

export default RegisterPage;
