import App from '@/App.vue';

// const home = r => require.ensure([], () => r(require('_components/page/home/index.vue')), 'home');
const discovery = r => require.ensure([], () => r(require('_components/page/discovery/index.vue')), 'discovery');
const myMusic = r => require.ensure([], () => r(require('_components/page/my_music/index.vue')), 'my_music');
const friends = r => require.ensure([], () => r(require('_components/page/friends/index.vue')), 'friends');
const video = r => require.ensure([], () => r(require('_components/page/video/index.vue')), 'video');
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
                component: myMusic
            },
            {
                path: '/friends',
                component: friends
            },
            {
                path: '/video',
                component: video
            }
        ]
    },
    // {
    //     path: '*',
    //     component: page_404
    // }
];