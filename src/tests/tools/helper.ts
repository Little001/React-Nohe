import localApi from "../../api/base/local.api";
import { UserAPI } from "../../api/user.api";
import { SessionStore } from "../../globalStores/session.store";
import { LocalStorage } from "../../globalStores/local.storage";
import { createBrowserHistory } from "history";
import { AuctionAPI } from "../../api/auction.api";

export function CreateLocalStorate(): LocalStorage {
    return new LocalStorage(window.localStorage);
}

export function CreateSessionStore(): SessionStore {
    return new SessionStore(CreateUserApi(), createBrowserHistory(), CreateLocalStorate());
}

export function CreateUserApi() {
    return new UserAPI(new localApi());
}

export function CreateAuctionApi() {
    return new AuctionAPI(new localApi());
}

export function CleanUp() {
    window.localStorage.clear();
}

