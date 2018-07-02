import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = {
  state: {
    searchEvent: null,
    online: 'http://shlibrary.faqrobot.cn/robot/appChat.html?sysNum=148997688742318882', // 在线咨询
    bookCoverUrl: 'http://e.library.sh.cn/wread2017/_cover/',
    bookCoverLinks: 'http://218.1.116.99/Image/servlet/ImageServlet?bib=',
    defaultBookCover: 'http://e.library.sh.cn/elib.jpg',  // 默认图书封面
    isMobile: document.body.clientWidth < 768 ? true : false,  // 当前是否为手机版
    isIndexPage: false,    // 当前页面是否为首页
    isHideFullFooter: false,  // 是否隐藏全部footer
    footerHeight: 0,
    showSearchBar: false,  // 显示搜索框
    showLoginModal: false,  // 显示登录Modal
    showLoginIcon: localStorage.getItem('loginUserInfo') ? true : false,   // 登录完毕显示登录图标
    tempPath: {
      path: '/index/myLibrary',
      query: {}
    }  // 登录后的跳转路径
  },
  mutations: { // 必须是同步函数
    changeIsIndexPage (state, payload) {
      state.isIndexPage = payload;
    },
    changeIsHideFullFooter (state, payload) {
      state.isHideFullFooter = payload;
    },
    changeFooterHeight (state, payload) {
      state.footerHeight = payload;
    },
    changeSearchBar (state, payload) {
      state.showSearchBar = payload;
    },
    changeshowLoginModal (state, payload) {
      state.showLoginModal = payload;
    },
    changeshowLoginIcon (state, payload) {
      state.showLoginIcon = payload;
    },
    changeSearchEvent (state, payload) {
      state.searchEvent = payload;
    },
    changeTempPath (state, payload) {
      // console.log(payload);
      state.tempPath = payload;
    },
  },
  actions: { // 允许包含异步操作
    // context
  },
  getters: { // 可当做是 `store` 的计算属性

  }
};

export default new Vuex.Store(store);