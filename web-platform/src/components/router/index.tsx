import { Route } from 'react-router';
import { Routes } from "react-router-dom"
import { Auth, Home, Series } from '../../pages';

const MyRouter = (props: any) => {
    const { loading } = props;
    const getLoaderClass = () => document.querySelector("div.loader-container")?.classList.contains('fullScreen');
    const classes = (loading) ? (!getLoaderClass()) ? 'mt-5 pt-4' : '' : 'mt-5 pt-4';
    return <section className={classes}>
        <Routes>
            <Route path='/login' element={<Auth { ...props} />} />
            <Route path='/' element={<Home { ...props } />} />
            <Route path='/series' element={<Series { ...props } />} />
        </Routes>
    </section>
}

export default MyRouter;