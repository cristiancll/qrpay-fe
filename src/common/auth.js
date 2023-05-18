export const UserAccess = {
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
        return u && (Auth.isAdmin(auth) || ((u.role & UserAccess.MANAGER) === UserAccess.MANAGER));
    },
    isBilling: (auth) => {
        const u = auth.user;
        return u && (Auth.isAdmin(auth) || ((u.role & UserAccess.BILLING) === UserAccess.BILLING));
    },
    isSeller: (auth) => {
        const u = auth.user;
        return u && (Auth.isAdmin(auth) || ((u.role & UserAccess.SELLER) === UserAccess.SELLER));
    },
    isClient: (auth) => {
        const u = auth.user;
        return u && (Auth.isAdmin(auth) || ((u.role & UserAccess.CLIENT) === UserAccess.CLIENT));
    },
    isAuthenticated: (auth) => {
        const u = auth.user;
        return u && u.uuid;
    },
    isVerified(auth) {
        const u = auth.auth;
        return u && u.verified;
    },
    isDisabled: (auth) => {
        const u = auth.user;
        return u && u.disabled;
    },
    onlyOneRole: (auth) => {
        return false
        // const role = auth?.user?.role;
        // if (!role) return true;
        // if (role === UserAccess.ADMIN) return false;
        //// Checks if role is a power of 2 in the range of UserAccess
        // return role && (role & (role - 1)) === 0 && role <= UserAccess.ADMIN;
    }
}

export default Auth
