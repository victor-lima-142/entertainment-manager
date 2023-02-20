import React, { useEffect } from "react";
import { BreadCrumb, Loader, List } from "../../components";
import "./my-likes.scss";
import LikeRequests from "../../requests/likes";

const MyLikes = (props: any): JSX.Element => {
    const [likes, setLikes] = React.useState<any>(null);
    const { navigate, loading, setLoading, location } = props;
    

    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const likeRequest = new LikeRequests();
            const res = await likeRequest.listMyLikes();
            if (res?.status === 200) setLikes(res?.data);
        } catch (e: any) {
            console.log(e);
        } finally {
            setTimeout(() => setLoading(false), 1000)
        }
    }, [setLikes, setLoading]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <BreadCrumb itens={[{ flag: 'Liked titles', active: true }]} navigate={navigate} />
            {
                (loading || likes === null) ? <Loader size="md" className={'mt-5 pt-5'} /> :
                    <List location={location} props={props} navigate={navigate} list={likes} />
            }
        </>
    );
}

export default MyLikes;