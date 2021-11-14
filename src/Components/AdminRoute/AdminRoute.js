import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import spinner from '../../image/loading.gif';

const AdminRoute = ({ children, ...rest }) => {
    let { user, loading, admin } = useAuth();

    if (loading) {
        return <img style={{ width: '10%', margin: ' 25px auto 0 auto' }} src={spinner} alt="" />
    }

    return (
        <div>
            return (
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