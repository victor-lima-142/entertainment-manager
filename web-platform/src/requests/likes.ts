import Requests from ".";
import endpoints from "./endpoints";

class LikeRequests extends Requests {
    async listMyLikes(body?: any) {
        await this.get(endpoints.likes.list, body);
        return this.res;
    }
}

export default LikeRequests;