import {Button, Grid, Typography} from "@mui/material";
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
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
        phone: {
            value: "",
            error: null,
        },
    });

    const validateInputs = () => {
        let ok = true;
        const update = form;
        if (form.phone.value === "") {
            update.phone.error = Error.MANDATORY_FIELD;
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

    return (
        <OptionsColumn middle>
            <PageHeader
                text="Recuperar Senha"
                variant="h3"
            />
            <FormField
                label="Telefone"
                type="tel"
                id="phone"
                formState={[form, setForm]}
            />
            <ButtonOption
                text="Enviar Whatsapp"
                onClick={handleSubmit}
            />
        </OptionsColumn>
    )
};

export default ResetPasswordPage;
