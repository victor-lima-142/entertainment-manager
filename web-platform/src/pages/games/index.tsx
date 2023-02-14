import React, { useEffect } from "react";
import { BreadCrumb, Loader, List } from "../../components";
import "./games.scss";
import { breadcrumb } from "../../config/app.structure";
import TitleRequest from "../../requests/serie";

const Games = (props: any): JSX.Element => {
    const [games, setSeries] = React.useState<any>(null);
    const { navigate, loading, setLoading } = props;

    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const titleRequest = new TitleRequest();
            const res = await titleRequest.list({ type: 'game' });
            if (res?.status === 200) setSeries(res?.data);
        } catch (e: any) {
            console.log(e);
        } finally {
            setTimeout(() => setLoading(false), 1000)
        }
    }, [setSeries, setLoading]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading || games === null)
        return <Loader size="md" variant="primary" className={'mt-5 pt-5'} />

    return (
        <>
            <BreadCrumb itens={breadcrumb.games} navigate={navigate} />
            <List navigate={navigate} list={games} />
        </>
    );
}

export default Games;