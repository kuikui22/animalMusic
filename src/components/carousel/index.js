import { debounce } from '@/services/utils.js';

export default {
    props: [
        'carouselImages',
        'changeTime'
    ],
    data() {
        return {
            currentImg: 0,
            carouselStyle: {
                height: '40%'
            }
        }
    },
    methods: {
        resizeStyle(event) {
            // console.log(1,event);
            const element = document.getElementById('carousel');

            if(element) {
              const height = element.children[0].clientHeight;
              this.carouselStyle.height = (height + 10) +'px';
            }
        },
        conversionImgScale() {

            //圖片長度16 : 9
            const WindowWidth = document.documentElement.clientWidth;
            this.carouselStyle.height = Math.floor((WindowWidth - 10) / 16 * 9) + 'px';
        },
    },
    computed: {
        getNowImg() {
          return this.carouselImages[Math.abs(this.currentImg) % this.carouselImages.length];
        }
    },
    mounted() {
        const self = this;
        
        self.conversionImgScale();

        self.$nextTick(() => {
          window.addEventListener('resize', debounce(self.resizeStyle, 350));
        });
  
        //定時輪播圖片
        setInterval(() => {
          self.currentImg = ((self.currentImg + 1) > (self.carouselImages.length - 1)) ? 0 : self.currentImg += 1;
        }, self.changeTime);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeStyle);
    }
}