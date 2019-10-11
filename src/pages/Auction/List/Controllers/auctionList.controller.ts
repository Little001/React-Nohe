import AuctionListStore from "../../Stores/auctionList.store";
import { AuctionAPI } from "../../../../api/auction.api";
import AuctionItemStore from "../../Stores/auctionItem.store";

export class AuctionListController {
    public store: AuctionListStore;
    private fakeItem: AuctionItemStore;
    private api: AuctionAPI;

    constructor(auctionApi: AuctionAPI) {
        this.api = auctionApi;
        this.fakeItem = new AuctionItemStore(0, "", "");
        this.store = new AuctionListStore();
        this.fetchData();
    }

    public addAuction() {
        this.api.addAuctionItem(this.fakeItem).then(() => {
            this.fetchData();
        })
    }

    public getFakeItem() {
        return this.fakeItem;
    }

    private fetchData() {
        this.api.getAuctionList().then((items) => {
            this.store.setItems(items);
        })
    }
}