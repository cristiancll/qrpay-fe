import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import {Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import API from "../../../api/api.js";
import Auth from "../../../common/auth.js";
import Utils from "../../../common/utils.js";
import OptionsColumn from "../../../components/OptionsColumn.jsx";
import OutletContainer from "../../../components/OutletContainer.jsx";
import {useAuthentication} from "../../../providers/AuthProvider.jsx";
import BillingClientProvider, {useBillingClient} from "../../../providers/BillingClientProvider.jsx";
import {useSellerClient} from "../../../providers/SellerClientProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage.jsx";

const BillingClientPage = () => {
    const auth = useAuthentication()
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [searchParams, setSearchParams] = useSearchParams()
    const uuid = searchParams.get("uuid")
    useEffect(() => {
        API.User.Get({uuid},
            (res) => setUser(Utils.sanitizeProto(res.getUser())),
            (err) => navigate("/billing")
        )
    }, [uuid])

    if (!Auth.isBilling(auth)) {
        return <UnauthorizedPage/>
    }
    if (!user) {
        return null
    }
    return (
        <BillingClientProvider user={user}>
            <SafetyContainer>
            <OutletContainer rowSpacing={1} alignItems={"flex-start"} justifyContent={"space-between"}>
                <ConfirmOrderDialog/>
                <CategoryCards/>
                <ClientBar/>
            </OutletContainer>
            </SafetyContainer>
        </BillingClientProvider>
    );

}

const SafetyContainer = ({children}) => {
    const {isLoaded} = useBillingClient()
    if (!isLoaded) {
        return (
            <OptionsColumn middle>
                <CircularProgress/>
            </OptionsColumn>
        )
    }
    return (<>{children}</>)
}

const SKUCard = ({sku}) => {
    return (
        <Grid xs={12}>
            <Card elevation={3}>
                <Grid container xs={12} sx={{margin: "5px"}}>
                    <SKUDetails sku={sku}/>
                    <OrderAmount sku={sku}/>
                </Grid>
            </Card>
        </Grid>
    )
}

const SKUDetails = ({sku}) => {
    const {getStock, getPrice} = useBillingClient()
    const stock = getStock(sku)
    const totalStock = stock?.quantity || 0
    const price = Utils.formatPrice(sku.price)
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
                    <Grid container justifyContent={"space-between"}>
                        <Grid>
                            <Typography variant={"inherit"}>
                                Estoque: {totalStock}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant={"h6"}>
                                {price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
const OrderAmount = ({sku}) => {
    const {changeAmount, getOrderSKU} = useBillingClient()
    const skuOrder = getOrderSKU(sku)

    const handleAdd = (e) => {
        e.stopPropagation()
        changeAmount(sku, 1)
    }
    const handleRemove = (e) => {
        e.stopPropagation()
        changeAmount(sku, -1)
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
                        {skuOrder?.quantity || 0}
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

const SKUCards = ({item}) => {
    const { getItemSkus } = useBillingClient()
    const skus = getItemSkus(item)

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
const ItemCard = ({item}) => {
    const {toggleExpandItem, expandedItems} = useBillingClient()

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
    const {getCategoryItems} = useBillingClient();
    const categoryItems = getCategoryItems()
    return (
        <Grid xs={12}>
            <Grid
                container={true}
                rowSpacing={1}
                xs={12}
            >
                { categoryItems && categoryItems.map((item, i) => <ItemCard key={`item_${i}`} item={item}/>)}
            </Grid>
        </Grid>
    )
}
const CategoryCard = ({category, sizePerCard}) => {
    const {selectedCategory, selectCategory} = useBillingClient();
    const isSelected = selectedCategory && selectedCategory.uuid === category.uuid;
    const containerCSS = {
        padding: "0px 5px 0px 5px",
    }
    const elevation = isSelected ? 10 : 0;
    return (
        <Grid xs={sizePerCard} sx={containerCSS}>
            <Card onClick={() => selectCategory(category)} elevation={elevation}>
                <CardContent>
                    {category.name}
                </CardContent>
            </Card>
        </Grid>
    );
};

const CategoryCards = () => {
    const {categories} = useBillingClient();
    const sizePerCard = 12 / categories.length
    return (
        <Grid xs={12}>
            <Grid
                container={true}
                xs={12}
            >
                { categories && categories.map((category, i) => <CategoryCard key={`c_${i}`} category={category} sizePerCard={sizePerCard}/>)}
                <ItemCards/>
            </Grid>
        </Grid>
    )
}


const ClientBar = () => {
    const {total, completeOrder, user} = useBillingClient()
    return (
        <Grid xs={12}>
            <Grid container={true} xs={12} justifyContent={"space-between"} alignItems={"baseline"}>
                <Grid sx={{marginLeft:"15px"}}>
                    {user.name}
                </Grid>
                <Grid sx={{marginRight:"15px"}}>
                    <Typography variant={"h5"}>
                        {Utils.formatPrice(total)}
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

const ConfirmOrderDialog = () => {
    const {confirmDialogOpen, closeConfirmDialog, confirmOrder, user} = useBillingClient()

    return (
        <Dialog open={confirmDialogOpen} onClose={closeConfirmDialog} fullWidth={true} maxWidth={"sm"}>
            <DialogTitle>
                {user.name}
                <Typography>{user.phone}</Typography>
            </DialogTitle>
            <DialogContent>
                <OrderTable/>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeConfirmDialog} color={"error"}>Cancelar</Button>
                <Button onClick={confirmOrder} autoFocus color={"success"}>
                    PAGAMENTO RECEBIDO
                </Button>
            </DialogActions>
        </Dialog>
    );
};


const OrderTable = () => {
    const {total, order} = useBillingClient()
    return (
        <TableContainer component={Paper}>
            <Table aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            Item
                        </TableCell>
                        <TableCell align="right">
                            Qtd.
                        </TableCell>
                        <TableCell align="right">
                            Preço
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { order && Object.keys(order).map((key, i) => <OrderTableRow key={`o_${i}`} o={order[key]}/>)}
                    <TableRow>
                        <TableCell />
                        <TableCell>
                            Total
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant={"h5"}>
                                { Utils.formatPrice(total) }
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const OrderTableRow = ({o}) => {
    return (
        <TableRow>
            <TableCell align="left">
                {o.name}
            </TableCell>
            <TableCell align="right">
                {o.quantity}
            </TableCell>
            <TableCell align="right">
                {Utils.formatPrice(o.price)}
            </TableCell>
        </TableRow>
    )
}


export default BillingClientPage;
