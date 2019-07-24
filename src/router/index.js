import App from '@/App.vue';

// const home = r => require.ensure([], () => r(require('_components/page/home/index.vue')), 'home');
const discovery = r => require.ensure([], () => r(require('_components/page/discovery/index.vue')), 'home');
// const page_404 = r => require.ensure([], () => r(require('_components/page/page_404/page_404.vue')), 'home');

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                redirect: '/discovery'
            },
            {
                path: '/discovery',
                component: discovery
            },
            {
                path: '/my_music',
            },
            {
                path: '/friends',
            },
            {
                path: '/video',
            }
        ]
    },
    // {
    //     path: '*',
    //     component: page_404
    // }
];