import React from 'react';
import { AppBar, Avatar, Badge, Button, Box, Container, Divider, Menu, MenuItem, Toolbar, IconButton, Typography } from '@mui/material';
import { FiMenu } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const pagesRouter = [
{
    id: 1,
    name: 'กระเป๋าสะพาย',
    path: '/bag'
},
{
    id: 2,
    name: 'กระเป๋าเป้',
    path: '/backpack'
},
{
    id: 3,
    name: 'กระเป๋าผ้า',
    path: '/totebag'
},
{
    id: 4,
    name: 'สินค้าทั้งหมด',
    path: '/allproducts'
},]



export const DesktopNavbar = ({quantity}) => {
    let navigate = useNavigate();
    return (
        <>
        <Box sx={{ ml: 8, flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' }, }}>
        {pagesRouter.map(page => {
            return (
            <Button key={page.id} sx={{ m: 1, color: 'white', display: 'block' }} onClick={() => {navigate(`${page.path}`);}}>
                <Typography sx={{fontWeight: 400, color: '#000'}}>
                    {page.name}
                </Typography>
            </Button>
        )})}
        </Box>
        <Box sx={{
            flexGrow: 3.5,
            display: { xs: 'none', md: 'flex' }
        }}>
            <Button onClick={() => {navigate('/');}}>
                <Typography variant="h6"
                noWrap
                component="div"
                sx={{ fontSize: 32, letterSpacing: 3, display: { xs: 'none', md: 'flex', lg: 'flex' }, }}>
                    Puffle.
                </Typography>
            </Button>
        </Box>
        <Box sx={{display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex'}, justifyContent: 'center', mr: 8}}>
            <Button onClick={() => {navigate('/cart');}} sx={{color: 'black'}}>
                <Badge badgeContent={quantity} color="primary">
                    <FaShoppingBag size={24}/>
                </Badge>
            </Button>
        </Box>
        </>
    )
}

export const MobileNavbar = ({quantity}) => {
    const [ mobileMenu, setMobileMenu ] = React.useState(null);

    const handleOpenMobileNavbar = (event) => {
        setMobileMenu(event.currentTarget);
    } 
    const handleCloseMobileNavbar = (event) => {
        setMobileMenu(null);
    } 

    let navigate = useNavigate();
    return (
        <>
        <Box sx={{flexGrow: 1, display: {xs: 'flex', sm: 'flex', md: 'none', lg: 'none'}}}>
            <IconButton onClick={handleOpenMobileNavbar}>
                <FiMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={mobileMenu}
              open={Boolean(mobileMenu)}
              onClose={handleCloseMobileNavbar}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pagesRouter.map((page) => (
                <MenuItem key={pagesRouter} onClick={() => {navigate(`${page.path}`);}} >
                  <Typography sx={{textAlign: 'center'}}>{page.name}</Typography >
                </MenuItem>
              ))}
            </Menu>
        </Box>
        <Box sx={{
            flexGrow: 0.75,
            display: { xs: 'flex', sm: 'flex', md: 'none' }
        }}>
            <Button onClick={() => {navigate('/');}}>
                <Typography variant="h6"
                component="div"
                sx={{letterSpacing: 2, display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' } }}>
                    Puffle.
                </Typography>
            </Button>
        </Box>
        <Box sx={{display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none'}, justifyContent: 'center'}}>
            <Button onClick={() => {navigate('/cart');}} sx={{color: 'black'}}>
                <Badge badgeContent={quantity} color="primary">
                    <FaShoppingBag size={24}/>
                </Badge>
            </Button>
        </Box>
        </>
    )
}


const Navbar = ({quantity}) => {
    return (
        <AppBar position="relative" color="transparent" elevation={0}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <DesktopNavbar quantity={quantity} />
                    <MobileNavbar quantity={quantity} />
                </Toolbar>
            </Container>
            <Divider sx={{ mx: {
                xs: 2.5,
                sm: 2.5,
                md: 6,
                lg: 12,
            }}}/>
        </AppBar>
    )
}

export default Navbar;
