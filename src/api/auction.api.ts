import Api from "./base/api";
import AuctionItemStore from "../pages/Auction/Stores/auctionItem.store";

interface IAuctionItemResponse {
    id: number;
    description: string;
    freight: string;
}

export class AuctionAPI {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getAuctionList() {
        return this.api.get("auction").then((response) => {
            return this.createAuctionList(response.data);
        });
    }

    public async getAuctionItem(id: number) {
        return this.api.get("auction/" + id).then((response) => {
            return this.createAuctionItem(response.data);
        });
    }

    private createAuctionList(data: IAuctionItemResponse[]): AuctionItemStore[] {
        let items: AuctionItemStore[] = [];

        for (let i = 0; i < data.length; i++) {
            items.push(this.createAuctionItem(data[i]))
        }

        return items;
    }

    private createAuctionItem(data: IAuctionItemResponse): AuctionItemStore {
        return new AuctionItemStore(data.id, data.description, data.freight);
    }
}
