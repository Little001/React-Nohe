import Api from "./base/api";
import AuctionItemStore from "../pages/Auction/Stores/auctionItem.store";

interface IAuctionItemResponse {
    id: number;
    description: string;
}

interface IAuctionListResponse {
    items: IAuctionItemResponse[];
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

    private createAuctionList(data: IAuctionListResponse): AuctionItemStore[] {
        let items: AuctionItemStore[] = [];

        for (let i = 0; i < data.items.length; i++) {
            items.push(this.createAuctionItem(data.items[i]))
        }

        return items;
    }

    private createAuctionItem(data: IAuctionItemResponse): AuctionItemStore {
        return new AuctionItemStore(data.id, data.description);
    }
}
