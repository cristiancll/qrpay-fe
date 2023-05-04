import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AuthContext = createContext({})

const useAuth = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios
                .get("/api/user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    setUser(res.data);
                })
                .catch((err) => {
                    localStorage.removeItem("token");
            });
        }
    }, []);

    const login = (email, password, onError = {}) => {
        axios
            .post("/api/login", { email, password })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                setUser(res.data.user);
                navigate("/");
            })
            .catch((err) => onError(err));
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
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
