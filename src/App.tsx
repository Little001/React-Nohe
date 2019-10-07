import { observer, Provider } from "mobx-react";
import * as React from "react";
import { Router, Switch } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18";

// environment
import * as env from "./environment";

// pages
import { PublicRoute } from "./routes/public.route";
import LoginPage from "./pages/Login/View/login.page";
import RegistrationPage from "./pages/Registration/View/registration.page";
import AuctionPage from "./pages/Auction/View/auction.page";

// components
import { Header } from "./components/header/header.component";

@observer
export class App extends React.Component {
    public render() {
        return (
            <I18nextProvider i18n={i18n}>
                <Header />
                <Provider sessionStore={env.sessionStore} >
                    <Router history={env.history}>
                        <Switch>
                            <PublicRoute path="/" component={LoginPage} exact={true} sessionStore={env.sessionStore} />
                            <PublicRoute path="/login" component={LoginPage} exact={true} sessionStore={env.sessionStore} />
                            <PublicRoute path="/registration" component={RegistrationPage} exact={true} sessionStore={env.sessionStore} />
                            <PublicRoute path="/auction" component={AuctionPage} exact={true} sessionStore={env.sessionStore} />
                        </Switch>
                    </Router>
                </Provider>
            </I18nextProvider>
        );
    }
}
