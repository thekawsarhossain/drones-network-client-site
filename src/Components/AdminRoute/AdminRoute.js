import { Box } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import spinner from '../../image/loading.gif';

const AdminRoute = ({ children, ...rest }) => {
    let { user, admin } = useAuth();

    if (!admin) {
        return <Box style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ width: '10%' }} src={spinner} alt="" /> </Box>
    }

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.email && admin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default AdminRoute;