import {TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper, Grid} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, {useEffect, useState} from 'react';
import API from "../../../api/api.js";
import Auth from "../../../common/auth.js";
import Utils from "../../../common/utils.js";
import OutletContainer from "../../../components/OutletContainer.jsx";
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage.jsx";
import QRCode from "react-qr-code";

const WhatsAppPage = () => {
    const auth = useAuthentication()
    const notify = useNotification()
    const [whatsApp, setWhatsApp] = useState({})
    const [whatsAppList, setWhatsAppList] = useState([{}])

    const onData = (data) => {
        const wpp = Utils.sanitizeProto(data)
        setWhatsApp(wpp)
    }
    const onError = (error) => {
        notify.show("Erro ao ler QR Code", "error")
        setWhatsApp(null)
    }
    const onEnd = () => {
        notify.show("WhatsApp Conectado!", "success")
        setWhatsApp(null)
    }
    const onCancel = () => {
        notify.show("WhatsApp Desconectado!", "warning")
        setWhatsApp(null)
    }

    useEffect(() => {
        if (Auth.isAdmin(auth)) {
            API.WhatsApp.QRCodeStream(onData, onError, onEnd)
        }
        return () => {
            API.WhatsApp.StopQRCodeStream(onCancel)
        }
    }, [])

    useEffect(() => {
        if (Auth.isAdmin(auth)) {
            API.WhatsApp.List({}, (res) => {
                const whatsAppList = res.getWhatsapplistList().map((w) => Utils.sanitizeProto(w))
                setWhatsAppList(whatsAppList)
            })
        }
    }, [whatsApp?.qr])

    if (!Auth.isAdmin(auth)) {
        return <UnauthorizedPage/>
    }
    if ((!whatsApp || whatsApp === {}) && (!whatsAppList || whatsAppList.length === 0)) {
        return <CircularProgress />
    }
    return (
        <OutletContainer>
            <QR whatsApp={whatsApp} />
            <Status whatsAppList={whatsAppList}/>
        </OutletContainer>
    );
};

const WhatsAppRow = ({whatsApp}) => {
    const {uuid, phone, scanned, active, banned, createdAt, updatedAt} = whatsApp
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {uuid}
            </TableCell>
            <TableCell align="right">{phone}</TableCell>
            <TableCell align="right">{scanned ? "Sim" : "Não"}</TableCell>
            <TableCell align="right">{active ? "Sim" : "Não"}</TableCell>
            <TableCell align="right">{banned ? "Sim" : "Não"}</TableCell>
            <TableCell align="right">{createdAt}</TableCell>
            <TableCell align="right">{updatedAt}</TableCell>
        </TableRow>
    )
}
const Status = ({whatsAppList}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Telefone</TableCell>
                        <TableCell align="right">Escaneado</TableCell>
                        <TableCell align="right">Ativo</TableCell>
                        <TableCell align="right">Banido</TableCell>
                        <TableCell align="right">Criado</TableCell>
                        <TableCell align="right">Atualizado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { whatsAppList && whatsAppList.map((row, i) => <WhatsAppRow key={i} whatsApp={row} />) }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const QR = ({whatsApp}) => {
    if (!whatsApp || !whatsApp?.qr) {
        return null
    }
    const code = whatsApp.qr
    return (
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 512, width: "100%", background: 'white', padding: '16px', marginBottom: '20px' }}>
            <QRCode
                value={code}
                size={256}
                viewBox={`0 0 256 256`}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
        </div>
    )
}

export default WhatsAppPage;
