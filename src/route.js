import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import routes from "./routes";
import Login from "./route/login";
import Main from "./route/main";

export default ({ authService }) => (
    <Router>
        <>
            <Switch>
                <Route path={routes.login} exact>
                    <Login authService={authService} />
                </Route>
                <Route path={routes.main} exact>
                    <Main authService={authService} />
                </Route>
            </Switch>
        </>
    </Router>
);
