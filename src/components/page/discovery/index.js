import navMenu from '_components/menu/index.vue';

export default {
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