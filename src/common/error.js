const Error = {
    MANDATORY_FIELD: 'Este campo é obrigatório',
    INVALID_CREDENTIALS: 'Usuario ou senha incorretos',
    PASSWORDS_DO_NOT_MATCH: 'As senhas não coincidem',
    CONFIRM_PASSWORD: 'Confirme a senha',
    has(error) {
        return error !== undefined && error !== null && error !== '';
    },
}
export default Error
