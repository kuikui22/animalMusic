export default {
  props: {
    // msg: String
  },
  data() {
    return {
      isShowMenu: false,
      mainMenu: [],
    }
  },
  methods: {
    clickMenu() {
      this.isShowMenu = !(this.isShowMenu);
    },
    getMainMenuLink() {
      this.mainMenu = [
        {'name': '我的', 'link': '/my_music/'},
        {'name': '發現', 'link': '/discovery/'},
        {'name': '朋友', 'link': '/friends/'},
        {'name': '視頻', 'link': '/video/'},
      ];
    }
  },
  mounted() {
    this.getMainMenuLink();
  }
}