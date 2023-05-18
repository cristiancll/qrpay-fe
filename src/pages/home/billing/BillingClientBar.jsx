import {Button} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import Utils from "../../../common/utils.js";
import {useBillingClient} from "../../../providers/BillingClientProvider.jsx";

const BillingClientBar = () => {
    const {total, completeOrder, user} = useBillingClient()
    if (!user) {
        return <CircularProgress/>
    }
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


export default BillingClientBar
