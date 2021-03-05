import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import routes from "./routes";
import Login from "./route/login/index";

export default () => (
    <Router>
        <>
            <Switch>
                <Route path={routes.login} exact component={Login} />
                <Redirect path="*" to={routes.login} />
            </Switch>
        </>
    </Router>
);
