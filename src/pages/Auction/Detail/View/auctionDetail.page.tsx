import { observer, inject } from "mobx-react";
import * as React from "react";
import { AuctionDetailPageController } from "../Controllers/auctionDetailPage.controller";
import AuctionItem from "../../../../components/auctionItem/auctionItem.component";
import { withTranslation, WithTranslation } from "react-i18next";
import { IAppProvider } from "../../../../stores/app.provider";

interface IAuctionDetailPageProps {
    controller: AuctionDetailPageController;
}

@inject("appProvider")
@observer
class AuctionDetailPage extends React.Component<WithTranslation & IAppProvider & IAuctionDetailPageProps> {
    private controller = this.props.controller

    render() {
        return (
            <div>
                {this.controller.store && <AuctionItem store={this.controller.store} />}
            </div>
        );
    }
}

export default withTranslation()(AuctionDetailPage);