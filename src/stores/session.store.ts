import { History } from "history";
import { observable } from "mobx";
import { SessionAPI } from "../api/session.api";
import LoginStore from "../pages/Login/Stores/loginStore";

export class SessionStore {
    // osbervable private data
    @observable private isLoggedIn: boolean = false;

    // inject dependencies
    constructor(public sessionApi: SessionAPI, public browserHistory: History, public localStorage: Storage) {}

    public login(loginStore: LoginStore) {
        this.sessionApi.getToken(loginStore.username, loginStore.password);

        this.isLoggedIn = true;

        // TODO: save token to localStorage
        // this.localStorage.setItem('token', JSON.stringify(response));

        this.browserHistory.replace("/home");
    }

    public isLogged() {
        // TODO: read token from localStorage
        return this.isLoggedIn;
    }
}
