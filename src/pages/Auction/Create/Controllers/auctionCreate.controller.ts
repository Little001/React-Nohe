import { AuctionAPI } from "../../../../api/auction.api";
import AuctionCreateStore from "../Stores/auctionCreate.store";
import { History } from "history";

export class AuctionCreateController {
    private store: AuctionCreateStore;
    private history: History;
    private api: AuctionAPI;

    constructor(auctionApi: AuctionAPI, history: History) {
        this.api = auctionApi;
        this.history = history;
        this.store = new AuctionCreateStore();
    }

    public getDescription() {
        return this.store.description;
    }

    public setDescription(description: string) {
        this.store.description = description;
    }

    public getFreight() {
        return this.store.freight;
    }

    public setFreight(freight: string) {
        this.store.freight = freight;
    }

    public getStore() {
        return this.store;
    }

    public isValid(): boolean {
        return Boolean(this.getDescription() && this.getFreight());
    }

    public createAuction() {
        if (this.isValid()) {
            this.api.createAuction(this.getStore()).then(() => {
                this.history.push("/auction")
            })
        }
    }
}
