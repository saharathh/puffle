import React from 'react';
import { Box, Link, Typography } from '@mui/material';

export const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="saharath.co">
          Saharath.co
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}


const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#FFFBCC', p: 6, mt: 6}} component="footer">
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
                Puffle.co developed by Saharath Harnroongroj
            </Typography>
            <Copyright />
        </Box>
    )
}

export default Footer;