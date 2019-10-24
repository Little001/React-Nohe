import AuctionListStore from "../../Stores/auctionList.store";
import AuctionItemStore from "../../Stores/auctionItem.store";

export class AuctionListController {
    public store: AuctionListStore;

    constructor(items: AuctionItemStore[]) {
        this.store = new AuctionListStore(items);
    }
}