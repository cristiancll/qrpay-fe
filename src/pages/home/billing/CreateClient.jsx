import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import API from "../../../api/api.js";
import Error from "../../../common/error.js";
import ButtonOption from "../../../components/ButtonOption.jsx";
import FormField from "../../../components/FormField.jsx";
import OptionsColumn from "../../../components/OptionsColumn.jsx";
import PageHeader from "../../../components/PageHeader.jsx";
import {useNotification} from "../../../providers/NotificationProvider.jsx";

const CreateClient = () => {
    const navigate = useNavigate()
    const notify = useNotification();
    const [form, setForm] = useState({
        name: {
            value: "",
            error: null,
        },
        phone: {
            value: "55489",
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
            API.User.AdminCreated({name: form.name.value, phone: form.phone.value},
                (res) => {navigate("/billing")},
                (err) => notify.show(err.message, "error"))
        }
    }

    return (
        <OptionsColumn>
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
            <ButtonOption
                text="Cadastrar"
                onClick={handleSubmit}
            />
        </OptionsColumn>
    )
};

export default CreateClient;
