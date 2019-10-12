import AuctionListStore from "../../Stores/auctionList.store";
import { AuctionAPI } from "../../../../api/auction.api";

export class AuctionListController {
    public store: AuctionListStore;
    private api: AuctionAPI;

    constructor(auctionApi: AuctionAPI) {
        this.api = auctionApi;
        this.store = new AuctionListStore();
        this.fetchData();
    }

    private fetchData() {
        this.api.getAuctionList().then((items) => {
            this.store.setItems(items);
        })
    }
}