import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
// pages
import index from '@/page/index'; // 主体框架
import homePage from '@/page/homePage'; // 首页默认页面
import myLibrary from '@/page/myLibrary'; // 我的图书馆
import myLibraryDefault from '@/page/myLibraryDefault'; // 我的图书馆默认页面
import recommendedBook from '@/page/recommendedBook'; // 图书推荐
import museumNavigation from '@/page/museumNavigation'; // 分馆导航
import fullMenu from '@/page/fullMenu'; // 全部菜单
import fullMenuDefault from '@/page/fullMenuDefault'; // 全部菜单默认页面
import currentLending from '@/page/currentLending'; // 当前借阅
import libraryList from '@/page/libraryList'; // 图书借阅排行榜
import newsBulletin from '@/page/newsBulletin'; // 新闻公告
import newsBulletinDefault from '@/page/newsBulletinDefault'; // 新闻公告默认页面
import newsDetails from '@/page/newsDetails'; // 新闻详情
import serviceGuide from '@/page/serviceGuide'; // 服务指南
import serviceGuideDefault from '@/page/serviceGuideDefault'; // 服务指南默认页面
import serviceIssueList from '@/page/serviceIssueList'; // 服务指南问题列表
import serviceIssueDetails from '@/page/serviceIssueDetails'; // 服务指南问题详情
import serviceIssueSearch from '@/page/serviceIssueSearch'; // 服务指南问题检索
import pBookDetails from '@/page/pBookDetails'; // 图书详情
import pBookSearch from '@/page/pBookSearch'; // 书目检索
import activityCenter from '@/page/activityCenter'; // 活动中心
import eventDetails from '@/page/eventDetails'; // 活动详情
import commonPage from '@/page/commonPage'; // 拓展主题
import eBook from '@/page/eBook'; // 数字阅读
import eBookDefault from '@/page/eBookDefault'; // 数字阅读
import bookClassification from '@/page/bookClassification'; // 图书分类
import bookDefault from '@/page/bookDefault'; // 图书分类默认页面
import bookClassificationList from '@/page/bookClassificationList'; // 分类书单
import myBookshelf from '@/page/myBookshelf'; // 我的书架
import eBookSearch from '@/page/eBookSearch'; // 电子书检索
import recommended from '@/page/recommended'; // 每周推荐
import recommendedPastDefault from '@/page/recommendedPastDefault'; // 每周推荐查看往期
import recommendedPast from '@/page/recommendedPast'; // 每周推荐查看往期
import eBookDetails from '@/page/eBookDetails'; // 图书详情
import weiWeek from '@/page/weiWeek'; // 微周刊
import digitalReadingList from '@/page/digitalReadingList'; // 排行榜
import eBookCommonPage from '@/page/eBookCommonPage'; // 拓展主题

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      // name: 'index',
      meta: {
        requireAuth: false,      // 该字段表示进入这个路由需要登录
        breadcrumbName: '首页'   // 用作面包屑导航
      },
      component: index,
      children: [{
        path: '',
        name: 'homePage',
        component: homePage
      }, {
        path: 'myLibrary',
        // name: 'myLibrary',
        meta: {
          requireAuth: true,
          breadcrumbName: '我的图书馆'
        },
        component: myLibrary,
        children: [{
          path: '',
          name: 'myLibraryDefault',
          component: myLibraryDefault
        }, {
          path: 'recommendedBook',
          name: 'recommendedBook',
          meta: {
            requireAuth: true,
            breadcrumbName: '图书推荐'
          },
          component: recommendedBook
        }]
      }, {
        path: 'museumNavigation',
        name: 'museumNavigation',
        meta: {
          requireAuth: false,
          breadcrumbName: '分馆导航'
        },
        component: museumNavigation
      }, {
        path: 'fullMenu',
        meta: {
          requireAuth: false,
          breadcrumbName: '全部菜单'
        },
        component: fullMenu,
        children: [{
          path: '',
          name: 'fullMenuDefault',
          component: fullMenuDefault,
        },{
          path: 'currentLending',
          name: 'currentLending',
          meta: {
            requireAuth: true,
            breadcrumbName: '我的图书馆'
          },
          component: currentLending
        }]
      }, {
        path: 'libraryList',
        name: 'libraryList',
        meta: {
          requireAuth: false,
          breadcrumbName: '图书借阅排行榜'
        },
        component: libraryList,
      }, {
        path: 'newsBulletin',
        meta: {
          requireAuth: false,
          breadcrumbName: '新闻公告'
        },
        component: newsBulletin,
        children: [{
          path: '',
          name: 'newsBulletinDefault',
          component: newsBulletinDefault
        }, {
          path: 'newsDetails',
          name: 'newsDetails',
          meta: {
            requireAuth: false,
            breadcrumbName: '新闻详情'
          },
          component: newsDetails
        }]
      }, {
        path: 'serviceGuide',
        meta: {
          requireAuth: false,
          breadcrumbName: '服务指南'
        },
        component: serviceGuide,
        children: [{
          path: '',
          name: 'serviceGuideDefault',
          component: serviceGuideDefault
        }, {
          path: 'serviceIssueList',
          name: 'serviceIssueList',
          meta: {
            requireAuth: false,
            breadcrumbName: '服务指南问题列表'
          },
          component: serviceIssueList
        }, {
          path: 'serviceIssueDetails',
          name: 'serviceIssueDetails',
          meta: {
            requireAuth: false,
            breadcrumbName: '服务指南问题详情'
          },
          component: serviceIssueDetails
        }, {
          path: 'serviceIssueSearch',
          name: 'serviceIssueSearch',
          meta: {
            requireAuth: false,
            breadcrumbName: '服务指南问题检索'
          },
          component: serviceIssueSearch
        }]
      }, {
        path: 'pBookDetails',
        name: 'pBookDetails',
        meta: {
          requireAuth: false,
          breadcrumbName: '图书详情'
        },
        component: pBookDetails
      }, {
        path: 'pBookSearch',
        name: 'pBookSearch',
        meta: {
          requireAuth: false,
          breadcrumbName: '书目检索'
        },
        component: pBookSearch
      }, {
        path: 'activityCenter',
        name: 'activityCenter',
        meta: {
          requireAuth: false,
          breadcrumbName: '活动中心'
        },
        component: activityCenter
      }, {
        path: 'eventDetails',
        name: 'eventDetails',
        meta: {
          requireAuth: false,
          breadcrumbName: '活动详情'
        },
        component: eventDetails
      }, {
        path: 'commonPage',
        name: 'commonPage',
        meta: {
          requireAuth: false,
          breadcrumbName: '拓展主题'
        },
        component: commonPage
      }]
    }, {
        path: '/eBook',
        name: '',
        meta: {
          requireAuth: false,
          breadcrumbName: '首页'
        },
        component: eBook,
        children: [{
          path: '',
          name: 'eBookDefault',
          component: eBookDefault
        }, {
            path: 'bookClassification',
            meta: {
              requireAuth: false,
              breadcrumbName: '资源分类'
            },
            component: bookClassification,
            children: [{
              path: '',
              name: 'bookDefault',
              component: bookDefault
            }, {
              path: 'bookClassificationList',
              name: 'bookClassificationList',
              meta: {
                requireAuth: false,
                breadcrumbName: '中国文学'
              },
              component: bookClassificationList
            }]
          },{
            path: 'myBookshelf',
            name: 'myBookshelf',
            meta: {
              requireAuth: true,
              breadcrumbName: '我的书架'
            },
            component: myBookshelf
          }, {
            path: 'eBookSearch',
            name: 'eBookSearch',
            meta: {
              requireAuth: false,
              breadcrumbName: '电子书检索'
            },
            component: eBookSearch
          }, {
            path: 'recommendedPast',
            meta: {
              requireAuth: false,
              breadcrumbName: '每周推荐查看往期'
            },
            component: recommendedPast,

            children: [{
              path: '',
              name: 'recommendedPastDefault',
              component: recommendedPastDefault,
            },{
              path: 'recommended',
              name: 'recommended',
              meta: {
                requireAuth: false,
                breadcrumbName: '每周推荐'
              },
              component: recommended,
              }]
          }, {
            path: 'eBookDetails',
            name: 'eBookDetails',
            meta: {
              requireAuth: false,
              breadcrumbName: '图书详情'
            },
            component: eBookDetails
          }, {
            path: 'weiWeek',
            name: 'weiWeek',
            meta: {
              requireAuth: false,
              breadcrumbName: '微周刊'
            },
            component: weiWeek
          }, {
            path: 'digitalReadingList',
            name: 'digitalReadingList',
            meta: {
              requireAuth: false,
              breadcrumbName: '排行榜'
            },
            component: digitalReadingList
          }, {
            path: 'eBookCommonPage',
            name: 'eBookCommonPage',
            meta: {
              requireAuth: false,
              breadcrumbName: '拓展主题'
            },
            component: eBookCommonPage
          }
        ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
      if (Vue.prototype.ls.getItem('loginUserInfo')) {
          next();
      }
      else {
        // console.log(to);
        // console.log(from);
        // console.log(next);
        // 如果被拦截，会跳转到首页，并且携带需要登录的标记login
        if (to.matched[0]) {
          next({
            path: to.matched[0].path,
            query: {
              login: Vue.prototype.utils.guid()
            }
          });
        } else {
          next({
            path: 'index',
            query: {
              login: Vue.prototype.utils.guid()
            }
          });
        }
      }
  }
  else {
      next();
  }
});

export default router;