// 3rd party dependencies
import { observer, Provider } from "mobx-react";
import * as React from "react";
import { Router, Switch } from "react-router";

// environment
import * as env from "./environment";

// pages
import { PrivateRoute } from "./routes/private.route";
import { PublicRoute } from "./routes/public.route";
import { LoginPage } from "./pages/Login/View/login.page";

@observer
export class App extends React.Component {
    public render() {
        return (
            <Provider sessionStore={env.sessionStore} >
                <Router history={env.history}>
                    <Switch>
                        <PublicRoute path="/" component={LoginPage} exact={true} sessionStore={env.sessionStore} />
                        <PublicRoute path="/login" component={LoginPage} exact={true} sessionStore={env.sessionStore} />
                        <PrivateRoute path="/home" component={LoginPage} exact={true} sessionStore={env.sessionStore} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}
