import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const HttpRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.protocol !== "https:") {
            navigate(`https://${window.location.hostname}${window.location.pathname}`)
        }
    }, [navigate]);

    return <></>;
};

export default HttpRedirect;
