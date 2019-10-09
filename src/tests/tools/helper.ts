import localApi from "../../api/base/local.api";
import { UserAPI } from "../../api/user.api";
import { SessionStore } from "../../globalStores/session.store";
import { createBrowserHistory } from "history";

export function CreateUserApi() {
    return new UserAPI(new localApi());
}

export function CreateSessionStore(): SessionStore {
    return new SessionStore(CreateUserApi(), createBrowserHistory(), window.localStorage);
}

