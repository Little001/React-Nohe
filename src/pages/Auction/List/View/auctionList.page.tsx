import { observer, inject } from "mobx-react";
import * as React from "react";
import { AuctionListController } from "../Controllers/auctionList.controller";
import { AuctionAPI } from "../../../../api/auction.api";
import AuctionItem from "../../../../components/auctionItem/auctionItem.component";
import { History } from "history";
import { NoheButton } from "../../../../components/button/button.component";
import { withTranslation, WithTranslation } from "react-i18next";

interface IAuctionPageProps {
    auctionApi?: AuctionAPI;
    history?: History;
}

@inject("auctionApi")
@observer
class AuctionListPage extends React.Component<WithTranslation & IAuctionPageProps> {
    private controller = new AuctionListController(this.props.auctionApi!);

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
                        this.props.history!.push("/create");
                    }} />
            </div>
        );
    }
}

export default withTranslation()(AuctionListPage);