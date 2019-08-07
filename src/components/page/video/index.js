import navMenu from '_components/menu/index.vue';

export default {
    data() {
        return {
            videoList: []
        }
    },
    components: {
        navMenu
    },
    methods: {
        getVideoList() {
            this.videoList = [
                { 
                    author: 'SHARK',
                    authorImg: '/images/salamander_p1_1.jpg',
                    content: 'shark',
                    img: '/images/shark.jpg',
                    great: '1234582',
                    comment: '85215',
                },
                { 
                    author: 'LION',
                    authorImg: '/images/lion_p1_1.jpg',
                    content: 'shark',
                    img: '/images/lion.jpg',
                    great: '1234582',
                    comment: '85215',
                },
                { 
                    author: 'White-fox',
                    authorImg: '/images/White-fox_p1_1.jpg',
                    content: 'shark',
                    img: '/images/White-fox.jpg',
                    great: '1234582',
                    comment: '85215',
                },
                { 
                    author: 'Squirrel',
                    authorImg: '/images/squirrel_p1_1.jpg',
                    content: 'shark',
                    img: '/images/squirrel.jpg',
                    great: '1234582',
                    comment: '85215',
                },
                { 
                    author: 'Owl',
                    authorImg: '/images/owl_p1_1.jpg',
                    content: 'shark',
                    img: '/images/owl.jpg',
                    great: '1234582',
                    comment: '85215',
                },
                { 
                    author: 'FOX',
                    authorImg: '/images/fox_p1_1.jpg',
                    content: 'shark',
                    img: '/images/fox.jpg',
                    great: '1234582',
                    comment: '85215',
                }
            ];
        },
    },
    created() {
        this.getVideoList();
    }
};