import API from "../../../api/api.js";
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Auth from "../../../common/auth.js";
import Error from "../../../common/error.js";
import ButtonOption from "../../../components/ButtonOption.jsx";
import ConfirmDialog from "../../../components/ConfirmDialog.jsx";
import FormField from "../../../components/FormField.jsx";
import OptionsColumn from "../../../components/OptionsColumn.jsx";
import PageHeader from "../../../components/PageHeader.jsx";
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import {useNotification} from "../../../providers/NotificationProvider.jsx";

const UserPage = () => {
    const navigate = useNavigate()
    const notify = useNotification();
    const auth = useAuthentication();
    const user = auth.user || {};

    const [confirmOpen, setConfirmOpen] = useState(false);
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
            const formData = {
                name: form.name.value,
                phone: form.phone.value,
                password: form.password.value,
            }
            API.User.Update(formData, (data) => {
                notify.show("Conta atualizada!", "success");
            })
        }
    }

    const closeConfirmDialog = () => {
        setConfirmOpen(false);
    }
    const handleDelete = () => {
        const uuid = auth.user.uuid
        // API.User.Delete({uuid}, (data) => {
            closeConfirmDialog();
            // navigate("/login");
        // })
    }

    return (
        <OptionsColumn>
            <ConfirmDialog
                danger
                title="Excluir Conta"
                text="Tem certeza que deseja excluir sua conta?"
                open={confirmOpen}
                closeDialog={closeConfirmDialog}
                confirmDialog={handleDelete}
            />
            <PageHeader variant={"h2"} text="Minha Conta"/>
            <FormField
                label="Nome"
                type="text"
                id="name"
                formState={[form, setForm]}
            />
            <FormField
                disabled
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
            <ButtonOption
                text="Atualizar"
                onClick={handleSubmit}
            />
            { Auth.isAdmin(auth) &&
                <ButtonOption
                    text="Excluir Conta"
                    onClick={() => setConfirmOpen(true)}
                />
            }

        </OptionsColumn>
    )
};

export default UserPage;
