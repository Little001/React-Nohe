import { observer, inject } from "mobx-react";
import * as React from "react";
import { AuctionListController } from "../Controllers/auctionList.controller";
import { AuctionAPI } from "../../../../api/auction.api";
import AuctionItem from "../../../../components/auctionItem/auctionItem.component";
import { NoheTextBox, TextBoxType } from "../../../../components/textBox/textBox.component";
import { NoheButton } from "../../../../components/button/button.component";
import { withTranslation, WithTranslation } from "react-i18next";

interface IAuctionPageProps {
    auctionApi?: AuctionAPI;
}

@inject("auctionApi")
@observer
class AuctionListPage extends React.Component<WithTranslation & IAuctionPageProps> {
    private controller = new AuctionListController(this.props.auctionApi!);

    render() {
        const { t } = this.props;

        return (
            <div>
                {this.controller.store.items.map((item) => <AuctionItem store={item} />)}
                <NoheTextBox
                    type = {TextBoxType.Text}
                    value = {this.controller.getFakeItem().description}
                    placeholder = {t("auction_description")}
                    onChange = {(value) => {
                        this.controller.getFakeItem().description = value;
                    }} />
                <NoheTextBox
                    type = {TextBoxType.Text}
                    value = {this.controller.getFakeItem().freight}
                    placeholder = {t("auction_freight")}
                    onChange = {(value) => {
                        this.controller.getFakeItem().freight = value;
                    }} />
                <NoheButton 
                    text={t("add_action")}
                    onClick = {() => {
                        this.controller.addAuction();
                    }} />
            </div>
        );
    }
}

export default withTranslation()(AuctionListPage);