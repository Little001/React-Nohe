import { inject, observer } from "mobx-react";
import * as React from "react";
import { AuctionController } from "../Controllers/auction.controller";
import { withTranslation, WithTranslation } from "react-i18next";

@inject("sessionStore")
@observer
class AuctionPage extends React.Component<WithTranslation> {
    private controller = new AuctionController();
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