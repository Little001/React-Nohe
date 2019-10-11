import axios, { AxiosInstance } from "axios";

export class Api {
    private http: AxiosInstance;


    constructor(isProduction: boolean) {
        this.http = axios.create({ baseURL: this.getUrl(isProduction) });
    }

    public get(url: string): Promise<any> {
        return this.http.get(url, {
            transformResponse: (response) => {
                return JSON.parse(response);
            }
        });
    }

    public post(url: string, data?: object): Promise<any> {
        return this.http.post(url, data);
    }

    private getUrl(isProduction: boolean): string {
        return isProduction ? "https://nohe.cz/api/" : "http://localhost:3004/";
    }
}
