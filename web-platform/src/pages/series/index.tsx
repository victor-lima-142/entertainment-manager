import React, { useEffect } from "react";
import SerieRequests from "../../requests/serie";
import { BreadCrumb, InfoSerie, Loader, SeriesList } from "../../components";
import "./series.scss";
import { breadcrumb } from "../../config/app.structure";

const Series = (props: any): JSX.Element => {
    const [series, setSeries] = React.useState<any>(null);
    const { logged, navigate, loading, setLoading } = props;

    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            const serieRequests = new SerieRequests();
            const res = await serieRequests.list();
            if (res?.status === 200) setSeries(res?.data);
        } catch (e: any) {
            console.log(e);
        } finally {
            setTimeout(() => setLoading(false), 1000)
        }
    }, [setSeries, setLoading]);

    useEffect(() => {
        if (!logged) {
            navigate('/login');
        } else {
            fetchData();
        }
    }, [fetchData, logged, navigate]);

    if (loading || series === null)
        return <Loader size="md" variant="primary" className={'mt-5 pt-5'} />

    return (
        <>
            <BreadCrumb itens={breadcrumb.series} navigate={navigate} />
            <SeriesList navigate={navigate} list={series} />
        </>
    );
}
// setSeries, setLoading
export default Series;