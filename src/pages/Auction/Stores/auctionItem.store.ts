export default class AuctionItemStore {
    public id: number;
    public description: string;
    public freight: string;

    constructor(id: number, description: string, freight: string) {
        this.id = id;
        this.description = description;
        this.freight = freight;
    }
}