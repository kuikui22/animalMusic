export default {
    props: {
      // msg: String
    },
    data() {
      return {
        isShowMenu: false,
      }
    },
    methods: {

      //TODO: fade css動畫 mask 淡入效果需調整
      clickMenu() {
        this.isShowMenu = !(this.isShowMenu);
      }
    }
  }