import React, { useEffect } from "react";
import SerieRequests from "../../requests/serie";
import { Loader, SeriesList } from "../../components";
import "./series.scss";

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
            setLoading(false);
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
        return <Loader size="lg" variant="primary" fullScreen />

    return (
        <>
            <h1 className="text-center">Series</h1>
            <SeriesList list={series} />
        </>
    );
}
// setSeries, setLoading
export default Series;