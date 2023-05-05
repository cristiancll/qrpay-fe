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
        email: {
            value: user.email,
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
        if (!form.email.value || form.phone.value === "") {
            update.phone.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (!form.email.value || form.email.value === "") {
            update.email.error = Error.MANDATORY_FIELD;
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
        <OptionsColumn>
            <PageHeader variant={"h2"} text="Minha Conta"/>
            <FormField
                label="Nome"
                type="text"
                id="name"
                form={form}
                events={{handleChange, handleBlur}}
            />
            <FormField
                label="Telefone"
                type="text"
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
