import Grid from "@mui/material/Unstable_Grid2";
import React, {useState} from "react";
import {useBillingClient} from "../../../providers/BillingClientProvider.jsx";
import CategoryCard from "./CategoryCard.jsx";
import ItemCards from "./ItemCards.jsx";

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

export default CategoryCards
