import {Button, Grid, Typography} from "@mui/material";
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Error from "../common/error.js";
import CenterContainer from "../components/CenterContainer.jsx";
import FormField from "../components/FormField.jsx";
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
                        variant="h3"
                        color="#BDBDBD">
                        Recuperar Senha
                    </Typography>
                </Grid>
                <FormField
                    label="Usuário"
                    type="text"
                    id="user"
                    form={form}
                    events={{handleChange, handleBlur}}
                />
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Enviar E-mail
                    </Button>
                </Grid>
            </Grid>
        </CenterContainer>
    )
};

export default ResetPasswordPage;
