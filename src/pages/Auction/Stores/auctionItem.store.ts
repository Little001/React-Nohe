import { observable } from "mobx";

export default class AuctionItemStore {
    public id: number;
    @observable public description: string;
    @observable public freight: string;

    constructor(id: number, description: string, freight: string) {
        this.id = id;
        this.description = description;
        this.freight = freight;
    }
}