import {Button, Grid, Typography} from "@mui/material";
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Check from "../common/check.js";
import Error from "../common/error.js";
import ButtonOption from "../components/ButtonOption.jsx";
import CenterContainer from "../components/CenterContainer.jsx";
import FormField from "../components/FormField.jsx";
import OptionsColumn from "../components/OptionsColumn.jsx";
import PageHeader from "../components/PageHeader.jsx";
import {useAuthentication} from "../providers/AuthProvider.jsx";

const ResetPasswordPage = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        user: {
            value: "",
            error: null,
        },
    });

    const validateInputs = () => {
        let ok = true;
        const update = form;
        if (form.user.value === "") {
            update.user.error = Error.MANDATORY_FIELD;
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
            // TODO: implementar reset de senha
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
        if (!Check.Input.valid(e)) {
            return;
        }
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
                text="Recuperar Senha"
                variant="h3"
            />
            <FormField
                label="Usuário"
                type="text"
                id="user"
                form={form}
                events={{handleChange, handleBlur}}
            />
            <ButtonOption
                text="Enviar E-mail"
                onClick={handleSubmit}
            />
        </OptionsColumn>
    )
};

export default ResetPasswordPage;
