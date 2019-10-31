import AuctionItemStore from "../../Stores/auctionItem.store";
import { observable } from "mobx";
import { PageController } from "../../../page.controller";

export class AuctionDetailPageController extends PageController {
    @observable public store: AuctionItemStore | null;

    constructor(item: AuctionItemStore) {
        super();
        this.store = item;
    }
}