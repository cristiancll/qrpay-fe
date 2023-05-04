import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import ConfigProvider from "./providers/ConfigProvider.jsx";

const App = () => {
    return (
        <ConfigProvider>
            <BrowserRouter>
                <AuthProvider>
                    <AppRoutes/>
                </AuthProvider>
            </BrowserRouter>
        </ConfigProvider>
    );
};

export default App;
