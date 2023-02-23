import React, { useEffect } from "react";
import { BreadCrumb, Loader, List } from "../../components";
import "./games.scss";
import { breadcrumb } from "../../config/app.structure";
import TitleRequest from "../../requests/title";

const Games = (props: any): JSX.Element => {
    const [games, setGames] = React.useState<any>(null);
    const { navigate, loading, setLoading, location } = props;

    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const titleRequest = new TitleRequest();
            const res = await titleRequest.list({ type: 'game' });
            if (res?.status === 200) setGames(res?.data);
        } catch (e: any) {
            console.log(e);
        } finally {
            setTimeout(() => setLoading(false), 1000)
        }
    }, [setGames, setLoading]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <BreadCrumb itens={breadcrumb.games} navigate={navigate} />
            {
                (loading || games === null) ? <Loader size="md" className={'mt-5 pt-5'} /> :
                    <List location={location} props={props} navigate={navigate} setList={setGames} list={games} />
            }
        </>
    );
}

export default Games;