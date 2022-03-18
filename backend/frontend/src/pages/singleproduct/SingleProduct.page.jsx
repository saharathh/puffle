import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/navbar.component';
import Announcement from '../../components/announcement/announcement.component';
import Footer from '../../components/footer/Footer.component';
import { Button, Container, Skeleton, InputLabel, Paper, FormControl, Select, MenuItem, Box, Grid, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

//Actions
import { getProductDetails } from '../../redux/actions/productAction';
import { addToCart } from '../../redux/actions/cartAction'

//photo asset
import Allphoto from '../../assets/Allphoto';

const images = Allphoto;

const SingleProductPage = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [ quantity, setQuantity ] = useState(1);

    const handleChange = (event) => {
        setQuantity(event.target.value);
      };

    const addToCartHandler = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart', {state: {key: id, quantitySelect: quantity}});
    }

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && id !== "") {
            dispatch(getProductDetails(id))
        }
    }, [id])

    return (
        <>
        <Announcement />
        <Navbar />
        <Container>
            <Grid container spacing={6} sx={{my: 1,}}>
            {loading ? (
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Skeleton variant="rectangular" width={410} height={620} sx={{ mr: 2}}/>
                <Skeleton variant="rectangular" width={410} height={620} sx={{ml: 2}}/>
            </Box>
            )
            : error ? (<h2>error...</h2>)
            : (
                <>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                {images.filter(images => images.name === `${product.product_name}`).map(image => (
                    <Box key={product._id} sx={{backgroundImage: `url(${image.photo})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%'}}>
                        <Box sx={{p: 36}}>
                        </Box>
                    </Box>
                ))}
                </Grid>
                <Grid key={product._id} item xs={12} sm={12} md={7} lg={7}>
                    <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column'}, justifyContent: {xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start'}, alignItems: {xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start'}, textAlign: {xs: 'center', sm: 'center', md: 'left', lg: 'left'}}}>
                        <Typography variant="h3" sx={{mb: 2}}>
                            {product.product_name}
                        </Typography>
                        <Typography variant="h6" sx={{mb: 1,}}>
                            รายละเอียดสินค้า
                        </Typography>
                        <Typography variant="subtitle1" sx={{whiteSpace: 'pre-line', lineHeight: 2.5}}>
                            {product.product_description}
                        </Typography>
                        {product.product_stock > 0 
                            ?  
                            <Typography variant="h6" sx={{my: 2}}>
                                สินค้าในสต็อค : {product.product_stock}
                            </Typography>
                            :
                            <Typography variant="h6" sx={{my: 2}}>
                                สินค้าในสต็อค : ไม่มีสินค้า
                            </Typography>
                        }
                        <Paper elevation={4} sx={{p: 4, backgroundColor: '#FFFBCC'}}>
                            <Stack sx={{display: 'flex', flexDirection: {xs: 'row', sm: 'row', md: 'row', lg: 'row'}}}>
                                <Box sx={{mb: 1.75, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <Typography variant="subtitle1" sx={{ mr: 6, color: '#f7b42c'}}>
                                        ราคา
                                    </Typography>
                                    <Typography sx={{mr: 6, fontSize: 18, fontWeight: 500, color: '#f7b42c'}}>
                                        {Number(product.product_price * quantity)} บาท
                                    </Typography>
                                </Box>
                                <Box sx={{ minWidth: 120, my: 2, color: '#f7b42c'}}>
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel id="demo-simple-select-label">จำนวน</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={quantity}
                                        label="จำนวน"
                                        onChange={handleChange}
                                        >
                                        {[...Array(product.product_stock).keys()].map(x => (
                                            <MenuItem keys={x + 1} value={x+1}>{x + 1}</MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Stack>
                        </Paper>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: {xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start'}}}>
                        <Button variant="contained" sx={{
                                    backgroundImage: 'linear-gradient(315deg, #fc575e 0%, #f7b42c 94%)',
                                    borderRadius: '12px',
                                    mt: 4,
                                    fontSize: 24,
                                }}>
                            <Box onClick={addToCartHandler} sx={{display: 'flex', flexDirection: 'row', p: 1, color: 'white',}}>
                                <Typography sx={{
                                    fontSize: 18, 
                                    fontWeight: 400,
                                    letterSpacing: 3,
                                    pr:1}}>
                                    ใส่ตะกร้า
                                </Typography>
                                <FaShoppingCart />
                            </Box>
                        </Button>
                    </Box>
                </Grid>
                </>
            )
            }
            </Grid>
        </Container>
        <Footer />
        </>
    )
}

export default SingleProductPage;
