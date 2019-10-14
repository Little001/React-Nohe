import { UserAPI } from "../api/user.api";
import { RouteComponentProps } from "react-router-dom";
import { LocalStorage } from "./local.storage";
import { SessionStore } from "./session.store";
import { AuctionAPI } from "../api/auction.api";
import { History } from "history";

interface MatchParams {
    id: string;
}

export interface MatchProps extends RouteComponentProps<MatchParams> {
    id: string;
}

export interface IAppProvider {
    appProvider?: AppProvider;
}

export class AppProvider {
    public userApi: UserAPI;
    public auctionAPI: AuctionAPI;
    public localStorage: LocalStorage;
    public sessionStore: SessionStore;
    public history: History;

    constructor(userApi: UserAPI, auctionAPI: AuctionAPI, localStorage: LocalStorage, sessionStore: SessionStore, history: History) {
        this.userApi = userApi;
        this.auctionAPI = auctionAPI;
        this.localStorage = localStorage;
        this.sessionStore = sessionStore;
        this.history = history;
    }
}
