import AuctionListStore from "../../Stores/auctionList.store";
import AuctionItemStore from "../../Stores/auctionItem.store";
import { PageController } from "../../../page.controller";

export class AuctionListController extends PageController {
    public store: AuctionListStore;

    constructor(items: AuctionItemStore[]) {
        super();
        this.store = new AuctionListStore(items);
    }
}