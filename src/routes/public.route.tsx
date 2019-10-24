import * as React from "react";
import { observer, inject } from "mobx-react";
import { IAppProvider } from "../stores/app.provider";
import { RouteController } from "./route.controller";
import { PageController } from "../pages/page.controller";

interface IPublicRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
}

@inject("appProvider")
@observer
export default class PublicRoute extends React.Component<IPublicRouteProps & IAppProvider> {
    private component: any;
    private loader = this.props.appProvider!.loaderController;

    public renderPage(pageController: PageController) {
        return (
            <this.props.component controller={pageController} />
        );
    }

    componentDidMount() {
        this.loader.show();
        const appProvider = this.props.appProvider!;
        const controller = new RouteController(appProvider.sessionStore, appProvider.auctionAPI, appProvider.userApi, appProvider.history);
        controller.resolveRoute(this.props.path, (pageController) => {
            setTimeout(() => {
                this.component = this.renderPage(pageController);
                this.loader.hide();
            }, 2000)
            
        })
    }

    render() {
        const appProvider = this.props.appProvider!;
        const loader = appProvider.loaderController;

        return (
            <div>
                {loader.isLoading() ? null : this.component}
            </div>
        )
    }
}
