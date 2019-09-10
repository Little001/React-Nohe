import { observer } from "mobx-react";
import * as React from "react";
import { SessionStore } from "../stores/session.store";
import { Redirect, Route, RouteComponentProps } from "react-router";

interface IAuthenticatedRouteProps {
  path: string;
  component:
    | React.StatelessComponent<{}>
    | React.ComponentClass<{}>
    | React.ComponentClass<RouteComponentProps<{}>>;
  exact: boolean;
  sessionStore: SessionStore;
}

@observer
export class AuthenticatedRoute extends React.Component<IAuthenticatedRouteProps> {
  render() {
    if (this.props.sessionStore.isLogged()) {
      return (
        <Route path={this.props.path} component={this.props.component} exact={this.props.exact} />
      );
    }

    return <Redirect to="/" />;
  }
}
