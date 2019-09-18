// 3rd party dependencies
import { observer, Provider } from "mobx-react";
import * as React from "react";
import { Router, Switch } from "react-router";

// environment
import * as env from "./environment";

// pages
import { AuthenticatedRoute } from "./routes/authenticated.route";
import { UnauthenticatedRoute } from "./routes/unauthenticated.route";
import { LoginPage } from "./pages/Login/View/login.page";

@observer
export class App extends React.Component {
    public render() {
        return (
            <Provider sessionStore={env.sessionStore} >
                <Router history={env.history}>
                    <Switch>
                        <UnauthenticatedRoute
                            path="/"
                            component={LoginPage}
                            exact={true}
                            sessionStore={env.sessionStore}
                        />
                        <AuthenticatedRoute
                            path="/home"
                            component={LoginPage}
                            exact={true}
                            sessionStore={env.sessionStore} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}
