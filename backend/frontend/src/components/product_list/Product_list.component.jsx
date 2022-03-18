import React, { useEffect } from 'react';
import { Link, Container, Box, Grid, Skeleton, Typography } from '@mui/material';
import ProductItem from '../../components/product_item/ProductItem.component';
import { getProducts as listProducts} from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';


const ProductList = ({header, see_more_label, path}) => {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const navigate = useNavigate();

    return (
        <Container>
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row'},justifyContent: { xs: 'flex-start', sm: 'flex-start', md: 'space-between', lg: 'space-between'}, alignItems: 'center', mb: 4, mt: 12, mx: 2.5,}}>
                <Typography variant="h3">
                    {header}
                </Typography>
                <Link href="/allproducts" onClick={() => {navigate(`${path}`) ;}} underline="hover" sx={{fontSize: 20, fontFamily: 'Mitr', mx: 2.5, mt: {xs: 2, sm: 2}}}>
                    {see_more_label}
                </Link>
            </Box>
            <Grid container spacing={1}>
            {loading ? (
                    <>
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton width="50%" />
                        <Skeleton width="40%" />
                    </Box>
                    </> ) 
                : error ? <h2>{error}</h2> 
                : products.filter((product, index) => index < 4).map(product => (
                    <Grid key={product._id} item xs={6} sm={6} md={3} lg={3}>
                        <ProductItem product_id={product._id} product_name={product.product_name} price={product.product_price}/>
                    </Grid>
            ))}
            </Grid>
        </Container>
    )
}

export default ProductList;

// {items.map(item => {
//     let photo = item.pic_ref;
//     return (
//         <Grid item xs={6} sm={6} md={4} lg={3}>
//             <ProductItem key={item.id} image={photo} product_name={item.product_name} price={item.price}/>
//         </Grid>
// )})}