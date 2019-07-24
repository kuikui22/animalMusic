import navMenu from '_components/menu/index.vue';

export default {
    name: 'home',
    // props: {
    //   // msg: String
    // },
    data() {
      return {
        showMenu: false,
      }
    },
    components: {
      navMenu
    },
    methods: {
      openMenu() {
        this.showMenu = true;
      }
    }
  }