import * as React from "react";
import { observer, inject } from "mobx-react";
import { Route, Redirect } from "react-router";
import { IAppProvider } from "../stores/app.provider";

interface IPrivateRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
}

@inject("appProvider")
@observer
export default class PrivateRoute extends React.Component<IPrivateRouteProps & IAppProvider> {
    render() {
        if (this.props.appProvider!.sessionStore.isLogged()) {
            return (
                <Route path={this.props.path} component={this.props.component} exact={this.props.exact} />
            );
        }

        return <Redirect to="/login" />;
    }
}
