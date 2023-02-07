const endpoints = {
    auth: {
        verifyUser: '/auth/verifyUser',
        verifyPassword: '/auth/verifyPassword',
        register: '/auth/register',
        logout: '/auth/logout',
        edit: '/auth/edit',
        find: '/auth/find',
        resetPassword: '/auth/resetPassword',
        delete: '/auth/delete',
        sendValidCodePass: '/auth/sendValidCodePass',
        checkCode: '/auth/checkCode',
        resetForgotPassword: '/auth/resetForgotPassword'
    },
    serie: {
        create: '/serie/create',
        edit: '/serie/edit',
        find: '/serie/find',
        delete: '/serie/delete',
        list: '/serie/list'
    }
}

export default endpoints;