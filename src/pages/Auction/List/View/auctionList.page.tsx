import { observer, inject } from "mobx-react";
import * as React from "react";
import { AuctionListController } from "../Controllers/auctionList.controller";
import AuctionItem from "../../../../components/auctionItem/auctionItem.component";
import { NoheButton } from "../../../../components/button/button.component";
import { withTranslation, WithTranslation } from "react-i18next";
import { IAppProvider } from "../../../../stores/app.provider";

interface IAuctionListPageProps {
    controller: AuctionListController;
}

@inject("appProvider")
@observer
class AuctionListPage extends React.Component<WithTranslation & IAuctionListPageProps & IAppProvider> {
    private controller = this.props.controller;

    render() {
        const { t } = this.props;

        return (
            <div>
                {this.controller.store.items.map((item) => 
                    <AuctionItem store={item} />
                )}
                <NoheButton
                    text = {t("add_action")}
                    onClick = {() => {
                        this.props.appProvider!.history.push("/create");
                    }} />
            </div>
        );
    }
}

export default withTranslation()(AuctionListPage);