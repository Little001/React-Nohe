import AuctionItemStore from "../../Stores/auctionItem.store";
import { observable } from "mobx";

export class AuctionDetailPageController {
    @observable public store: AuctionItemStore | null;

    constructor(item: AuctionItemStore) {
        this.store = item;
    }
}