import { Api } from "../../api/api";
import { UserAPI } from "../../api/user.api";
import { SessionStore } from "../../stores/session.store";
import { LocalStorage } from "../../stores/local.storage";
import { createBrowserHistory } from "history";
import { AuctionAPI } from "../../api/auction.api";

export function CreateApi(): Api {
    return new Api(false);
}

export function CreateLocalStorate(): LocalStorage {
    return new LocalStorage(window.localStorage);
}

export function CreateSessionStore(): SessionStore {
    return new SessionStore(CreateUserApi(), createBrowserHistory(), CreateLocalStorate());
}

export function CreateUserApi() {
    return new UserAPI(CreateApi());
}

export function CreateAuctionApi() {
    return new AuctionAPI(CreateApi());
}

export function CleanUp() {
    window.localStorage.clear();
}

