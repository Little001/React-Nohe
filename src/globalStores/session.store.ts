import { History } from "history";
import { observable } from "mobx";
import { UserAPI } from "../api/user.api";
import LoginStore from "../pages/Login/Stores/login.store";

export class SessionStore {
    @observable private isLoggedIn: boolean = false;

    constructor(public sessionApi: UserAPI, public browserHistory: History, public localStorage: Storage) {}

    public login(loginStore: LoginStore) {
        this.sessionApi.getToken(loginStore.username, loginStore.password).then((response) => {
            debugger;
            this.isLoggedIn = true;
            this.localStorage.setItem("token", JSON.stringify(response.data));
            this.browserHistory.replace("/home");
        }).catch((error) => {
            //error
        });
    }

    public isLogged() {
        // TODO: read token from localStorage
        return this.isLoggedIn;
    }
}
