import React from 'react'
import { Button, Box, Container, Grid, Paper, Typography } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';
import photo from '../../assets/2.jpg'
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Box sx={{
                backgroundImage: `url(${photo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 800,
                my: 4,
            }}>
                <Grid container>
                    <Grid item md={1} lg={1}>
                        <>
                        </>
                    </Grid>
                    <Grid item xs={12} md={10} lg={10} sx={{my: 36}}>
                        <Typography variant="h2" textAlign="center" 
                            sx={{p: 1, 
                                fontWeight: 500,
                                letterSpacing: 2,
                                color: '#FFD32D', 
                                fontSize: {
                                    xs: '22',
                                    sm: '22',
                                    md: '24',
                                    lg: '36',
                                }}}>
                            Puffle
                        </Typography>
                        <Typography variant="h2" textAlign="center" 
                            sx={{p: 1, 
                                fontWeight: 400,
                                color: '#FFD32D', 
                                fontSize: {
                                    xs: '22',
                                    sm: '22',
                                    md: '24',
                                    lg: '36',
                                }}}>
                            กระเป๋าน่ารักที่สุด
                        </Typography>
                        <Box sx={{display:'flex', justifyContent: 'center'}}>
                            <Button variant="contained" onClick={() => {navigate('/allproducts');}} sx={{
                                backgroundImage: 'linear-gradient(315deg, #fc575e 0%, #f7b42c 94%)',
                                borderRadius: '12px',
                                mt: 4,
                                fontSize: 28,
                            }}>
                                <Box sx={{display: 'flex', flexDirection: 'row', p: 1, color: 'white',}}>
                                    <Typography sx={{
                                        fontSize: 22, 
                                        fontWeight: 400,
                                        letterSpacing: 3,
                                        pr:1}}>
                                        ซื้อเลย
                                    </Typography>
                                    <FaShoppingCart />
                                </Box>
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item md={1} lg={1}>
                        <>
                        </>
                    </Grid>
                </Grid>
            </Box>   
        </Container>
    )
}

export default Hero;