import { Container, Typography, TextField, Button, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import logo from '../../../image/logo-2.png';
import useAuth from '../../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Signup = () => {

    // getting data from context here 
    const { error, setError, registerUser, googleSignIn } = useAuth();

    // user state 
    const [userData, setUserData] = useState({});

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...userData }
        newUser[field] = value;
        setUserData(newUser)
    }

    // register function 
    const handleSignUp = () => {
        if (userData.password !== userData.password2) {
            setError("You'r password didn't match !");
        }
        registerUser(userData.email, userData.password, userData.name);
    }

    return (
        <Container sx={{ my: 5 }}>
            <img src={logo} alt="" />
            <Box sx={{
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '50%',
                }, margin: 'auto', border: 2, py: 4
            }}>
                <Typography variant="h6" className="title-2" style={{ fontWeight: 'bold' }}>REGISTER</Typography>

                {/* form here  */}
                <Box sx={{ py: 4 }}>
                    <TextField
                        sx={{ width: '80%', my: 1 }}
                        id="outlined-basic"
                        label="Name"
                        name="name"
                        variant="outlined"
                        onBlur={handleBlur}
                    />
                    <TextField
                        sx={{ width: '80%', my: 1 }}
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        onBlur={handleBlur}
                    />
                    <TextField
                        sx={{ width: '80%', my: 1 }}
                        id="outlined-basic"
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        onBlur={handleBlur}
                    />
                    <TextField
                        sx={{ width: '80%', my: 1 }}
                        id="outlined-basic"
                        label="Confirm Password"
                        name="password2"
                        type="password"
                        variant="outlined"
                        onBlur={handleBlur}
                    /> <br />

                    <Button
                        onClick={handleSignUp}
                        sx={{ width: '80%', my: 1, bgcolor: 'text.primary' }}
                        type="submit"
                        size="large"
                        variant="contained">
                        Register
                    </Button>

                    <br />

                    <Typography variant="subtitle1"> Already have an account ? <NavLink to="/login">Login</NavLink> </Typography>

                    <Typography variant="subtitle1" className="title-2"> OR </Typography>

                    <Button
                        onClick={googleSignIn}
                        sx={{ my: 1, bgcolor: 'text.primary' }}
                        variant="contained">
                        Google signin
                    </Button>
                    {error && <Alert severity="error">{error}</Alert>}
                </Box>
            </Box>
        </Container>
    );
};

export default Signup;