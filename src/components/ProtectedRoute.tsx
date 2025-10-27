import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

interface ProtectedRouteProps extends Omit<RouteProps, 'component'> {
    component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    component: Component,
    ...rest
}) => {
    const auth = getAuth();
    
    return (
        <Route
            {...rest}
            render={props =>
                auth.currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;