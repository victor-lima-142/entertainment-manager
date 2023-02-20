import { Route } from 'react-router';
import { Routes } from "react-router-dom"
import { Auth, Games, Home, Movies, MyLikes, Series } from '../../pages';
import InfoSerie from '../app/info';

const MyRouter = (props: any) => {
    const { loading } = props;
    const getLoaderClass = () => document.querySelector("div.loader-container")?.classList.contains('fullScreen');
    const classes = (loading) ? (!getLoaderClass()) ? 'with-top-space' : '' : 'with-top-space';
    return <section className={classes}>
        <Routes>
            <Route path='/login' element={<Auth { ...props} { ...{ isModal: false, navigateTo: null } } />} />
            <Route path='/' element={<Home { ...props } />} />
            <Route path='/series' element={<Series { ...props } />} />
            <Route path='/movies' element={<Movies { ...props } />} />
            <Route path='/games' element={<Games { ...props } />} />
            <Route path='/my-likes' element={<MyLikes { ...props } />} />
            <Route path='/title-info/:titleId' element={<InfoSerie { ...props } />} />
        </Routes>
    </section>
}

export default MyRouter;