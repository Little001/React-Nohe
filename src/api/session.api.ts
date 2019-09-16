import { AxiosInstance } from "axios";

export class SessionAPI {
  private http: AxiosInstance;

  constructor(http: AxiosInstance) {
      this.http = http;
  }

  public async getToken(username: string, password: string) {
      // FIXME: just for example

      return this.http.get("/posts");
  }
}
