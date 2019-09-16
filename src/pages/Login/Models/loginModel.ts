import { observable } from "mobx";

export default class LoginModel {
    @observable public username: string;
    @observable public password: string;

    constructor() {
        this.username = "";
        this.password = "";
    }
}
