import { observable } from "mobx";

export default class AuctionItem {
    @observable public id: number;
    @observable public description: string;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
    }
}
