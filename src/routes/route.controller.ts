import AuctionItemStore from "../pages/Auction/Stores/auctionItem.store";
import { AuctionListController } from "../pages/Auction/List/Controllers/auctionList.controller";
import { LoginController } from "../pages/Login/Controllers/login.controller";
import { RegistrationController } from "../pages/Registration/Controllers/registration.controller";
import { AuctionDetailPageController } from "../pages/Auction/Detail/Controllers/auctionDetailPage.controller";
import { AuctionCreateController } from "../pages/Auction/Create/Controllers/auctionCreate.controller";
import { AuctionAPI } from "../api/auction.api";
import { History } from "history";
import { SessionStore } from "../stores/session.store";
import { UserAPI } from "../api/user.api";
import { LoaderController } from "../components/loader/Controllers/loader.controller";
import { PageController } from "../pages/page.controller";

export class RouteController {
    private auctionAPI: AuctionAPI;
    private sessionStore: SessionStore;
    private userAPI: UserAPI;
    private history: History;
    private loaderController: LoaderController;

    constructor(auctionAPI: AuctionAPI, userAPI: UserAPI, sessionStore: SessionStore, history: History, loaderController: LoaderController) {
        this.auctionAPI = auctionAPI;
        this.sessionStore = sessionStore;
        this.userAPI = userAPI;
        this.history = history;
        this.loaderController = loaderController;
    }

    private async resolveRoute(path: string, id: number) {
        this.loaderController.show();
        switch(path) {
        case "/login": return this.resolveLogin();
        case "/registration": return this.resolveRegistration();
        case "/auction": return this.resolveAuctionList();
        case "/auction/:id": return this.resolveAuctionDetail(id); 
        case "/create": return this.resolveAuctionCreate();
        default: throw new Error(`Route '${path}' is not supported`);
        }
    }

    public async getPageController(path: string, id: string) {
        return this.resolveRoute(path, Number(id)).then((controller: PageController) => {
            setInterval(() => {
                this.loaderController.hide();
            }, 2000);
            return controller;
        });
    }

    private resolveAuctionCreate() {
        return new AuctionCreateController(this.auctionAPI, this.history);
    }

    private resolveAuctionList() {
        return this.auctionAPI.getAuctionList().then((items: AuctionItemStore[]) => {
            return new AuctionListController(items);
        })
    }

    private resolveAuctionDetail(id: number) {
        return this.auctionAPI.getAuctionItem(id).then((item) => {
            return new AuctionDetailPageController(item);
        })
    }

    private resolveLogin() {
        return new LoginController(this.sessionStore);
    }

    private resolveRegistration() {
        return new RegistrationController(this.userAPI);
    }
}
