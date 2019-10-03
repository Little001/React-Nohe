import Api, { IGetParams } from "./api";
import axios, { AxiosInstance } from "../../../node_modules/axios";

export default class LocalApi extends Api {
    private http: AxiosInstance;


    constructor() {
        super();
        this.http = axios.create({ baseURL: "http://localhost:3004/" });
    }

    public get(url: string, params: IGetParams): Promise<any> {
        return this.http.get(url, {
            params: params.params,
            transformResponse: (response) => {
                if (params.field) {
                    return JSON.parse(response)[params.field];
                }
                return JSON.parse(response);
            }
        });
    }

    public post(url: string, data?: object): Promise<any> {
        return this.http.post(url, data);
    }
}
