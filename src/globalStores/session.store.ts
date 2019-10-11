import { History } from "history";
import { observable } from "mobx";
import { UserAPI } from "../api/user.api";
import { LocalStorage, StorageItem } from "../globalStores/local.storage";

export class SessionStore {
    @observable private isLoggedIn: boolean = false;
    private localStorage: LocalStorage;

    constructor(public userApi: UserAPI, public browserHistory: History, localStorage: LocalStorage) {
        this.localStorage = localStorage;
    }

    public async login() {
        return this.userApi.getToken().then((token) => {
            this.isLoggedIn = true;
            this.localStorage.setItem(StorageItem.Token, token);
            this.browserHistory.replace("/auction");
        }).catch((error) => {
            //error
        });
    }

    public logout() {
        this.localStorage.removeItem(StorageItem.Token);
        this.isLoggedIn = false;
    }

    public isLogged() {
        if (Boolean(this.localStorage.getItem(StorageItem.Token)) && !this.isLoggedIn) {
            this.isLoggedIn = true;
        }
        
        return this.isLoggedIn;
    }

    public getToken(): string | null {
        return this.localStorage.getItem(StorageItem.Token);
    }
}
