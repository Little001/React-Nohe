import { observer, inject } from "mobx-react";
import * as React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { NoheTextBox, TextBoxType } from "../../../../components/textBox/textBox.component";
import { NoheButton } from "../../../../components/button/button.component";
import { AuctionCreateController } from "../Controllers/auctionCreate.controller";
import { IAppProvider } from "../../../../stores/app.provider";

interface IAuctionCreatePageProps {
    controller: AuctionCreateController;
}

@inject("appProvider")
@observer
class AuctionCreatePage extends React.Component<WithTranslation & IAppProvider & IAuctionCreatePageProps> {
    private controller = this.props.controller;

    render() {
        const { t } = this.props;

        return (
            <div>
                <NoheTextBox
                    type = {TextBoxType.Text}
                    placeholder = {t("description")}
                    value = {this.controller.getDescription()}
                    onChange = {(value) => {
                        this.controller.setDescription(value)
                    }} />
                <NoheTextBox
                    type = {TextBoxType.Text}
                    placeholder = {t("freight")}
                    value = {this.controller.getFreight()}
                    onChange = {(value) => {
                        this.controller.setFreight(value)
                    }} />
                <NoheButton
                    text = {t("add_action")}
                    onClick = {() => {
                        this.controller.createAuction();
                    }} />
            </div>
        );
    }
}

export default withTranslation()(AuctionCreatePage);