import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import {useBillingClient} from "../../../providers/BillingClientProvider.jsx";
import ItemCard from "./ItemCard.jsx";

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

export default ItemCards
