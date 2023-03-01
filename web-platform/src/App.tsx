import "./global.scss"
import { Router } from './components';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navigation } from "./components";
import React from "react";
import { getItem } from "./config/storage";

const App = (): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPath, setCurrentPath] = React.useState<string | null>(null);
    const [logged, setLogged] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [userData, setUserData] = React.useState<any>(null);

    const _setLogged = () => setLogged(logged ? false : true);

    React.useEffect(() => {
        const usD = getItem("userData");
        if (usD) {
            setUserData(usD);
        }
    }, [setUserData])

    React.useEffect(() => {
        setCurrentPath(location.pathname.replace('/', ''));
        if (getItem('userData')) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    }, [location]);

    if (currentPath === null)
        return <></>;

    let props = { ...{ navigate, location, logged, _setLogged, loading, setLoading, userData, setUserData } };

    return <>
        <Navigation { ...props }  />
        <Router {...props} />
    </>;
}



export default App;
