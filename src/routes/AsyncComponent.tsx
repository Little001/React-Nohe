import { PureComponent } from "react";
import { observer, inject } from "mobx-react";
import React from "react";
import { RouteController } from "./route.controller";
import { PageController } from "../pages/page.controller";

interface IProps {
    path: string;
    controller: RouteController;
    component: React.ComponentType<any>;
}

interface IState {
    path: string;
    Component: any;
}

@inject("appProvider")
@observer
export class AsyncComponent extends PureComponent<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            path: this.props.path,
            Component: null
        };
    }

    renderPage(controller: PageController|null) {
        if (controller === null) {
            return (
                null
            );
        }
        return (
            <this.props.controller.component controller={controller} />
        )
    }
  
    render() {
        debugger;
        return (
            this.renderPage(this.props.controller.getController())
        );
    }
}