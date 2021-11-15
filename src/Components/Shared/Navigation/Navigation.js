import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import logo from '../../../image/logo.png';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Avatar, Button } from '@mui/material';
import './Navigation.css';

const navStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const Navigation = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // getting data from context here 
    const { user, logoutUser } = useAuth();

    const history = useHistory();

    // handle dashboard here 
    const handleDashboard = () => {
        history.push('/dashboard');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ bgcolor: 'text.primary' }} position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <NavLink to="/"><img className="logo-img" src={logo} alt="" /></NavLink>
                    <Box sx={navStyle}>
                        <NavLink to="/"><Typography variant="button " style={{ textDecoration: 'none', color: '#fff' }} sx={{ flexGrow: 1, px: 2 }}>Home</Typography></NavLink>
                        <NavLink to="/explore-products"><Typography variant="button " style={{ textDecoration: 'none', color: '#fff' }} sx={{ flexGrow: 1, px: 2 }}>Explore Products</Typography></NavLink>
                    </Box>
                    <div>
                        {user.email ? <Box>
                            {!user.photoURL ? <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton> : <Avatar style={{ cursor: 'pointer' }} onClick={handleMenu} alt="Remy Sharp" src={user.photoURL} />}
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem >{user.displayName}</MenuItem>
                                <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
                                <MenuItem onClick={logoutUser}>Logout</MenuItem>
                            </Menu>
                        </Box> : <NavLink to="/login"> <Button sx={{ bgcolor: '#fff', color: '#000', textDecoration: 'none' }} variant="contained">Login</Button></NavLink>}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;