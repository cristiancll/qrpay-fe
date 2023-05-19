import AddIcon from "@mui/icons-material/Add.js";
import RemoveIcon from "@mui/icons-material/Remove.js";
import {Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import * as PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import API from "../../../api/api.js";
import Auth from "../../../common/auth.js";
import Utils from "../../../common/utils.js";
import OutletContainer from "../../../components/OutletContainer.jsx";
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import SellerClientProvider, {useSellerClient} from "../../../providers/SellerClientProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage.jsx";
import OptionsColumn from "../../../components/OptionsColumn.jsx";


const SellerClientPage = () => {
    const auth = useAuthentication()
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [searchParams, setSearchParams] = useSearchParams()
    const uuid = searchParams.get("uuid")
    useEffect(() => {
        API.User.Get({uuid},
            (res) => setUser(Utils.sanitizeProto(res.getUser())),
            (err) => navigate("/seller")
        )
    }, [uuid])

    if (!Auth.isSeller(auth)) {
        return <UnauthorizedPage/>
    }
    if (!user) {
        return <CircularProgress/>
    }
    return (
        <SellerClientProvider user={user}>
            <SafetyContainer>
                <OutletContainer rowSpacing={1} alignItems={"flex-start"} justifyContent={"space-between"}>
                    <ConfirmRetrievalDialog/>
                    <ItemCards/>
                    <ClientBar/>
                </OutletContainer>
            </SafetyContainer>
        </SellerClientProvider>
    );
};

const SafetyContainer = ({children}) => {
    const {available, isLoaded, user} = useSellerClient()
    if (!isLoaded) {
        return (
            <OptionsColumn middle>
                <CircularProgress/>
            </OptionsColumn>
        )
    }

    if (available.length === 0) {
        return (
            <OptionsColumn middle>
                <Typography variant={"h5"}>
                    {user.name} não possui saldo disponível
                </Typography>
            </OptionsColumn>
        )
    }
    return (<>{children}</>)
}

const ItemCard = ({item}) => {
    const {toggleExpandItem, expandedItems} = useSellerClient()
    const isExpanded = expandedItems.includes(item.uuid)
    return (
        <Grid xs={12}>
            <Card onClick={() => toggleExpandItem(item)}>
                <Typography variant={"h5"}>
                    {item.name}
                </Typography>
                <CardContent>
                    { isExpanded &&
                        <SKUCards item={item}/>
                    }
                </CardContent>
            </Card>
        </Grid>
    )
}

const ItemCards = () => {
    const {getAvailableItems} = useSellerClient();
    const availableItems = getAvailableItems()
    return (
        <Grid xs={12}>
            <Grid
                container={true}
                rowSpacing={1}
                xs={12}
            >
                { availableItems && availableItems.map((item, i) => <ItemCard key={`item_${i}`} item={item}/>)}
            </Grid>
        </Grid>
    )
}



const SKUCards = ({item}) => {
    const { getAvailableSKUs } = useSellerClient()
    const skus = getAvailableSKUs(item)

    return (
        <Grid
            container={true}
            rowSpacing={2}
            columnSpacing={1}
            xs={12}
            onClick={(e) => e.stopPropagation()}
        >
            { skus && skus.map((sku, i) => <SKUCard key={`s_${i}`} sku={sku}/>)}
        </Grid>
    )
}

const SKUCard = ({sku}) => {
    return (
        <Grid xs={12}>
            <Card elevation={3}>
                <Grid container xs={12} sx={{margin: "5px"}}>
                    <SKUDetails sku={sku}/>
                    <RetrievalAmount sku={sku}/>
                </Grid>
            </Card>
        </Grid>
    )
}

const SKUDetails = ({sku}) => {
    const {getSKURetrieval} = useSellerClient()
    const skuRetrieval = getSKURetrieval(sku)
    const containerCSS = {
        height: "100%",
        alignItems: "stretch",
        marginLeft: "10px",
        marginRight: "20px",
        textAlign: "left"
    }
    return (
        <Grid xs={10}>
            <Grid container xs={12} sx={containerCSS}>
                <Grid xs={12}>
                    <Typography variant={"h6"}>
                        {sku.name}
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography sx={{fontSize: "12px"}}>
                        {sku.description}
                    </Typography>
                </Grid>
                <Grid xs={12} alignSelf={"end"}>
                    <Grid container justifyContent={"left"}>
                        <Grid>
                            <Typography variant={"h6"}>
                                Disponíveis: {skuRetrieval.totalAvailable}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const RetrievalAmount = ({sku}) => {
    const {changeAmount, getSKURetrieval} = useSellerClient()
    const skuRetrieval = getSKURetrieval(sku)

    const handleAdd = (e) => {
        e.stopPropagation()
        changeAmount(sku, false)
    }
    const handleRemove = (e) => {
        e.stopPropagation()
        changeAmount(sku, true)
    }
    return (
        <Grid xs={2}>
            <Grid container
                  xs={12}
                  rowGap={1}
            >
                <Grid xs={12}>
                    <Button onClick={handleAdd}>
                        <AddIcon/>
                    </Button>
                </Grid>
                <Grid xs={12}>
                    <Typography variant={"h5"}>
                        { skuRetrieval.totalRetrieved }
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <Button onClick={handleRemove}>
                        <RemoveIcon/>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

const ClientBar = () => {
    const {total, completeOrder, user} = useSellerClient()
    return (
        <Grid xs={12}>
            <Grid container={true} xs={12} justifyContent={"space-between"} alignItems={"baseline"}>
                <Grid sx={{marginLeft:"15px"}}>
                    {user.name}
                </Grid>
                <Grid sx={{marginRight:"15px"}}>
                    <Typography variant={"h5"}>
                        Total: {total}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs={12}>
                    <Button
                        color={"success"}
                        variant={"contained"}
                        onClick={completeOrder}
                        disabled={total === 0}
                    >
                        CONFIRMAR PEDIDO
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

const ConfirmRetrievalDialog = () => {
    const {confirmDialogOpen, closeConfirmDialog, confirmRetrieval, user} = useSellerClient()

    return (
        <Dialog open={confirmDialogOpen} onClose={closeConfirmDialog} fullWidth={true} maxWidth={"sm"}>
            <DialogTitle>
                {user.name}
                <Typography>{user.phone}</Typography>
            </DialogTitle>
            <DialogContent>

                <RetrievalTable/>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeConfirmDialog} color={"error"}>Cancelar</Button>
                <Button onClick={confirmRetrieval} autoFocus color={"success"}>
                    CONFIRMAR PEDIDO
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const RetrievalTable = () => {
    const {retrieval, total} = useSellerClient()
    return (
        <TableContainer component={Paper}>
            <Table aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            Item
                        </TableCell>
                        <TableCell align="right">
                            Retirada
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { retrieval && Object.keys(retrieval).map((key, i) => {
                        const row = retrieval[key]
                        if (row.totalRetrieved === 0) {
                            return null
                        }
                        return <RetrievalTableRow key={`r_${i}`} r={row}/>
                    })}
                    <TableRow>
                        <TableCell>
                            Pedidos
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant={"h5"}>
                                { total }
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const RetrievalTableRow = ({r}) => {
    return (
        <TableRow>
            <TableCell align="left">
                {r.sku.name}
            </TableCell>
            <TableCell align="right">
                {r.totalRetrieved}
            </TableCell>
        </TableRow>
    )
}

export default SellerClientPage;
