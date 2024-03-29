import { Default, HeaderOnly } from '~/layouts';
import { Shop, Home } from '~/pages';

const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: HeaderOnly,
    },
    {
        path: '/home',
        component: Home,
        layout: HeaderOnly,
    },
    {
        path: '/shop',
        component: Shop,
        layout: Default,
    },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
