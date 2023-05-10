import Check from "../../common/check.js";
import {Button, Grid, Typography} from "@mui/material";
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Error from "../../common/error.js";
import ButtonOption from "../../components/ButtonOption.jsx";
import CenterContainer from "../../components/CenterContainer.jsx";
import FormField from "../../components/FormField.jsx";
import OptionsColumn from "../../components/OptionsColumn.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import {useAuthentication} from "../../providers/AuthProvider.jsx";

const UserPage = () => {
    const navigate = useNavigate()
    const auth = useAuthentication();
    const user = auth.user || {};
    const [form, setForm] = useState({
        name: {
            value: user.name,
            error: null,
        },
        phone: {
            value: user.phone,
            error: null,
        },
        password: {
            value: "",
            error: null,
        },
    });

    const validateInputs = () => {
        let ok = true;
        const update = form;
        if (!form.name.value || form.name.value === "") {
            update.name.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (!form.phone.value || form.phone.value === "") {
            update.phone.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (form.password.value === "") {
            update.password.error = Error.CONFIRM_PASSWORD;
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
            // TODO: implementar update
        }
    }

    const handleDelete = () => {
        // TODO: implementar delete
    }

    return (
        <OptionsColumn>
            <PageHeader variant={"h2"} text="Minha Conta"/>
            <FormField
                label="Nome"
                type="text"
                id="name"
                formState={[form, setForm]}
            />
            <FormField
                label="Telefone"
                type="text"
                id="phone"
                formState={[form, setForm]}
            />
            <FormField
                label="Senha"
                type="password"
                id="password"
                formState={[form, setForm]}
            />
            <ButtonOption
                text="Atualizar"
                onClick={handleSubmit}
            />
            <ButtonOption
                text="Excluir Conta"
                onClick={handleDelete}
            />
        </OptionsColumn>
    )
};

export default UserPage;
