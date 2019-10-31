import { UserAPI } from "../api/user.api";
import { LocalStorage } from "./local.storage";
import { SessionStore } from "./session.store";
import { AuctionAPI } from "../api/auction.api";
import { History } from "history";
import { LoaderController } from "../components/loader/Controllers/loader.controller";
import { RouteController } from "../routes/route.controller";

export interface IAppProvider {
    appProvider?: AppProvider;
}

export interface IMatchParams {
    computedMatch?: IComputedMatch;
}

export interface IComputedMatch {
    params: {
        id: string;
    }
}

export class AppProvider {
    public userApi: UserAPI;
    public auctionAPI: AuctionAPI;
    public localStorage: LocalStorage;
    public sessionStore: SessionStore;
    public history: History;
    public loaderController: LoaderController;
    public routeController: RouteController;

    constructor(userApi: UserAPI, auctionAPI: AuctionAPI, localStorage: LocalStorage, sessionStore: SessionStore, history: History, loaderController: LoaderController, routeController: RouteController) {
        this.userApi = userApi;
        this.auctionAPI = auctionAPI;
        this.localStorage = localStorage;
        this.sessionStore = sessionStore;
        this.history = history;
        this.loaderController = loaderController;
        this.routeController = routeController;
    }
}
