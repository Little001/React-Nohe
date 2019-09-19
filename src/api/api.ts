export interface IGetParams {
    field?: string;
    params?: object;
}

export default abstract class Api {
    abstract get(url: string, params: IGetParams): Promise<any>;
    abstract post(url: string, data?: object): Promise<any>;
}