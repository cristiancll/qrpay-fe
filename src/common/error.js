const Error = {
    // Client side errors
    MANDATORY_FIELD: 'Este campo é obrigatório',
    PASSWORDS_DO_NOT_MATCH: 'As senhas não coincidem',
    CONFIRM_PASSWORD: 'Confirme a senha',

    // Server side errors
    CONNECTION_ERROR: "Erro de conexão",
    UUID_REQUIRED: "UUID é obrigatório",
    PHONE_REQUIRED: "Telefone é obrigatório",
    PASSWORD_REQUIRED: "Senha é obrigatória",
    NAME_REQUIRED: "Nome é obrigatório",
    AUTH_ERROR: "Erro de autenticação",
    INTERNAL_ERROR: "Erro interno",
    INVALID_CREDENTIALS: "Usuario ou senha incorretos",
    DISABLED_USER: "Usuário desabilitado",
    VERIFICATION_ERROR: "Erro ao verificar usuário",
    USER_ALREADY_EXISTS: "Usuário já existe",
    WHATSAPP_ALREADY_EXISTS: "Whatsapp já existe",
    DATABASE_ERROR: "Erro de banco de dados",
    has(error) {
        return error !== undefined && error !== null && error !== '';
    },
    get(errorMessage) {
        return Error[errorMessage]
    }
}


export default Error
