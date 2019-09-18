import * as React from "react";
import { observer } from "mobx-react";
import { Route, Redirect } from "react-router";
import { SessionStore } from "../stores/session.store";

interface IUnauthenticatedRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
  sessionStore: SessionStore;
}

@observer
export class UnauthenticatedRoute extends React.Component<IUnauthenticatedRouteProps> {
    render() {
        if (!this.props.sessionStore.isLogged()) {
            return (
                <Route path={this.props.path} component={this.props.component} exact={this.props.exact} />
            );
        }

        return <Redirect to="/home" />;
    }
}
