import React from "react";
import { RouteController } from "./route.controller";
import { observer } from "mobx-react";
import { PageController } from "../pages/page.controller";
import { IComputedMatch } from "../stores/app.provider";


interface IProps {
    routeController: RouteController;
    path: string;
    component: React.ComponentType<any>;
    match?: IComputedMatch;
}

interface IState {
    controller: PageController|null;
}

@observer
export class AsyncRoute extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            controller: null
        };
    }

    componentDidMount() {
        try {
            let id = this.props.match ? this.props.match.params.id : "";
            this.props.routeController.getPageController(this.props.path, id).then((controller: PageController) => {
                this.setState({
                    controller: controller
                })
            })
        } catch(err) {
            // error handling
        }
    }

    render() {
        const { controller } = this.state;

        if (controller) {
            return (
                <this.props.component controller={controller} />
            )
        }

        return null;
    }

}