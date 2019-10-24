import { AuctionAPI } from "../api/auction.api";
import AuctionItemStore from "../pages/Auction/Stores/auctionItem.store";
import { AuctionListController } from "../pages/Auction/List/Controllers/auctionList.controller";
import { PageController } from "../pages/page.controller";
import { SessionStore } from "../stores/session.store";
import { LoginController } from "../pages/Login/Controllers/login.controller";
import { RegistrationController } from "../pages/Registration/Controllers/registration.controller";
import { UserAPI } from "../api/user.api";
import { AuctionDetailPageController } from "../pages/Auction/Detail/Controllers/auctionDetailPage.controller";
import { AuctionCreateController } from "../pages/Auction/Create/Controllers/auctionCreate.controller";
import { History } from "history";

export class RouteController {
    private auctionAPI: AuctionAPI;
    private sessionStore: SessionStore;
    private userAPI: UserAPI;
    private history: History;

    constructor(sessionStore: SessionStore, auctionAPI: AuctionAPI, userAPI: UserAPI, history: History) {
        this.sessionStore = sessionStore;
        this.auctionAPI = auctionAPI;
        this.userAPI = userAPI;
        this.history = history;
    }

    public resolveRoute(route: string, onReady: (controller: PageController) => void) {
        // app loader
        switch(route) {
        case "/login": this.resolveLogin(onReady);
            break;
        case "/registration": this.resolveRegistration(onReady);
            break; 
        case "/auction": this.resolveAuctionList(onReady);
            break; 
        case "/auctionx": this.resolveAuctionDetail(1, onReady);
            break;     
        case "/create": this.resolveAuctionCreate(onReady);
            break;     
        }
    }

    private resolveAuctionCreate(onReady: (controller: PageController) => void) {
        onReady(new AuctionCreateController(this.auctionAPI, this.history));
    }

    private resolveAuctionList(onReady: (controller: PageController) => void) {
        this.auctionAPI.getAuctionList().then((items: AuctionItemStore[]) => {
            onReady(new AuctionListController(items));
        })
    }

    private resolveAuctionDetail(id: number, onReady: (controller: PageController) => void) {
        this.auctionAPI.getAuctionItem(id).then((item) => {
            onReady(new AuctionDetailPageController(item));
        })
    }

    private resolveLogin(onReady: (controller: PageController) => void) {
        onReady(new LoginController(this.sessionStore));
    }

    private resolveRegistration(onReady: (controller: PageController) => void) {
        onReady(new RegistrationController(this.userAPI));
    }
}
