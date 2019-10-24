import * as React from "react";
import { observer, inject } from "mobx-react";
import { Route, Redirect } from "react-router";
import { IAppProvider } from "../stores/app.provider";
import { RouteController } from "./route.controller";
import { PageController } from "../pages/page.controller";

interface IPublicRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
}

interface IState {
    component: any
}

@inject("appProvider")
@observer
export default class PublicRoute extends React.Component<IPublicRouteProps & IAppProvider, IState> {
    constructor(props: IPublicRouteProps) {
        super(props);
        this.state = {
            component: null
        }
    }
    renderPage(pageController: PageController) {
        return (
            <this.props.component controller={pageController} />
        );
    }
    
    render() {
        const controller = new RouteController(this.props.appProvider!, this.props.component);
        controller.setPath(this.props.path, this.props.component);
        if (!this.props.appProvider!.sessionStore.isLogged()) {

            return (
                <Route
                    path={this.props.path}
                    exact={this.props.exact}
                    render={() => (
                        this.state.component
                    )}
                />
            )
        }

        return <Redirect to="/auction" />;
    }
}