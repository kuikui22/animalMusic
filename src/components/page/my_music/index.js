import navMenu from '_components/menu/index.vue';

export default {
    data() {
        return {
            myMusicMenu: [],
            recommendList: [],
            showList: true
        }
    },
    components: {
        navMenu
    },
    methods: {
        getMyMusicMenu() {
            this.myMusicMenu = [
                { name: '駕駛模式', iconName: 'car' },
                { name: '私人FM', iconName: 'band-aid' },
                { name: '最新電音', iconName: 'braille' },
                { name: 'Sati空間', iconName: 'database' },
                { name: '私藏推薦', iconName: 'heartbeat' },
                { name: '音樂交友', iconName: 'heart' },
                { name: '親子頻道', iconName: 'baby' },
                { name: '古典專區', iconName: 'guitar' },
                { name: '跑步FM', iconName: 'running' },
                { name: '小冰電台', iconName: 'bacon' },
                { name: '爵士電台', iconName: 'drum' }
            ];
        },
        getRecommendList() {
            this.recommendList = [
                { title: 'SQUIRREL', img: 'images/squirrel_p1_1.jpg' },
                { title: 'DOLPHIN', img: 'images/dolphin_p1_1.jpg' },
                { title: 'WHITE-FOX', img: 'images/White-fox_p1_1.jpg' },
                { title: 'SALAMANDER', img: 'images/salamander_p1_1.jpg' },
                { title: 'CAT', img: 'images/cat_p1_1.jpg' },
                { title: 'LEOPARD', img: 'images/leopard_p1_1.jpg' }
            ];
        },
        changeListShow() {
            console.log(11);
            this.showList = !this.showList;
        }
    },
    created() {
        this.getMyMusicMenu();
        this.getRecommendList();
    },
    mounted() {

    }
};