import React, { useEffect } from "react";
import SerieRequests from "../../requests/title";
import { BreadCrumb, Loader, List } from "../../components";
import "./series.scss";
import { breadcrumb } from "../../config/app.structure";

const Series = (props: any): JSX.Element => {
    const [series, setSeries] = React.useState<any>(null);
    const { navigate, loading, setLoading, location } = props;

    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const serieRequests = new SerieRequests();
            const res = await serieRequests.list({ type: 'serie' });
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


    return (
        <>
            <BreadCrumb itens={breadcrumb.series} navigate={navigate} />
            {
                (loading || series === null) ? <Loader size="md" className={'mt-5 pt-5'} /> :
                    <List location={location} props={props} navigate={navigate} list={series} />
            }
        </>
    );
}
// setSeries, setLoading
export default Series;