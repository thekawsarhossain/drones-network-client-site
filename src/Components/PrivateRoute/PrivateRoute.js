import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import spinner from '../../image/loading.gif';
import { Box } from '@mui/material';

const PrivateRoute = ({ children, ...rest }) => {
    let { user, loading } = useAuth();

    if (loading) {
        return <Box style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ width: '10%' }} src={spinner} alt="" /> </Box>
    }

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;