import { observer, inject } from "mobx-react";
import * as React from "react";
import { AuctionDetailPageController } from "../Controllers/auctionDetailPage.controller";
import AuctionItem from "../../../../components/auctionItem/auctionItem.component";
import { withTranslation, WithTranslation } from "react-i18next";
import { IAppProvider, MatchProps } from "../../../../stores/app.provider";

@inject("appProvider")
@observer
class AuctionDetailPage extends React.Component<WithTranslation & IAppProvider & MatchProps> {
    private controller = new AuctionDetailPageController(Number(this.props.match.params.id), this.props.appProvider!.auctionAPI);

    render() {
        return (
            <div>
                {this.controller.store && <AuctionItem store={this.controller.store} />}
            </div>
        );
    }
}

export default withTranslation()(AuctionDetailPage);