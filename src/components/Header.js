import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import JavascriptIcon from '@mui/icons-material/Javascript';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

const HEADER_DATA = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' }
];

const Header = () => {
    return (
        <AppBar sx={{ backgroundColor: '#000' }} position='static'>
            <Toolbar>
                <Box component={NavLink} to='/' color='inherit' sx={{ display: 'flex', textDecoration: 'none', mr: 5 }}>
                    <Typography>React</Typography>
                    <JavascriptIcon />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    {HEADER_DATA.map(link => (
                        <Button color='inherit' key={link.path} component={NavLink} to={link.path}>{link.label}</Button>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip>
                        <IconButton color='inherit'>
                            <Badge badgeContent={2} color='secondary' max={10}>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header