import AuctionItemStore from "../pages/Auction/Stores/auctionItem.store";
import { AuctionListController } from "../pages/Auction/List/Controllers/auctionList.controller";
import { PageController } from "../pages/page.controller";
import { LoginController } from "../pages/Login/Controllers/login.controller";
import { RegistrationController } from "../pages/Registration/Controllers/registration.controller";
import { AuctionDetailPageController } from "../pages/Auction/Detail/Controllers/auctionDetailPage.controller";
import { AuctionCreateController } from "../pages/Auction/Create/Controllers/auctionCreate.controller";
import { AppProvider } from "../stores/app.provider";
import { observable } from "mobx";

export class RouteController {
    private appProvider: AppProvider;
    private _path: string;
    @observable public controller: PageController|null;
    public component: React.ComponentType<any>;

    constructor(appProvider: AppProvider, component: React.ComponentType<any>) {
        this.appProvider = appProvider;
        this.controller = null;
        this._path = "";
        this.component = component;
    }

    setPath(path: string, component: React.ComponentType<any>) {
        this._path = path;
        this.component = component;
        this.resolveRoute();
    }

    private resolveRoute() {
        switch(this._path) {
        case "/login": this.resolveLogin();
            break;
        case "/registration": this.resolveRegistration();
            break; 
        case "/auction": this.resolveAuctionList();
            break; 
        case "/auctionx": this.resolveAuctionDetail(1);
            break;     
        case "/create": this.resolveAuctionCreate();
            break;
        default: throw new Error(`Route '${this._path}' is not supported`);
        }
    }

    public getController() {
        return this.controller;
    }

    private onResolve(controller: PageController) {
        setTimeout(() => {
            this.controller = controller;
        }, 70)
    }

    private resolveAuctionCreate() {
        this.onResolve(new AuctionCreateController(this.appProvider.auctionAPI, this.appProvider.history));
    }

    private resolveAuctionList() {
        this.appProvider.auctionAPI.getAuctionList().then((items: AuctionItemStore[]) => {
            this.onResolve(new AuctionListController(items));
        })
    }

    private resolveAuctionDetail(id: number) {
        this.appProvider.auctionAPI.getAuctionItem(id).then((item) => {
            this.onResolve(new AuctionDetailPageController(item));
        })
    }

    private resolveLogin() {
        this.onResolve(new LoginController(this.appProvider.sessionStore));
    }

    private resolveRegistration() {
        this.onResolve(new RegistrationController(this.appProvider.userApi));
    }
}
