import {createContext, useContext, useState} from "react";
import Notification from "../components/Notification.jsx";

const NotificationContext = createContext({})
const useNotify = () => {
    const [visible, setVisible] = useState(false);
    const [body, setBody] = useState("");
    const [severity, setSeverity] = useState("info");
    const [title, setTitle] = useState("");
    function show(title, body, severity) {
        setVisible(true);
        setBody(body);
        setTitle(title);
        setSeverity(severity);
    }
    return { visibleState: [visible, setVisible], body, severity, title, show };
}
const NotificationProvider = ({ children }) => {
    const n = useNotify({});
    return (
        <NotificationContext.Provider value={ {show: n.show} }>
            <Notification visibleState={n.visibleState} body={n.body} severity={n.severity} title={n.title}/>
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext);
}

export default NotificationProvider
