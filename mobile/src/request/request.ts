import axios, { AxiosRequestConfig } from "axios";
import { getItem } from "../config/storage";
import { Platform } from 'react-native';

class Requests {
    public res: any;
    protected baseUrl: string = Platform.OS === 'android' ? 'http://10.0.2.2:8000' : 'http://localhost:8000';
    
    async get(url: string, body: any = {}) {
        const b = await this.getBody(body);
        this.res = await axios.get(this.baseUrl+url, b);
        this.res = { status: this.res?.status, data: this.res?.data, statusText: this.res?.statusText, message: this.res?.data?.message }
    }

    async post(url: string, body: any = {}) {
        const b = await this.getBody();
        this.res = await axios.post(this.baseUrl+url, body, b);
        this.res = { status: this.res?.status, data: this.res?.data, statusText: this.res?.statusText, message: this.res?.data?.message }
    }

    async delete(url: string, body: any = {}) {
        const b = await this.getBody(body);
        this.res = await axios.delete(this.baseUrl+url, b);
        this.res = { status: this.res?.status, data: this.res?.data, statusText: this.res?.statusText, message: this.res?.data?.message }
    }

    async put(url: string, body: any = {}) {
        const b = await this.getBody();
        this.res = await axios.put(this.baseUrl+url, body, b);
        this.res = { status: this.res?.status, data: this.res?.data, statusText: this.res?.statusText, message: this.res?.data?.message }
    }

    protected async getBody(data?: any) {
        const userData: any = null;
        // const userData: any = await getItem("userData");
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