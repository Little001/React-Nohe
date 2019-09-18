// 3rd party dependencies
import { observer, Provider } from "mobx-react";
import * as React from "react";
import { Router, Switch } from "react-router";

// environment
import * as env from "./environment";

// pages
import { LoginPage } from "./pages/Login/View/login.page";

@observer
export class App extends React.Component {
    public render() {
        return (
            <Provider sessionStore={env.sessionStore} themeStore={env.themeStore}>
                <Router history={env.history}>
                    <Switch>
                        <LoginPage sessionStore={env.sessionStore} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}
