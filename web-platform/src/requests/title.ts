import Requests from ".";
import endpoints from "./endpoints";

class TitleRequest extends Requests {
    async create(body?: any) {
        await this.post(endpoints.title.create, body);
        return this.res;
    }

    async edit(body?: any) {
        await this.put(endpoints.title.edit, body);
        return this.res;
    }

    async find(body?: any) {
        await this.get(endpoints.title.find, body);
        return this.res;
    }

    async deleteSerie(body?: any) {
        await this.delete(endpoints.title.delete, body);
        return this.res;
    }

    async list(body?: any) {
        await this.get(endpoints.title.list, body);
        return this.res;
    }

    async like(body?: any) {
        await this.post(endpoints.title.like, body);
        return this.res;
    }
}

export default TitleRequest;