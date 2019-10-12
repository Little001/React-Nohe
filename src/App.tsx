import { observer, Provider } from "mobx-react";
import * as React from "react";
import { Router, Switch } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18";

// environment
import * as env from "./environment";

//routes
import PublicRoute from "./routes/public.route";
import PrivateRoute from "./routes/private.route";

// pages
import LoginPage from "./pages/Login/View/login.page";
import RegistrationPage from "./pages/Registration/View/registration.page";
import AuctionListPage from "./pages/Auction/List/View/auctionList.page";
import AuctionDetailPage from "./pages/Auction/Detail/View/auctionDetail.page";
import AuctionCreatePage from "./pages/Auction/Create/View/auctionCreate.page";

// components
import NoheHeader from "./components/header/header.component";

@observer
export class App extends React.Component {
    public render() {
        return (
            <I18nextProvider i18n={i18n}>
                <Provider history={env.history} sessionStore={env.sessionStore} userApi={env.userApi} auctionApi={env.auctionApi}>
                    <NoheHeader />
                    <Router history={env.history}>
                        <Switch>
                            <PublicRoute path="/" component={LoginPage} exact={true} />
                            <PublicRoute path="/login" component={LoginPage} exact={true} />
                            <PublicRoute path="/registration" component={RegistrationPage} exact={true} />
                            <PrivateRoute path="/auction" component={AuctionListPage} exact={true} />
                            <PrivateRoute path="/auction/:id" component={AuctionDetailPage} exact={true} />
                            <PrivateRoute path="/create" component={AuctionCreatePage} exact={true} />
                        </Switch>
                    </Router>
                </Provider>
            </I18nextProvider>
        );
    }
}
