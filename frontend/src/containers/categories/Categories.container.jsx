import React from 'react';
import { Container, Grid } from '@mui/material';
import photo1 from '../../assets/8.jpg';
import photo2 from '../../assets/12.jpg';
import photo3 from '../../assets/3.jpg';
import puffle from '../../assets/puffle.jpg';
import Category from '../../components/category/Category.component';

const categories = [
    {
        id: 1,
        product_name: 'กระเป๋าสะพาย',
        picture_ref: photo1,
        page: 'bag',
    },
    {
        id: 2,
        product_name: 'กระเป๋าผ้า',
        picture_ref: photo2,
        page: 'totebag',
    },
    {
        id: 3,
        product_name: 'กระเป๋าเป้',
        picture_ref: photo3,
        page: 'backpack',
    },
    {
        id: 4,
        product_name: 'puffle',
        picture_ref: puffle,
        page: ''
    }
];



const Categories = () => {
    return (
        <Container sx={{my: 10}}>
            <Grid container rowSpacing={{xs: 3, sm: 3, md: 10, lg: 10}} columnSpacing={10}>
            {categories.map(category => {
                let photo = category.picture_ref;
                return (
                    <Category key={category.id} id={category.id} product_name={category.product_name} page={category.page} photo={photo} />
                )})}          
            </Grid>
        </Container>
    )
}

export default Categories;