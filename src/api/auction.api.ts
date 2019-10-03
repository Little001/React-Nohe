import Api from "./base/api";

export class AuctionAPI {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getAuctionList() {
        return this.api.get("auction", {
            field: "auction"
        });
    }
}
