import EditUser from "../Pages/EditUser";

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
        name: 'report',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users',
        component: () => import('../Pages/Users.vue'),
        name: 'users',
        meta: {
            requiresAuth: true,
            is_admin: true
        }
    },
    {
        path: '/user/:id',
        component: EditUser,
        props: {
            id: true
        },
        meta: {
            requiresAuth: true,
            is_admin: true
        }
    },
];

export default routes;
