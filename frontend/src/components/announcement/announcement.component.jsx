import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { FiTruck } from 'react-icons/fi';

const Announcement = () => {
    return (
        <Container maxWidth='xl' sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#FFFBCC',
            py: 1,
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography sx={{mr: 1, 
                    fontWeight: 500,
                    fontSize: {
                        xs: 12,
                        sm: 12,
                        md: 16,
                        lg: 16,
                    }}}>
                    Today Only :
                </Typography>
                <Typography sx={{mr: 1, fontWeight: 400, fontSize: {
                        xs: 12,
                        sm: 12,
                        md: 16,
                        lg: 16,
                    }}}>
                    Free Shipping on an order over 1,000 baht.
                </Typography>
                <Box sx={{mt: 0.5,
                    fontSize: {
                        xs: 12,
                        sm: 12,
                        md: 16,
                        lg: 16,
                    }}}>
                    <FiTruck />
                </Box>
            </Box>
        </Container>
    )
}

export default Announcement