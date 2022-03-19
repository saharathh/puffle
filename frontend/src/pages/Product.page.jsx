import React, { useEffect } from 'react'
import { Container, Box, Grid, Skeleton, Typography } from '@mui/material';
import Navbar from '../components/navbar/navbar.component';
import Announcement from '../components/announcement/announcement.component';
import ProductItem from '../components/product_item/ProductItem.component';
import Footer from '../components/footer/Footer.component';
import { getProducts as listProducts} from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const skeletons = [1, 2, 3, 4, 5, 6]

const ProductPage = ({type}) => {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
        <Announcement />
        <Navbar />
        <Container>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h3" sx={{mt: 4}}>
                    {type}
                </Typography>
            </Box>
            <Grid container rowSpacing={2} columnSpacing={2} sx={{mt: 4}}>
                {loading ? (
                    skeletons.map(skeleton => (
                        <Grid key={skeleton.id} item xs={12} sm={12} md={4} lg={4}>
                            <Box key={skeleton.id} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <Skeleton variant="rectangular" width={210} height={320} />
                                <Skeleton width="50%" sx={{my: 1}} />
                                <Skeleton width="30%" />
                            </Box>
                        </Grid>
                    )))
                : error ? <h2>{error}</h2> 
                : products.filter(product => product.product_type === `${type}` || `${type}` === "สินค้าทั้งหมด").map(product => (
                    <Grid key={product._id} item xs={12} sm={12} md={4} lg={4}>
                        <ProductItem key={product._id} product_id={product._id} product_name={product.product_name} price={product.product_price}/>
                    </Grid>
                ))}    
            </Grid>                
        </Container>
        <Footer />
        </>
    )
}

export default ProductPage;
