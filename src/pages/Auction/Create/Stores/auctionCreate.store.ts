import { observable } from "mobx";

export default class AuctionCreateStore {
    @observable public description: string;
    @observable public freight: string;

    constructor() {
        this.description = "";
        this.freight = "";
    }
}