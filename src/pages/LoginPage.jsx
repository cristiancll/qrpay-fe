import {Alert} from "@mui/material";
import React, {useState, useEffect} from 'react';
import ButtonOption from "../components/ButtonOption.jsx";
import FormField from "../components/FormField.jsx";
import OptionsColumn from "../components/OptionsColumn.jsx";
import PageHeader from "../components/PageHeader.jsx";
import {useAuthentication} from "../providers/AuthProvider.jsx";
import { useNavigate, useSearchParams} from "react-router-dom";
import Error from "../common/error.js";
import Auth from "../common/auth.js";


function getAlertMsg(alert) {
    if (!alert) {
        return null;
    }
    let msg, severity;
    switch (alert) {
        case "verify":
            severity = "success";
            msg = "Enviamos uma mensagem para o seu número de whatsapp. Responda a mensagem para verificar sua conta."
            break;
        case "disabled":
            severity = "error";
            msg = "Sua conta foi desabilitada. Entre em contato com a administraçào."
            break;
        case "expired":
            severity = "warning";
            msg = "Sua sessão expirou. Faça login novamente."
            break;
        default:
            return null;
    }
    return <Alert severity={severity}>{msg}</Alert>
}

const LoginPage = () => {
    const navigate = useNavigate()
    const auth = useAuthentication();
    const [searchParams] = useSearchParams();
    const alertMsg = searchParams.get("a");
    const [form, setForm] = useState({
        phone: {
            value: "",
            error: null,
        },
        password: {
            value: "",
            error: null,
        }
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (Auth.isAuthenticated(auth)) {
            navigate("/");
            return;
        }
        setLoading(false)

    }, [])


    const validateInputs = () => {
        let ok = true;
        const update = form;
        if (form.phone.value === "") {
            update.phone.error = Error.MANDATORY_FIELD;
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
            auth.login(form.phone.value, form.password.value, (err) => {
                const errMessage = err.message;
                alert(err)
                const update = form;
                update.phone.error = errMessage
                update.password.error = errMessage
                setForm({
                    ...form,
                    ...update
                })
            });
        }
    }

    if (loading) {
        return null;
    }
    return (
        <>
            { getAlertMsg(alertMsg) }
            <OptionsColumn middle>
                <PageHeader
                    text="Login"
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
        </>
    )
};

export default LoginPage;
