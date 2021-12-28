import { Container, Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import noImage from '../../../image/noImage.png';

const Profile = () => {

    // getting user info
    const { user } = useAuth();

    return (
        <Container sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '50%',
            }, mx: 'auto'
        }}>
            <Card sx={{
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '75%',
                }
            }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={user.photoURL ? user.photoURL : noImage}
                    alt="profile"
                />
                <CardContent sx={{ textAlign: 'start' }}>
                    <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold' }} component="div">
                        Name: {user.displayName?.toUpperCase()}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Email: {user.email}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        EmailVerified: {user.emailVerified ? 'YES' : 'NO'}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Phone Number: {user.phoneNumber ? 'YES' : 'NO'}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Last SignIn: {user?.metadata?.lastSignInTime}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Profile;