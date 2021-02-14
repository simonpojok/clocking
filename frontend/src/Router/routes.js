import Home from "../Pages/Home";
import Dashboard from "@/Pages/Dashboard";
import Login from "@/Pages/Login";

const routes = [
    {
        path: '',
        component: Home,
        name: 'home'
    },
    {
        path: 'dashboard',
        component: Dashboard,
        name: 'dashboard'
    },
    {
        path: 'login',
        component: Login,
        name: 'login'
    }
];

export default routes;
