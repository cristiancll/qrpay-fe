import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../api/api.js";
import Cookies from "js-cookie";

const AuthContext = createContext({})

function getUserFromCookie() {
    const userCookie = Cookies.get('user');
    if (userCookie) {
        return JSON.parse(userCookie);
    }
    return null;
}


const useAuth = () => {
    const [user, setUser] = useState(getUserFromCookie());
    const navigate = useNavigate();
    useEffect(() => {
        const userCookie = getUserFromCookie()
        setUser(userCookie);
    }, [])

    const login = (user, password, onError = {}) => {
        API.Auth.Login({user, password}, (data) => {
            const user = data.getUser().toObject();
            Cookies.set('user', JSON.stringify(user));
            setUser(user);
            navigate("/");
        }, onError)
    };

    const logout = () => {
        API.Auth.Logout({}, () => {
            Cookies.remove('user');
            setUser(null);
            navigate("/login");
        })
    };
    return { user, login, logout };
}
const AuthProvider = ({ children }) => {
    const auth = useAuth();
    return (
        <AuthContext.Provider value={ auth }>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthentication = () => {
    return useContext(AuthContext);
}

export default AuthProvider
