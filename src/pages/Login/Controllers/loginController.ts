import LoginModel from "../Models/loginModel";
import { action } from "mobx";

class LoginController {
    private model: LoginModel;

    constructor() {
        this.model = new LoginModel();
    }

    @action
    public setUserName(username: string): void {
        this.model.username = username;
    }

    @action
    public setPassword(password: string): void {
        this.model.password = password;
    }

    public getModel(): LoginModel {
        return this.model;
    }
}

export const loginController = new LoginController();