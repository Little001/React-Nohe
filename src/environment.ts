import { createBrowserHistory } from "history";
import { configure } from "mobx";
import { Api } from "./api/api";
import { UserAPI } from "./api/user.api";
import { SessionStore } from "./stores/session.store";
import { LocalStorage } from "./stores/local.storage";
import { AuctionAPI } from "./api/auction.api";

const isProduction = false;

// initialize mobx in FLUX mode
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

// expose helpers
export { api, history };

// expose services
export { userApi, auctionApi };

// expose stores
export { sessionStore, localStorage };
