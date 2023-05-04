import {Button, Grid, Typography} from "@mui/material";
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Error from "../../common/error.js";
import CenterContainer from "../../components/CenterContainer.jsx";
import FormField from "../../components/FormField.jsx";
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
        if (form.name.value === "") {
            update.name.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (form.phone.value === "") {
            update.phone.error = Error.MANDATORY_FIELD;
            ok = false;
        }
        if (form.email.value === "") {
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
                        variant="h1"
                        color="#BDBDBD">
                        Perfil
                    </Typography>
                </Grid>
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
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Atualizar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={handleDelete}
                    >
                        Deletar Conta
                    </Button>
                </Grid>
            </Grid>
        </CenterContainer>
    )
};

export default UserPage;
