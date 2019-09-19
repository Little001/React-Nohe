import Api, { IGetParams } from "./api";
import token from "../tests/sources/token.json"

export default class LocalApi extends Api {

    public get(url: string, params: IGetParams): Promise<any> {
        return new Promise((resolve, reject) => {
            let json = this.getJson(url);

            if (params.field) {
                resolve(json[params.field]);
            }
            resolve(json);
        });
    }

    public post(url: string, data?: object): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(this.getJson(url));
        });
    }

    private getJson(url: string): object {
        switch(url) {
        case "token": return token;
        default: throw new Error("This URL is not recognized.");
        }
    }
}
