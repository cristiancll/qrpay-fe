import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React, {useState} from "react";
import {useBillingClient} from "../../../providers/BillingClientProvider.jsx";
import SKUCards from "./SKUCards.jsx";

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

export default ItemCard
