const routes = {
    error: '/404',

    auth: {
        login: '/',
        signup:'/register',
        forgetPassword:'/forget-password',
        createNewPassword : '/create-new-password',
    },

    panel: {
        admin: {
            dashboard: '/admin/dashboard',
        },
        sale: {
            dashboard: '/sale/dashboard',
        },
    }
};

export default routes;
