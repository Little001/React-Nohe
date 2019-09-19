import LoginStore from "../Stores/loginStore";

class LoginController {
    private store: LoginStore;

    constructor() {
        this.store = new LoginStore();
    }

    public setUserName(username: string): void {
        this.store.username = username;
    }

    public getUserName(): string {
        return this.store.username;
    }

    public setPassword(password: string): void {
        this.store.password = password;
    }

    public getPassword(): string {
        return this.store.password;
    }

    public getStore(): LoginStore {
        return this.store;
    }

    public isValid(): boolean {
        return Boolean(this.getUserName()) && Boolean(this.getPassword());
    }
}

export const loginController = new LoginController();
