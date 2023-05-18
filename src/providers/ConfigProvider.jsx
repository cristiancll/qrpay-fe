import React, {useContext, useState, useEffect, useMemo} from 'react';
import {useMediaQuery} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ConfigContext = React.createContext({});

const useThemeConfig = () => {
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: 'dark',
                },
            }),
        [],
    );
    return {
        theme
    }
}

const useConfiguration = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [configuration, setConfiguration] = useState({
        darkMode: false,
        theme: null,
    });
    const {theme} = useThemeConfig()
    useEffect(() => {
        setConfiguration({
            darkMode: false,
            theme,
        })
        setIsLoaded(true)
    }, [theme])
    return {
        ...configuration,
        isLoaded
    }
}

const ConfigProvider = ({children}) => {
    const config = useConfiguration()
    if (!config.isLoaded) {
        return null
    }
    return (
        <ConfigContext.Provider value={config}>
            <ThemeProvider theme={config.theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ConfigContext.Provider>
    );
};

export const useConfig = () => useContext(ConfigContext);
export default ConfigProvider;
