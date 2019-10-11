import { observer, inject } from "mobx-react";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { AuctionDetailPageController } from "../Controllers/auctionDetailPage.controller";
import { AuctionAPI } from "../../../../api/auction.api";
import AuctionItem from "../../../../components/auctionItem/auctionItem.component";
import { withTranslation, WithTranslation } from "react-i18next";

interface MatchParams {
    id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
    id: string;
}

interface IAuctionPageProps {
    auctionApi?: AuctionAPI;
}

@inject("auctionApi")
@observer
class AuctionDetailPage extends React.Component<WithTranslation & IAuctionPageProps & MatchProps> {
    private controller = new AuctionDetailPageController(Number(this.props.match.params.id), this.props.auctionApi!);

    render() {
        return (
            <div>
                {this.controller.store && <AuctionItem store={this.controller.store} />}
            </div>
        );
    }
}

export default withTranslation()(AuctionDetailPage);