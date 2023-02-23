import TitleRequest from './title';

const titleRequests = new TitleRequest();

export const fetchGenre = async () => {
    const res = await titleRequests.listGenres();
    return (res?.status === 200) ? res?.data : null;
}