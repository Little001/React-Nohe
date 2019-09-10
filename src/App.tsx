// 3rd party dependencies
import { ThemeProvider } from "glamorous";
import { observer, Provider } from "mobx-react";
import * as React from "react";
import { Router, Switch } from "react-router";

// environment
import * as env from "./environment";

// pages
import { AuthorizedPage } from "./pages/authorized.page";
import { LoginPage } from "./pages/Login/login.page";

// route types
import { AuthenticatedRoute } from "./routes/authenticated.route";
import { UnauthenticatedRoute } from "./routes/unauthenticated.route";

@observer
export class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={env.themeStore.getCurrentTheme()}>
                <Provider sessionStore={env.sessionStore} themeStore={env.themeStore}>
                    <Router history={env.history}>
                        <Switch>
                            <UnauthenticatedRoute
                                path="/"
                                component={LoginPage}
                                exact={true}
                                sessionStore={env.sessionStore}
                            />
                            <AuthenticatedRoute
                                path="/auth"
                                component={AuthorizedPage}
                                exact={true}
                                sessionStore={env.sessionStore}
                            />
                        </Switch>
                    </Router>
                </Provider>
            </ThemeProvider>
        );
    }
}
