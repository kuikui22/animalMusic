import navMenu from '_components/menu/index.vue';

export default {
    data() {
        return {
            myMusicMenu: [],
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
        }
    },
    created() {
        this.getMyMusicMenu();
    },
    mounted() {

    }
};