import { observable } from "mobx";
import AuctionItemStore from "../../Stores/auctionItem.store";

export default class AuctionListStore {
    @observable public items: AuctionItemStore[];

    constructor() {
        this.items = [];
    }

    public setItems(items: AuctionItemStore[]) {
        this.items = items;
    }
}
