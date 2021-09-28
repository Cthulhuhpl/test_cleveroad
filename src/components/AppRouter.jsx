import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {
    const token = localStorage.getItem('token')
    return token ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                <Redirect to={'/catalog'}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component}/>
                )}
                <Redirect to={'login'}/>
            </Switch>
        )
};

export default AppRouter;