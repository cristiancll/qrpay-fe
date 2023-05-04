const UserAccess = {
    ADMIN: 16,
    MANAGER: 8,
    BILLING: 4,
    SELLER: 2,
    CLIENT: 1,
}

const Auth = {
    isAdmin: (auth) => {
        return true;
        // const u = auth.user;
        // return u && (u.access & UserAccess.ADMIN) === UserAccess.ADMIN;
    },
    isManager: (auth) => {
        return true;
        // const u = auth.user;
        // return u && (u.access & UserAccess.MANAGER) === UserAccess.MANAGER;
    },
    isBilling: (auth) => {
        return true;
        // const u = auth.user;
        // return u && (u.access & UserAccess.BILLING) === UserAccess.BILLING;
    },
    isSeller: (auth) => {
        return true;
        // const u = auth.user;
        // return u && (u.access & UserAccess.SELLER) === UserAccess.SELLER;
    },
    isClient: (auth) => {
        return true;
        // const u = auth.user;
        // return u && (u.access & UserAccess.CLIENT) === UserAccess.CLIENT;
    },
    isAuthenticated: (auth) => {
        return true;
        // const u = auth.user;
        // return u && u.id;
    }
}

export default Auth
