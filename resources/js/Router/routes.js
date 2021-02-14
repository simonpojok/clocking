const routes = [
    {
        path: '',
        component: () => import('../Pages/Home.vue'),
        name: 'home'
    },
    {
        path: '/login',
        component: () => import('../Pages/Login.Vue'),
        name: 'login'
    }
];

export default routes;
