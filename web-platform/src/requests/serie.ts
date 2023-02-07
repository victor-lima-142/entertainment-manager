import Requests from ".";
import endpoints from "./endpoints";

class SerieRequests extends Requests {
    async create(body?: any) {
        await this.post(endpoints.serie.create, body);
        return this.res;
    }

    async edit(body?: any) {
        await this.put(endpoints.serie.edit, body);
        return this.res;
    }

    async find(body?: any) {
        await this.get(endpoints.serie.find, body);
        return this.res;
    }

    async deleteSerie(body?: any) {
        await this.delete(endpoints.serie.delete, body);
        return this.res;
    }

    async list(body?: any) {
        await this.get(endpoints.serie.list, body);
        return this.res;
    }
}

export default SerieRequests;