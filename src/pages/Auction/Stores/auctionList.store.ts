import { observable } from "mobx";
import AuctionItem from "./auctionItem";

export default class AuctionList {
    @observable public items: AuctionItem[];

    constructor() {
        this.items = [];
    }

}
