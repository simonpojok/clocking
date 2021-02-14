const routes = [
    {
        path: '',
        component: () => import('../Pages/Home.vue'),
        name: 'home',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: () => import('../Pages/Login.vue'),
        name: 'login',
        meta: {
            guest: true
        }
    },
    {
        path: '/dashboard',
        component: () => import('../Pages/Dashboard.vue'),
        name: 'dashboard',
        meta: {
            is_admin: true,
            requiresAuth: true
        }
    }
];

export default routes;
