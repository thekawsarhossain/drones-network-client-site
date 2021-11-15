import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import spinner from '../../image/loading.gif';

const PrivateRoute = ({ children, ...rest }) => {
    let { user, loading } = useAuth();
    console.log(loading)

    if (loading) {
        return <img style={{ width: '10%', margin: ' 25px auto 0 auto' }} src={spinner} alt="" />
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