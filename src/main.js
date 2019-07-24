import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import routes from '@/router/index.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
// import store from '@/store/index.js'
import App from '@/App.vue';

Vue.config.productionTip = false

//use vue-router
Vue.use(VueRouter);
const router = new VueRouter({
	routes,
	mode: 'hash',
	strict: process.env.NODE_ENV !== 'production', //build環境下關閉嚴格模式
});

//use bootstrap-vue 
Vue.use(BootstrapVue);

//use fontawesome-svg
library.add(fas, far);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
