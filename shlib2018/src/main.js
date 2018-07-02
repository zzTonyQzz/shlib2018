// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'swiper/dist/css/swiper.min.css';

import 'babel-polyfill';

import Vue from "vue";
import router from "./router";
import store from "./store";
import Axios from "./server";
import App from "./App.vue";

// 第三方插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import BaiduMap from 'vue-baidu-map';
import VueClipboard from 'vue-clipboard2';
import EasyScroll from 'easyscroll';

// 自定义注册插件
import vueEventCalendar from './index';
import breadCrumb from './index';
import pagination from './index';
import columnTitle from './index';
import siteFooter from './index';
import miniFooter from './index';

// 使用已注册插件 - 第三方
// Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueClipboard);
Vue.use(Axios);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'QCxLry4y9BjIDRDIsGAerkcHrnrbo55I'
});
Vue.use(EasyScroll);

// 自定义注册
Vue.use(vueEventCalendar, {locale: 'zh', weekStartOn: 1});
Vue.use(breadCrumb);
Vue.use(pagination);
Vue.use(columnTitle);
Vue.use(siteFooter);
Vue.use(miniFooter);


// 时间截取日期，不显示时分秒
Vue.filter('dateonly', function (value) {
  if (value) {
    return value.trim().split(' ')[0];
  }
});

new Vue({
  el: '#app',
  router,
  store,
  Axios,
  template: "<App/>",
  components: { App }
});