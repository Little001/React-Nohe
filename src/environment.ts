import axios from "axios";
import { createBrowserHistory } from "history";
import { configure } from "mobx";
import { SessionAPI } from "./api/session.api";
import { SessionStore } from "./stores/session.store";

// initialize mobx in FLUX mode
configure({
    enforceActions: true,
});

// initialize http client dependency
const http = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

// initialize browserHistory dependency
const history = createBrowserHistory();

// initialize services with dependencies
const sessionApi = new SessionAPI(http);

// initialzie stores with dependencies
const sessionStore = new SessionStore(sessionApi, history, window.localStorage);

// expose helpers
export { http, history };

// expose services
export { sessionApi };

// expose stores
export { sessionStore };
