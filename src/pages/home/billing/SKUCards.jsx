import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import {useBillingClient} from "../../../providers/BillingClientProvider.jsx";
import SKUCard from "./SKUCard.jsx";
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

export default SKUCards
