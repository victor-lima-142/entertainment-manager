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
    title: {
        create: '/title/create',
        edit: '/title/edit',
        find: '/title/find',
        delete: '/title/delete',
        list: '/title/list',
        like: '/title/like',
    }
}

export default endpoints;