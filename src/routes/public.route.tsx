import * as React from "react";
import { observer, inject } from "mobx-react";
import { Route, Redirect } from "react-router";
import { IAppProvider } from "../stores/app.provider";

interface IPublicRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
}

@inject("appProvider")
@observer
export default class PublicRoute extends React.Component<IPublicRouteProps & IAppProvider> {
    render() {
        if (!this.props.appProvider!.sessionStore.isLogged()) {
            return (
                <Route path={this.props.path} component={this.props.component} exact={this.props.exact} />
            );
        }

        return <Redirect to="/auction" />;
    }
}
