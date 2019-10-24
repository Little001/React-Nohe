import * as React from "react";
import { observer, inject } from "mobx-react";
import { Route, Redirect } from "react-router";
import { IAppProvider } from "../stores/app.provider";
import { RouteController } from "./route.controller";
import { AsyncComponent } from "./AsyncComponent";

interface IPrivateRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
}

interface IState {
    component: any
}

@inject("appProvider")
@observer
export default class PrivateRoute extends React.Component<IPrivateRouteProps & IAppProvider, IState> {
    private controller = new RouteController(this.props.appProvider!, this.props.component);
    
    
    render() {
        if (this.props.appProvider!.sessionStore.isLogged()) {
            this.controller.setPath(this.props.path, this.props.component);
            return (
                <Route
                    path={this.props.path}
                    exact={this.props.exact}
                    render={() => (
                        <AsyncComponent 
                            path={this.props.path} 
                            component={this.props.component} 
                            controller={this.controller}
                        />
                    )}
                />
            )
        }

        return <Redirect to="/login" />;
    }
}