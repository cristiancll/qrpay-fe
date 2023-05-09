const UserAccess = {
    ADMIN: 16,
    MANAGER: 8,
    BILLING: 4,
    SELLER: 2,
    CLIENT: 1,
}

const Auth = {
    isAdmin: (auth) => {
        const u = auth.user;
        return u && (u.role & UserAccess.ADMIN) === UserAccess.ADMIN;
    },
    isManager: (auth) => {
        const u = auth.user;
        return u && (u.role & UserAccess.MANAGER) === UserAccess.MANAGER;
    },
    isBilling: (auth) => {
        const u = auth.user;
        return u && (u.role & UserAccess.BILLING) === UserAccess.BILLING;
    },
    isSeller: (auth) => {
        const u = auth.user;
        return u && (u.role & UserAccess.SELLER) === UserAccess.SELLER;
    },
    isClient: (auth) => {
        const u = auth.user;
        return u && (u.role & UserAccess.CLIENT) === UserAccess.CLIENT;
    },
    isAuthenticated: (auth) => {
        const u = auth.user;
        return u && u.uuid;
    },
}

export default Auth
