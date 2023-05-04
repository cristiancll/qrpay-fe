import {IconButton, Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import CenterContainer from "../components/CenterContainer.jsx";

const VerifyEmailPage = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
    const [verified, setVerified] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const code = searchParams.get("code");
    useEffect(() => {
        // TODO: verify email with code
        // setVerified(true);
    }, [code])

    useEffect(() => {
        if (verified) {
            const interval = setInterval(() => {
                setCountdown(countdown - 1);
            }, 1000);
            if (countdown === 0) {
                navigate("/");
            }
        }
    }, [verified, countdown]);

    return (
        <CenterContainer>
            <Typography variant="h6" color={"#BDBDBD"}>
                {
                    verified
                    ? <>Email verificado com sucesso!</>
                    : <>Verificando email...</>
                }
            </Typography>
        </CenterContainer>
    );
};

export default VerifyEmailPage;
