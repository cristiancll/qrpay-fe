const UserAccess = {
    ADMIN: 16,
    MANAGER: 8,
    BILLING: 4,
    SELLER: 2,
    CLIENT: 1,
}

const Auth = {
    isAdmin: (auth) => {
        // return true
        const u = auth.user;
        return u && (u.role & UserAccess.ADMIN) === UserAccess.ADMIN;
    },
    isManager: (auth) => {
        // return true
        const u = auth.user;
        return u && (u.role & UserAccess.MANAGER) === UserAccess.MANAGER;
    },
    isBilling: (auth) => {
        // return true
        const u = auth.user;
        return u && (u.role & UserAccess.BILLING) === UserAccess.BILLING;
    },
    isSeller: (auth) => {
        // return true
        const u = auth.user;
        return u && (u.role & UserAccess.SELLER) === UserAccess.SELLER;
    },
    isClient: (auth) => {
        // return true
        const u = auth.user;
        return u && (u.role & UserAccess.CLIENT) === UserAccess.CLIENT;
    },
    isAuthenticated: (auth) => {
        // return true
        const u = auth.user;
        return u && u.uuid;
    },
    isVerified(auth) {
        // return true
        const u = auth.auth;
        return u && u.verified;
    },
    isDisabled: (auth) => {
        // return true
        const u = auth.user;
        return u && u.disabled;
    },
    onlyOneRole: (auth) => {
        const role = auth?.user?.role;
        if (!role) return true;
        // Checks if role is a power of 2 in the range of UserAccess
        return role && (role & (role - 1)) === 0 && role <= UserAccess.ADMIN;
    }
}

export default Auth
