import { createBrowserHistory } from "history";
import { configure } from "mobx";
import localApi from "./api/localApi";
import remoteApi from "./api/remoteApi";
import { SessionAPI } from "./api/session.api";
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
const sessionApi = new SessionAPI(api);

// initialzie stores with dependencies
const sessionStore = new SessionStore(sessionApi, history, window.localStorage);

// expose helpers
export { api, history };

// expose services
export { sessionApi };

// expose stores
export { sessionStore };
