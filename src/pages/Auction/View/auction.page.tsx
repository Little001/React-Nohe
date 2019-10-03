import { observable } from "mobx";

export default class AuctionStore {
    @observable public email: string;
    @observable public username: string;
    @observable public password: string;
    @observable public retypePassword: string;

    constructor() {
        this.email = "";
        this.username = "";
        this.password = "";
        this.retypePassword = "";
    }
}
