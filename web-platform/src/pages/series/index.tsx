import React, { useEffect } from "react";

const Series = (props: any): JSX.Element => {
    const { logged, navigate } = props;
    useEffect(() => {
        if (!logged) {
            navigate('/login');
        }
    });
    
    return <h1>Series</h1>;
}

export default Series;