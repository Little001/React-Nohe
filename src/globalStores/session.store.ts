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
        
        /*this.sessionApi.post(loginStore.username, loginStore.password).then((response) => {
            this.isLoggedIn = true;
            this.localStorage.setItem("token", JSON.stringify(response.data));
            this.browserHistory.replace("/home");
        })
*/
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
