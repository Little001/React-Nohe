import * as React from "react";
import AuctionItemStore from "../../pages/Auction/Stores/auctionItem.store";
import { withTranslation, WithTranslation } from "react-i18next";

interface IAuctionItemProps {
    store: AuctionItemStore;
}

class AuctionItem extends React.Component<IAuctionItemProps & WithTranslation> {
    render() {
        const { t } = this.props;

        return (
            <div>
                <p>{t("auction_id")}: {this.props.store.id} </p>
                <p>{t("auction_description")}: {this.props.store.description} </p>
                <p>{t("auction_freight")}: {this.props.store.freight} </p>
            </div>
        );
    }
}

export default withTranslation()(AuctionItem);