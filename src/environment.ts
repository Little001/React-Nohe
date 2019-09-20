import { createBrowserHistory } from "history";
import { configure } from "mobx";
import localApi from "./api/base/local.api";
import remoteApi from "./api/base/remote.api";
import { UserAPI } from "./api/user.api";
import { SessionStore } from "./globalStores/session.store";

const isProduction = false;

// initialize mobx in FLUX mode
configure({
    enforceActions: "never",
});

// initialize http client dependency
const api = isProduction ? new remoteApi() : new localApi();

// initialize browserHistory dependency
const history = createBrowserHistory();

// initialize services with dependencies
const userApi = new UserAPI(api);

// initialzie stores with dependencies
const sessionStore = new SessionStore(userApi, history, window.localStorage);

// expose helpers
export { api, history };

// expose services
export { userApi };

// expose stores
export { sessionStore };
