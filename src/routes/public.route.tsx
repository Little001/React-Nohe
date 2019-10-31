import * as React from "react";
import { observer, inject } from "mobx-react";
import { Route, Redirect } from "react-router";
import { IAppProvider, IMatchParams } from "../stores/app.provider";
import { AsyncRoute } from "./asyncComponent";

interface IPublicRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
}

@inject("appProvider")
@observer
export default class PublicRoute extends React.Component<IPublicRouteProps & IAppProvider & IMatchParams> {
    render() {
        if (!this.props.appProvider!.sessionStore.isLogged()) {
            return (
                <Route
                    key={this.props.path}
                    path={this.props.path}
                    exact={this.props.exact}
                    component={() => (
                        <AsyncRoute
                            match={this.props.computedMatch}
                            path={this.props.path}
                            routeController={this.props.appProvider!.routeController} 
                            component={this.props.component} 
                        />
                    )}
                />
            )
        }
        return <Redirect to="/auction" />;
    }
}