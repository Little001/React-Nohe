import { observer, inject } from "mobx-react";
import * as React from "react";
import { AuctionController } from "../Controllers/auction.controller";
import { AuctionAPI } from "../../../api/auction.api";
import { withTranslation, WithTranslation } from "react-i18next";

interface IAuctionPageProps {
    auctionApi?: AuctionAPI;
}

@inject("auctionApi")
@observer
class AuctionPage extends React.Component<WithTranslation & IAuctionPageProps> {
    private controller = new AuctionController(this.props.auctionApi!);

    render() {
        const { t } = this.props;

        return (
            <div>
                {t("login")}
                {this.controller.store.items.map((item) => {
                    return item.description;
                })}
            </div>
        );
    }
}

export default withTranslation()(AuctionPage);