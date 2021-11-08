import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { allRoutes } from '../../AllRoutes/allRoutes';
export const Routes = () => {
    return (
        <Switch>
            {
                allRoutes.map((route, i) => <Route key={i} path={route.path} component={route.component} exact/>)
            }
        </Switch>
    );
};