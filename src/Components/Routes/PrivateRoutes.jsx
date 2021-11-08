import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoutes = ({path, component:Component}) => {
    const user = useSelector((state) => state.user)
    return (
        <Route path={path} exact render={(props)=> {
            if (user.isLogged) {
                return <Component {...props} />;
            }
            return <Redirect to='/'/>
        }}/>
    );
};