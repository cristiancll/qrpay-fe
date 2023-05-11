import {StatusCode} from "grpc-web";
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
    const [isLoading, setLoading] = useState(true);

    const login = (phone, password, onError = {}) => {
        API.Auth.Login({phone, password}, (data) => {
            const u = {...data.getUser().toObject(), ...data.getAuth().toObject()}
            Cookies.set('user', JSON.stringify(u));
            setUser(u);
            navigate("/");
        }, onError)
    };

    const logout = () => {
        const handleLogout = (r) => {
            Cookies.remove('user');
            setUser(null);
            navigate("/login");
        }
        API.Auth.Logout({}, handleLogout, handleLogout)
    };

    useEffect(() => {
        if (!user) {
            setLoading(false)
            return;
        }
        setLoading(true)
        API.Auth.Heartbeat({}, (data) => {
            const u = {...data.getUser().toObject(), ...data.getAuth().toObject()}
            Cookies.set('user', JSON.stringify(u));
            setUser(u)
            setLoading(false)
        }, (err) => {
            if (err.code === StatusCode.UNAUTHENTICATED) {
                logout()
            }
        })
    }, [navigate])


    return { user, login, logout, isLoading };
}
const AuthProvider = ({ children }) => {
    const auth = useAuth();
    return (
        <AuthContext.Provider value={ {user: auth.user, login: auth.login, logout: auth.logout} }>
            {!auth.isLoading && children}
        </AuthContext.Provider>
    )
}

export const useAuthentication = () => {
    return useContext(AuthContext);
}

export default AuthProvider
