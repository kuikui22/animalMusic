//see: https://jsfiddle.net/hr77p7qb/3/

import navMenu from '_components/menu/index.vue';
import carousel from '_components/carousel/index.vue';

//TODO: sticky 提出為component (?)
//TODO: carousel 需新增touch換圖事件

export default {
    data() {
      return {
        carouselImages: [],
        songList: [],
        newCD: [],
        newsList: [],
        cloudNavPos: '',
        cloudSticky: false,
        cloudStyle: {
          top: '43px'
        }
      }
    },
    components: {
      navMenu,
      carousel
    },
    methods: {
      getSlidImg() {
        this.carouselImages = [
          'images/lion_p16_9.jpg',
          'images/whale_shark_p16_9.jpg',
          'images/squirrel_p16_9.jpg',
          'images/shark_p16_9.jpg',
          'images/White-fox_p16_9.jpg',
        ];
      },
      getDataSongList() {
        //由server取得的資料顯示筆數
        this.songList = [
          {img: 'images/cat_p1_1.jpg', title: 'CAT | 精選曲目', playTimes: '12萬'},
          {img: 'images/dog_p1_1.jpg', title: 'DOG | 精選曲目', playTimes: '12萬'},
          {img: 'images/tiger_p1_1.jpg', title: 'TIGER | 精選曲目', playTimes: '12萬'},
          {img: 'images/fox_p1_1.jpg', title: 'FOX | 精選曲目', playTimes: '12萬'},
          {img: 'images/owl_p1_1.jpg', title: 'OWL | 精選曲目', playTimes: '12萬'},
          {img: 'images/salamander_p1_1.jpg', title: 'SALAMANDER | 精選曲目', playTimes: '12萬'},
        ];
      },
      getDataNewCD() {
        this.newCD = [
          {img: 'images/leopard_p1_1.jpg', title: 'LEOPARD', author: '熱門單曲'},
          {img: 'images/gray-wolf_p1_1.jpg', title: 'GRAY_WOLF', author: '熱門單曲'},
          {img: 'images/dolphin_p1_1.jpg', title: 'DOLPHIN', author: '熱門單曲'},
        ];
      },
      getDataNews() {
        this.newsList = [
          {title: 'SHARK', img: 'images/shark_p16_9.jpg', s_title: 'SHARK', content: '', comment: '1234', great: '4567'},
          {title: 'LION', img: 'images/lion_p16_9.jpg', s_title: 'LION', content: '', comment: '1234', great: '4567'},
          {title: 'test empty', img: '', s_title: 'test empty', content: 'test empty title, this is content', comment: '1234', great: '4567'},
          {title: 'WHITE-FOX', img: 'images/White-fox_p16_9.jpg', s_title: 'WHITE-FOX', content: '', comment: '1234', great: '4567'},
          {title: 'WHALE-SHARK', img: 'images/whale_shark_p16_9.jpg', s_title: 'WHALE-SHARK', content: '', comment: '1234', great: '4567'},
        ];
      },
      scrollSticky(event) {
        const mainElement = document.getElementById('discovery_contain');
        const navElement = document.getElementById('menu_top_nav');  

        //取得sticky element 位置
        if(!this.cloudNavPos) {
          this.cloudNavPos = document.getElementById('cloud_tit').offsetTop;
        }

        //判斷上方nav的高度(含css padding等值)
        if((mainElement.scrollTop + navElement.clientHeight + 10) > this.cloudNavPos) {
          this.cloudSticky = true;
        } else {
          this.cloudSticky = false;
        }
      }
    },
    created() {
      this.getSlidImg();
      this.getDataSongList();
      this.getDataNewCD();
      this.getDataNews();
    },
    mounted() {
      const self = this;

      //設定sticky nav
      window.addEventListener('scroll', self.scrollSticky, true);
    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollSticky, true);
    }
  }