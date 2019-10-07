import { observable } from "mobx";
import AuctionItemStore from "./auctionItem.store";

export default class AuctionListStore {
    @observable public items: AuctionItemStore[];

    constructor() {
        this.items = [];
    }

    public setItems(items: AuctionItemStore[]) {
        this.items = items;
    }
}
