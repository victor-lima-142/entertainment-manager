import React, { useEffect } from "react";
import SerieRequests from "../../requests/serie";

const Series = (props: any): JSX.Element => {
    const { logged, navigate } = props;
    useEffect(() => {
        if (!logged) {
            navigate('/login');
        }
        fetchData();
    });
    
    const fetchData = async () => {
        const serieRequests = new SerieRequests();
        const res = serieRequests.list();
        console.log(res);
    }

    return <h1>Series</h1>;
}

export default Series;