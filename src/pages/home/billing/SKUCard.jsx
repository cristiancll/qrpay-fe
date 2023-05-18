import {Button, Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Utils from "../../../common/utils.js";
import {useBillingClient} from "../../../providers/BillingClientProvider.jsx";
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



export default SKUCard
