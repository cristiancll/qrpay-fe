const Error = {
    MANDATORY_FIELD: 'Este campo é obrigatório',
    INVALID_CREDENTIALS: 'Email ou senha incorretos',
    PASSWORDS_DO_NOT_MATCH: 'As senhas não coincidem',
    has(error) {
        return error !== undefined && error !== null && error !== '';
    },
}
export default Error
