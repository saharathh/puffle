import { Button, Container, InputLabel, Paper, FormControl, Select, MenuItem, Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import Allphoto from '../../assets/Allphoto';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const images = Allphoto

const CartItem = ({ item, number, quantityHandler, decreaseQuantity, increaseQuantity, removeFromCartHandler }) => {
    const location = useLocation();

    return (
        <>
        <Grid item lg={8}>
            <Paper sx={{display: 'flex', flexDirection: 'row'}}>
            {images.filter(images => images.name === `${item.name}`).map(image => (
                <Box key={item.product} sx={{ p: 12, mr: 4, backgroundImage: `url(${image.photo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                </Box>
            ))}
                <Stack sx={{display: 'flex', flexGrow: 0.5, flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}>
                    <Typography variant="h5">
                        <Link style={{textDecoration: 'none', 
                        '&:hover': 
                        { textDecoration: 'underline'}}} 
                        to={`/product/${item.product}`} >
                            {item.name}
                        </Link>
                    </Typography>
                    <Typography variant="h6" sx={{mt: 1, mr: 3}}>
                        {Number(item.price * location.state.quantitySelect)} บาท
                    </Typography>
                </Stack>
                <Box sx={{display: 'flex', flexDirection: 'row', my: 2, ml: 6, mr: 4, justifyContent: 'center', alignItems: 'center'}}>
                    <Button onClick={() => {decreaseQuantity()}} variant="outlined" sx={{borderWidth: 2}}>
                        <Typography sx={{fontSize: 18}}>
                            -
                        </Typography>
                    </Button>
                    <Typography sx={{fontSize: 24, mx: 4}}>
                        {Number(location.state.quantitySelect + number)}
                    </Typography>
                    <Button onClick={() => {increaseQuantity()}} variant="outlined" sx={{borderWidth: 2}}>
                        <Typography sx={{fontSize: 18}}>
                            +
                        </Typography>
                    </Button>
                </Box>
                <Button onClick={() => removeFromCartHandler(item.product)}>
                    <FaTrashAlt />
                </Button>
            </Paper>
        </Grid>
        </>
    )
}

export default CartItem;
