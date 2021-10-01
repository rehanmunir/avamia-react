import { lazy } from 'react';

const routes =  [
    {
        path: '/',
        public: true,
        exact: true,
        component: lazy(() => import('views/User/Auth')),
        restricted: true,
        showHeader: false,
        showFooter: false,
    },
    {
        path: '/user',
        public: true,
        exact: true,
        component: lazy(() => import('views/User/Auth')),
        restricted: true,
        showHeader: false,
        showFooter: false,
    },
    {
        path: '/companies',
        public: false,
        exact: true,
        component: lazy(() => import('views/Companies')),
        showHeader: true,
        showFooter: false,
    }
]

export default routes