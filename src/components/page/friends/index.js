import navMenu from '_components/menu/index.vue';

export default {
    data() {
        return {
            friendsActionList: []
        }
    },
    components: {
        navMenu
    },
    methods: {
        getFriendActionList() {
            this.friendsActionList = [
                { 
                    ID: '0',
                    friends: {
                        friendName: 'friend_0', 
                        friendImg: 'images/gray-wolf_p1_1.jpg', 
                        fans: '10.2萬'
                    },          
                    article: {
                        action: '分享單曲',
                        plays: '123456', 
                        comments: '45678', 
                        great: '78945',
                        img: 'images/gray-wolf.jpg',
                        content: '<html>..... <a link.....>',
                    },
                    images: [],
                    musicList: {
                        music_name: 'gray-wolf',
                        music_author: 'GRAY-WOLF',
                        music_img: 'images/gray-wolf_p1_1.jpg'
                    }                    
                },
                { 
                    ID: '1',
                    friends: {
                        friendName: 'friend_1', 
                        friendImg: 'images/tiger_p1_1.jpg', 
                        fans: '10.2萬'
                    },          
                    article: {
                        action: '分享單曲',
                        plays: '123456', 
                        comments: '45678', 
                        great: '78945',
                        img: 'images/tiger.jpg',
                        content: '<html>..... <a link.....>',
                    },
                    images: [],
                    musicList: {
                        music_name: 'gray-wolf',
                        music_author: 'GRAY-WOLF',
                        music_img: 'images/tiger_p1_1.jpg'
                    }                    
                },
                { 
                    ID: '2',
                    friends: {
                        friendName: 'friend_2', 
                        friendImg: 'images/owl_p1_1.jpg', 
                        fans: '10.2萬'
                    },          
                    article: {
                        action: '分享單曲',
                        plays: '123456', 
                        comments: '45678', 
                        great: '78945',
                        img: 'images/owl.jpg',
                        content: '<html>..... <a link.....>',
                    },
                    images: [],
                    musicList: {
                        music_name: 'owl',
                        music_author: 'OWL',
                        music_img: 'images/owl_p1_1.jpg'
                    }                    
                },
                { 
                    ID: '3',
                    friends: {
                        friendName: 'friend_3', 
                        friendImg: 'images/fox_p1_1.jpg', 
                        fans: '10.2萬'
                    },          
                    article: {
                        action: '分享單曲',
                        plays: '123456', 
                        comments: '45678', 
                        great: '78945',
                        img: 'images/fox.jpg',
                        content: '<html>..... <a link.....>',
                    },
                    images: [],
                    musicList: {
                        music_name: 'fox',
                        music_author: 'GRAY-WOLF',
                        music_img: 'images/fox_p1_1.jpg'
                    }                    
                },
            ]; 
        }
    },
    created() {
        this.getFriendActionList();
    }
}