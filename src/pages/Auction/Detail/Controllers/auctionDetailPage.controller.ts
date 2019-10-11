import AuctionItemStore from "../../Stores/auctionItem.store";
import { AuctionAPI } from "../../../../api/auction.api";
import { observable } from "mobx";

export class AuctionDetailPageController {
    @observable public store: AuctionItemStore | null;
    private api: AuctionAPI;

    constructor(id: number, auctionApi: AuctionAPI) {
        this.api = auctionApi;
        this.store = null;
        this.fetchData(id);
    }

    private fetchData(id: number) {
        this.api.getAuctionItem(id).then((item) => {
            this.store = item;
        })
    }
}