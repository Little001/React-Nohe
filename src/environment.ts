import { createBrowserHistory } from "history";
import { configure } from "mobx";
import { Api } from "./api/api";
import { UserAPI } from "./api/user.api";
import { SessionStore } from "./stores/session.store";
import { LocalStorage } from "./stores/local.storage";
import { AuctionAPI } from "./api/auction.api";
import { AppProvider } from "./stores/app.provider";

const isProduction = false;

configure({
    enforceActions: "never",
});

// initialize http client dependency
const api = new Api(isProduction);

// initialize browserHistory dependency
const history = createBrowserHistory();

// initialize services with dependencies
const userApi = new UserAPI(api);
const auctionApi = new AuctionAPI(api);

// initialzie stores with dependencies
const localStorage = new LocalStorage(window.localStorage);
const sessionStore = new SessionStore(userApi, history, localStorage);

const appProvider = new AppProvider(userApi, auctionApi, localStorage, sessionStore, history);

// expose provider
export { appProvider };
