import * as React from "react";
import { observer } from "mobx-react";
import { Route, Redirect } from "react-router";
import { SessionStore } from "../stores/session.store";

interface AuthenticatedRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
  sessionStore: SessionStore;
}

@observer
export class AuthenticatedRoute extends React.Component<AuthenticatedRouteProps> {
    render() {
        if (this.props.sessionStore.isLogged()) {
            return (
                <Route path={this.props.path} component={this.props.component} exact={this.props.exact} />
            );
        }

        return <Redirect to="/login" />;
    }
}
