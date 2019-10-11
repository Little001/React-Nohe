import AuctionListStore from "../Stores/auctionList.store";
import { AuctionAPI } from "../../../../api/auction.api";
import AuctionItemStore from "../../Stores/auctionItem.store";

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

    public addAuction() {
        let id = this.store.items.length + 1
        let randomAuction = new AuctionItemStore(this.store.items.length + 1, "D", )
        this.store.items.push();
    }

    private createRandomAuction() {
        let id = this.store.items.length + 1
        let description = "Description " + id;
        let freight = "Freight " + id;
    }
}