const routes = [
    {
        path: '/home',
        component: () => import('../Pages/Home.vue'),
        name: 'home',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '',
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
    },
    {
        path: '/report',
        component: () => import('../Pages/Report.vue'),
        name: 'user',
        meta: {
            requiresAuth: true
        }
    }
];

export default routes;
