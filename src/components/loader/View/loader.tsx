import { observer, inject } from "mobx-react";
import * as React from "react";
import { IAppProvider } from "../../../stores/app.provider";

@inject("appProvider")
@observer
class NoheLoader extends React.Component<IAppProvider> {
    private controller = this.props.appProvider!.loaderController;

    render() {
        return (
            this.controller.store.isLoading ? 
                <div>
                    LOADING
                </div>
                : null
        );
    }
}

export default NoheLoader;