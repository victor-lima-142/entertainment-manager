import React, { useEffect } from "react";
import { BreadCrumb, Loader, List } from "../../components";
import "./movies.scss";
import { breadcrumb } from "../../config/app.structure";
import TitleRequest from "../../requests/title";
import { getRandNumber } from "../../config/utils";

const Movies = (props: any): JSX.Element => {
    const [movies, setSeries] = React.useState<any>(null);
    const [imageBanner, setImageBanner] = React.useState<any>(null);
    const { navigate, loading, setLoading, location } = props;

    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const titleRequest = new TitleRequest();
            const res = await titleRequest.list({ type: 'movie' });
            if (res?.status === 200 && res.data) {
                const data = res.data;
                const randData = data[getRandNumber(0, res?.data.length)];
                setSeries(data);
                setImageBanner(randData.image);
            }
        } catch (e: any) {
            console.log(e);
        } finally {
            setTimeout(() => setLoading(false), 1000)
        }
    }, [setSeries, setLoading]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    return (
        <>
            <BreadCrumb itens={breadcrumb.movies} navigate={navigate} />
            {
                (loading || movies === null || !imageBanner) ? <Loader size="md" className={'mt-5 pt-5'} /> :
                    <>
                        
                        <List location={location} props={props} navigate={navigate} list={movies} />
                    </>
            }
        </>
    );
}

export default Movies;