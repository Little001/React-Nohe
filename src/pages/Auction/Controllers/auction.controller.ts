import AuctionListStore from "../Stores/auctionList.store";
import { AuctionAPI } from "../../../api/auction.api";
import * as env from "../../../environment";

export class AuctionController {
    public store: AuctionListStore;
    private api: AuctionAPI;

    constructor() {
        this.api = env.auctionApi;
        this.store = new AuctionListStore();
        this.fetchData();
    }

    private fetchData() {
        this.api.getAuctionList().then((items) => {
            this.store.setItems(items);
        })
    }
}