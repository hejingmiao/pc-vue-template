import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import '@/components';
// import '@/filters';
import '@/utils/helper';
import { minPic } from '@/utils/index';

Vue.prototype['$minPic'] = minPic

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
