import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Account, Auth, Home, List } from '../../pages';
import { InfoTitle } from '../';
import { Toaster } from "react-hot-toast";

const MyRouter = (props: any) => {
    const { loading } = props;

    const getLoaderClass = () => document.querySelector("div.loader-container")?.classList.contains('fullScreen');

    const classes = (loading) ? (!getLoaderClass()) ? 'with-top-space' : '' : 'with-top-space';

    return <section className={classes}>
        <Toaster containerStyle={{ marginTop: '50px'}} />
        <Routes>
            <Route path='/login' element={<Auth {...props} {...{ isModal: false, navigateTo: null }} />} />
            <Route path='/' element={<Home {...props} />} />
            <Route path='/list/:type?' element={<List {...props} />} />
            <Route path='/title-info/:titleId' element={<InfoTitle {...props} />} />
            <Route path='/account/:userId' element={<Account {...props} />} />
        </Routes>
    </section>
}

export default MyRouter;