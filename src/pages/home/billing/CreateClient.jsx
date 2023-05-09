import React, {useState} from 'react';
import Error from "../../../common/error.js";
import ButtonOption from "../../../components/ButtonOption.jsx";
import FormField from "../../../components/FormField.jsx";
import OptionsColumn from "../../../components/OptionsColumn.jsx";
import PageHeader from "../../../components/PageHeader.jsx";

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
