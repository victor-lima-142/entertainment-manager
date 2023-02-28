import axios, { AxiosRequestConfig } from "axios";
import { getItem } from "../config/storage";

class Requests {
    public res: any;

    async get(url: string, body: any = {}) {
        this.res = await axios.get(url, this.getBody(body));
        this.res = { status: this.res.status, data: this.res.data, statusText: this.res.statusText }
    }

    async post(url: string, body: any = {}) {
        this.res = await axios.post(url, body, this.getBody());
        this.res = { status: this.res.status, data: this.res.data, statusText: this.res.statusText }
    }

    async delete(url: string, body: any = {}) {
        this.res = await axios.delete(url, this.getBody(body));
        this.res = { status: this.res.status, data: this.res.data, statusText: this.res.statusText }
    }

    async put(url: string, body: any = {}) {
        this.res = await axios.put(url, body, this.getBody());
        this.res = { status: this.res.status, data: this.res.data, statusText: this.res.statusText }
    }

    protected getBody(data?: any): AxiosRequestConfig {
        const userData = getItem("userData");
        let body: AxiosRequestConfig = {};
        if (userData) {
            body.headers = {
                Authorization: `Bearer ${userData.token}`
            }
        }
        if (data) {
            body.params = data;
            body.data = data;
        }
        return body;
    }
}

export default Requests;