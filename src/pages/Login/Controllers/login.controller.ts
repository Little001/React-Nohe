import LoginStore from "../Stores/login.store";
import { SessionStore } from "../../../stores/session.store";
import { PageController } from "../../page.controller";

export class LoginController extends PageController {
    private store: LoginStore;
    private sessionStore: SessionStore;

    constructor(sessionStore: SessionStore) {
        super();
        this.sessionStore = sessionStore;
        this.store = new LoginStore();
    }

    public setUsername(username: string): void {
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

    public login(): void {
        this.sessionStore.login();
    }
}
