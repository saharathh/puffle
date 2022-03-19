import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/navbar.component';
import Announcement from '../components/announcement/announcement.component';
import Footer from '../components/footer/Footer.component';
import { Alert, AlertTitle, Button, Stack, Container, Paper, Box, Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Allphoto from '../assets/Allphoto';

//action
import { removeFromCart } from '../redux/actions/cartAction';

const images = Allphoto

const CartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const [ number, setNumber ] = useState(0);

    const decreaseQuantity = () => {
        setNumber(number - 1)
    }

    const increaseQuantity = () => {
        setNumber(number + 1)
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity + number, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * (item.quantity + number), 0)
    }

    useEffect(() => {}, []);

    return (
        <>
        <Announcement />
        <Navbar quantity={Number(cartItems.quantity + number)}/>
        <Container>
            <Alert severity="warning" sx={{mt: 4}}>
                <AlertTitle>อยู่ในระหว่างขั้นตอนการปรับปรุงระบบ</AlertTitle> 
                ระบบตะกร้าอาจทำงานได้ไม่ถูกต้องอย่างที่ควรจะเป็น ขออภัยผู้ใช้เว็บไซต์ทุกท่านไว้ ณ ที่นี้
            </Alert>
            <Typography variant="h4" sx={{my: 6}}>
                ตะกร้าสินค้าของคุณ
            </Typography>
                <Grid container spacing={4}
                    direction="row"
                    alignItems="flex-start">
                {cartItems.length === 0 ? (
                    <Grid item xs={4}>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <Typography variant="h5">
                                ไม่มีสินค้าในตระกร้า
                            </Typography>
                        </Box>
                    </Grid>
                )
                : (
                cartItems.map((item) => (
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Paper sx={{display: 'flex', flexDirection: 'row'}}>
                        {images.filter(images => images.name === `${item.name}`).map(image => (
                            <Box key={item.product} sx={{ p: 12, mr: 4, backgroundImage: `url(${image.photo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            </Box>
                        ))}
                            <Stack sx={{display: 'flex', flexGrow: 2, flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}>
                                <Typography sx={{fontSize: {xs: 16}}}>
                                    <Link style={{textDecoration: 'none', 
                                    '&:hover': 
                                    { textDecoration: 'underline'}}} 
                                    to={`/product/${item.product}`} >
                                        {item.name}
                                    </Link>
                                </Typography>
                                {number < 1 ?
                                (
                                    <Typography sx={{mt: 1, mr: 3, fontSize: {xs: 14}}}>
                                        {Number(item.price)} บาท
                                    </Typography>
                                )
                                : (
                                    <Typography sx={{mt: 1, mr: 3, fontSize: {xs: 14}}}>
                                        {Number(item.price * (item.quantity + number))} บาท
                                    </Typography>
                                )}
                            </Stack>
                            <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }, my: 2, ml: 6, mr: 4, justifyContent: 'center', alignItems: 'center'}}>
                                {<Button disabled={number < 1} onClick={() => {decreaseQuantity()}} variant="outlined" sx={{borderWidth: 2}}>
                                    <Typography sx={{fontSize: 18}}>
                                        -
                                    </Typography>
                                </Button>}
                                <Typography sx={{fontSize: 24, mx: 4}}>
                                    {Number(item.quantity + number)}
                                </Typography>
                                <Button onClick={() => {increaseQuantity()}} variant="outlined" sx={{borderWidth: 2}}>
                                    <Typography sx={{fontSize: 18}}>
                                        +
                                    </Typography>
                                </Button>
                                <Button onClick={() => removeFromCartHandler(item.product)}>
                                    <FaTrashAlt />
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                )))}
                {cartItems.length === 0 ? (
                    <Grid item xs={4}>
                        <Button sx={{fontSize: 20}}>
                            <Link to="/">
                                กลับหน้าแรก
                            </Link>
                        </Button>
                    </Grid>
                )
                : (
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Box sx={{display: 'flex', flexDirection: 'row',}}>
                            <Paper sx={{display: 'flex', flexDirection: 'column', p: 4}}>
                                <Typography variant="h6" sx={{letterSpacing: 1}}>
                                    จำนวนสินค้าทั้งหมด <span style={{fontWeight: 500, color: '#f7b42c'}}>({Number(getCartCount())})</span> ชิ้น
                                </Typography>
                                <Typography variant="h6" sx={{mt: 1, letterSpacing: 1}}>
                                    จำนวนเงินทั้งหมด <span style={{fontWeight: 500, color: '#f7b42c'}}>{Number(getCartSubTotal().toFixed(2))}</span> บาท
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                )}
                </Grid>
        </Container>
        <Footer />
        </>
    )
}

export default CartPage