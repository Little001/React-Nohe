import { observable } from "mobx";
import AuctionItemStore from "../Stores/auctionItem.store";

export default class AuctionListStore {
    @observable public items: AuctionItemStore[];

    constructor(items: AuctionItemStore[]) {
        this.items = items;
    }

    public addItem(item: AuctionItemStore) {
        this.items.push(item);
    }

    public getLength(): number {
        return this.items.length;
    }
}
