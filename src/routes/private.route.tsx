import * as React from "react";
import { observer, inject } from "mobx-react";
import { Route, Redirect } from "react-router";
import { SessionStore } from "../stores/session.store";

interface IPrivateRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
  sessionStore?: SessionStore;
}

@inject("sessionStore")
@observer
export default class PrivateRoute extends React.Component<IPrivateRouteProps> {
    render() {
        if (this.props.sessionStore!.isLogged()) {
            return (
                <Route path={this.props.path} component={this.props.component} exact={this.props.exact} />
            );
        }

        return <Redirect to="/login" />;
    }
}
