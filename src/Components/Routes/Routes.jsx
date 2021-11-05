import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { AllRoutes } from '../../AllRoutes/AllRoutes';
export const Routes = () => {
    return (
        <Switch>
            {
                AllRoutes.map((route, i) => <Route key={i} path={route.path} component={route.component} exact/>)
            }
        </Switch>
    );
};