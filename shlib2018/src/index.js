'use strict'

import vueEventCalendar from './components/vue-event-calendar.vue';
import breadCrumb from './components/breadcrumb.vue';
import pagination from './components/pagination.vue';
import columnTitle from './components/columnTitle.vue';
import siteFooter from './components/footer.vue';
import miniFooter from './components/miniFooter.vue';
import nodeData from './components/noneData.vue';
import loading from './components/loading.vue';

// 使用localStorage
import ls from './utils/ls';
import utils from './utils/utils';

function install (Vue, options = {}) {
  const isVueNext = Vue.version.split('.')[0] === '2';
  const inBrowser = typeof window !== 'undefined';
  let dateObj = new Date();
  const DEFAULT_OPTION = {
    locale: 'zh', // en
    color: ' #f29543',
    className:'selected-day',
    weekStartOn: 0 // 0 mean sunday
  }
  let Calendar = {
    $vm: null,
    bindEventBus (vm) {
      this.$vm = vm;
    },
    toDate (dateString) {
      if (dateString === 'all') {
        this.$vm.CALENDAR_EVENTS_DATA.params = {
          curYear: dateObj.getFullYear(),
          curMonth: dateObj.getMonth(),
          curDate: dateObj.getDate(),
          curEventsDate: 'all'
        }
      } else {
        let dateArr = dateString.split('/')
        dateArr = dateArr.map((item) => {
          return parseInt(item, 10)
        })
        this.$vm.CALENDAR_EVENTS_DATA.params = {
          curYear: dateArr[0],
          curMonth: dateArr[1]-1,
          curDate: dateArr[2],
          curEventsDate: dateString
        }
      }
    },
    nextMonth () {
      if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth < 11) {
        this.$vm.CALENDAR_EVENTS_DATA.params.curMonth++;
      } else {
        this.$vm.CALENDAR_EVENTS_DATA.params.curYear++;
        this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = 0;
      }
    },
    preMonth () {
      if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth > 0) {
        this.$vm.CALENDAR_EVENTS_DATA.params.curMonth--;
      } else {
        this.$vm.CALENDAR_EVENTS_DATA.params.curYear--;
        this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = 11;
      }
    },
    chouseMonth (monthIndex) {
      this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = monthIndex;
    },
    resetCurrMonth () {
      let currentYear = +utils.currDates().y,
          currentMonth = +utils.currDates().m - 1;
      if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth === currentMonth && this.$vm.CALENDAR_EVENTS_DATA.params.curYear === currentYear) {
        // 如果年月不变
        return false;
      }
      if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth != currentMonth) {
        this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = currentMonth;
      }

      if (this.$vm.CALENDAR_EVENTS_DATA.params.curYear != currentYear) {
        this.$vm.CALENDAR_EVENTS_DATA.params.curYear = currentYear;
      }
    }
  }

  const calendarOptions = Object.assign(DEFAULT_OPTION, options);

  // 事件中心
  const VueCalendarBarEventBus = new Vue({
    data: {
      CALENDAR_EVENTS_DATA: {
        options: calendarOptions,
        params: {
          curYear: dateObj.getFullYear(),
          curMonth: dateObj.getMonth(),
          curDate: dateObj.getDate(),
          curEventsDate: 'all'
        }
      }
    }
  })

  if (inBrowser) {
    window.VueCalendarBarEventBus = VueCalendarBarEventBus;
    Calendar.bindEventBus(VueCalendarBarEventBus);
  }

  /////////////////////////////////////////////////////////
  // 注册日历组件
  Vue.component('vue-event-calendar', vueEventCalendar);

  // 注册面包屑组件
  Vue.component('bread-crumb', breadCrumb);

  // 注册分页组件
  Vue.component('pagination', pagination);

  // 注册通用标题组件
  Vue.component('column-title', columnTitle);

  // 注册页脚
  Vue.component('site-footer', siteFooter);
  
  Vue.component('mini-footer', miniFooter);

  Vue.component('none-data', nodeData);

  Vue.component('loading', loading);
  ////////////////////////////////////////////////////////

  Vue.prototype.$EventCalendar = Calendar;

  // 全局公用方法 - 打开新路由
  Vue.prototype.openNewPage = function (target) {
    this.$router.push({
      path: target.path,
      query: target.query
    });
  };

  // 注册全局 vuex commit 事件
  Vue.prototype.commitEvent = function (eventName, value) {
    this.$store.commit(eventName, value);
  }

  // 全局方法转换 借阅类型 - 普通外借 | 参考外借
  Vue.prototype.revertType = function (type) {
    let typeInfo = {};
    switch (type) {
      case 'pj': typeInfo = {
        class: 'general-lend',
        cn: '普通外借'
      };
        break;
      case 'cj': typeInfo = {
        class: 'reference-lend',
        cn: '参考外借'
      };
        break;
      default: break;
    }

    return typeInfo;
  }

  // 注册全局 `localStorage` 方法
  Vue.prototype.ls = ls;

  // 注册全局工具方法
  Vue.prototype.utils = utils;
}

export default install;

if (typeof module === 'object' && module.exports) {
  module.exports.install = install;
}

  //百度统计
// var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5baf77ff3c256db2d753d59a23540a6b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//友盟统计
// var _czc = _czc || [];
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan style='display: none;' id='cnzz_stat_icon_1273730526'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1273730526' type='text/javascript'%3E%3C/script%3E"));
