import React from 'react';
import { Button, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Allphoto from '../../assets/Allphoto.js';

const images = Allphoto;

const ProductItem = ({product_id, product_name, price}) => {
    let navigate = useNavigate();
    return (
        <Card elevation={0} onClick={() => {navigate(`/product/${product_id}`);}} sx={{
            m: 1.5, 
            transition: 'transform 0.75s',
            '&:hover':{
                transform: 'translate(0, -25px)',
                cursor: 'pointer'
            }}}>
            <CardContent sx={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {images.filter(images => images.name === `${product_name}`).map(image => (
                    <Box key={product_id} sx={{backgroundImage: `url(${image.photo})`, backgroundSize: 'cover', backgroundPosition: 'center', height: 400}}>
                        <Box sx={{p: 30}}>
                        </Box>
                    </Box>
                ))}
                <Typography variant="h4" sx={{mt: 2, mb: 1, fontSize:{ xs: 20}, textAlign: 'center'}}>
                    {product_name}
                </Typography>
                <Typography variant="body1">
                    {price} บาท
                </Typography>
            </CardContent>
      </Card>
    )
}

export default ProductItem;