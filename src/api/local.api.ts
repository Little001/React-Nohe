import Api, { IGetParams } from "./api";
import token from "../tests/sources/token.json"

export default class LocalApi extends Api {

    public get(url: string, params: IGetParams): Promise<any> {
        return new Promise((resolve, reject) => {
            let json = this.getJson(url);

            if(this.checkLogin(url, params)) {
                if (params.field) {
                    resolve(json[params.field]);
                }
                resolve(json);
            }
            reject();
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

    private checkLogin(url: string, params: IGetParams) {
        if (url === "login") {
            if (params.params) {
                if (params.params["username"] === "merynek" && params.params["password"] === "pass") {
                    return true;
                }
                return false;
            }
            return false;
        }
        return true;
    }
}
