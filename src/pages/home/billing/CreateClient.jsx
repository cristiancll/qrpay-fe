import React, {useState} from 'react';
import Error from "../../../common/error.js";
import ButtonOption from "../../../components/ButtonOption.jsx";
import FormField from "../../../components/FormField.jsx";
import OptionsColumn from "../../../components/OptionsColumn.jsx";
import PageHeader from "../../../components/PageHeader.jsx";
import Check from "../../../common/check.js";

const CreateClient = () => {
    const [form, setForm] = useState({
        name: {
            value: "",
            error: null,
        },
        phone: {
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
            // TODO: Register
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
        <OptionsColumn>
            <PageHeader
                text="Cadastro"
                variant="h2"
            />
            <FormField
                label="Nome"
                type="text"
                id="name"
                form={form}
                events={{handleChange, handleBlur}}
            />
            <FormField
                label="Telefone"
                type="tel"
                id="phone"
                form={form}
                events={{handleChange, handleBlur}}
            />
            <ButtonOption
                text="Cadastrar"
                onClick={handleSubmit}
            />
        </OptionsColumn>
    )
};

export default CreateClient;
