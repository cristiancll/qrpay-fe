import {Card, CardContent} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, {useState} from 'react';
import {useBillingClient} from "../../../providers/BillingClientProvider.jsx";

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

export default CategoryCard;
