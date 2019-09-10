import { observer } from "mobx-react";
import * as React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router";
import { SessionStore } from "../stores/session.store";

interface IUnauthenticatedRouteProps {
  path: string;
  component:
    | React.StatelessComponent<{}>
    | React.ComponentClass<{}>
    | React.ComponentClass<RouteComponentProps<{}>>;
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

    return <Redirect to="/auth" />;
  }
}
