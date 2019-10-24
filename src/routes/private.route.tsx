import * as React from "react";
import { observer, inject } from "mobx-react";
import { Route, Redirect } from "react-router";
import { IAppProvider } from "../stores/app.provider";
import { RouteController } from "./route.controller";

interface IPrivateRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
}

@inject("appProvider")
@observer
export default class PrivateRoute extends React.Component<IPrivateRouteProps & IAppProvider> {
    render() {
        const appProvider = this.props.appProvider!;
        const controller = new RouteController(appProvider.sessionStore, appProvider.auctionAPI, appProvider.userApi, appProvider.history);
        
        if (this.props.appProvider!.sessionStore.isLogged()) {
            controller.resolveRoute(this.props.path, (pageController) => {
                return (
                    <Route 
                        path={this.props.path}
                        component={() => {
                            return <this.props.component controller={pageController} />
                        }}
                        exact={this.props.exact} 
                    />
                )
            })
        }

        return <Redirect to="/login" />;
    }
}
