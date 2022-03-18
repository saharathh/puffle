import React from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import pufflegirl from '../../assets/9.jpg'
import { AiOutlineInstagram } from 'react-icons/ai';

const Pufflegirl = () => {
    return (
        <Container>
            <Grid container spacing={10} sx={{my: 8}}>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Typography variant="h4">
                            Be Part Of The Puffle Girls.
                        </Typography>
                        <Stack sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Typography>
                                Follow Puffle on
                            </Typography>
                            <Button href="https://instagram.com/puffle.co?utm_medium=copy_link" sx={{color: 'black', '&:hover': {color: '#f7b42c'}}}>
                                <AiOutlineInstagram size={28}/>
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{display: 'flex', backgroundImage: `url(${pufflegirl})`, height: 600, backgroundSize: 'cover'}}>
                        <>
                        </>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Pufflegirl;
