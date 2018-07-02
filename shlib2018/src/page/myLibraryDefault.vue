<!-- 我的图书馆  -->
<template>
  <div class="myLibrary-default">
    <div class="user-info-container">
      <div class="container">
        <div class="row">
          <div class="user-info">
            <span class="user-avatar"><img :src="userInfo.avatar" alt="用户头像" class="img-responsive"></span>
            <div class="user-info-details">
              <p class="user-name-feature">
                <b class="user-name">{{userInfo.nameCN}}</b>
                <span class="feature-tag" v-for="item in userInfo.cardFN" :key="item">{{item}}</span>
              </p>

              <p class="nick-name" v-if="userInfo.namePY">
                <i class="iconfont icon-author"></i>{{userInfo.namePY}}
              </p>
              <p class="card-no" v-if="userInfo.cardNO">
                <i class="iconfont icon-card"></i>{{userInfo.cardNO}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 用户菜单 -->
    <div class="user-menu">
      <div class="container">
        <div class="component-menuInner row" ref="menuList">
          <router-link class="col-sm-2 col-xs-3" :to="{path: 'fullMenu/currentLending?isActive=0'}">
            <i class="iconfont icon-yijietushu"></i>
            <p>已借图书/续借</p>
          </router-link>
          <router-link class="col-sm-2 col-xs-3" :to="{path: 'fullMenu/currentLending?isActive=1'}">
            <i class="iconfont icon-history"></i>
            <p>借书历史</p>
          </router-link>
          <a class="col-sm-2 col-xs-3" :href="externalLinks.BookYuYueUrl" target="_blank">
            <i class="iconfont icon-book-appointment"></i>
            <p>图书预约</p>
          </a>
          <router-link :to="{path: 'myLibrary/recommendedBook'}" class="col-sm-2 col-xs-3">
            <i class="iconfont icon-tushutuijian"></i>
            <p>图书推荐</p>
          </router-link>
          <a class="col-sm-2 col-xs-3" href="javascript:;">
            <i class="iconfont icon-eRead"></i>
            <p>电子阅读器预约</p>
          </a>
          <a class="col-sm-2 col-xs-3" :href="shlibBorrower" target="_blank">
            <i class="iconfont icon-wodeyueduzhangdan"></i>
            <p>我的悦读账单</p>
          </a>
          <a class="col-sm-2 col-xs-3" :href="externalLinks.BasicInfoUrl" target="_blank">
            <i class="iconfont icon-setting"></i>
            <p>设置</p>
          </a>
          <a class="col-sm-2 col-xs-3" href="javascript:;" @click="loginOut">
            <i class="iconfont icon-login-out"></i>
            <p>退出</p>
          </a>
        </div>
      </div>
    </div>

    <!-- 退出当前账号 -->
    <div class="loginout-container" v-show="isLoginOut" @click="hideLoginoutModal">
      <div class="login-out-modal">
        <div class="modal-content">您将退出此次登录，是否确定？</div>
        <div class="action-btn"><button class="btn" @click="hideLoginoutModal">取消</button><button class="btn loginout" @click="confirmLoginout">退出</button></div>
      </div>
    </div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

let borrowUrl = 'http://yuedu.library.sh.cn:8081/2017/person/index.php/pc?ShLibBorrower=';

// api request
import { userprofiles, logOut } from '../server/api';

export default {
  name: "component_name",

  data () {
    return {
      defaultAvatar: '/static/images/user-avatar.png',
      userInfo: {},
      externalLinks: JSON.parse(this.ls.getItem('exList')) || {BookYuYueUrl: '',BasicInfoUrl: ''},
      shlibBorrower: `${borrowUrl}${this.ls.getItem('shlibBorrower')}`,
      isLoginOut: false // 显示退出登录modal
    };
  },

  created () {
    self = this;
  },

  components: {},

  computed: {},

  mounted () {
    self.getUserInfo();

    let exLinks = self.ls.getItem('exList');
    if (!exLinks) {
      self.getUserCenter();
    }
  },

  methods: {
    /** 
     * [getUserInfo 获取用户信息]
     */
    getUserInfo () {
      let uat = self.ls.getItem('UAT');
      userprofiles.getUserProfiles({uat})
      .then(res => {
        if (!res || self.utils.isEmpty(res)) return;

        self.userInfo = {
          avatar: res.avatar || self.defaultAvatar,
          nameCN: res.nameCn,
          namePY: res.namePinyin,
          cardNO: res.shlibCardNo,
          cardFN: getCardFn(res.shlibCardFunction)
        };
      });

      // 卡功能列表
      function getCardFn (cardFnStr) {
        let type = {
          '0A':'普通阅览',
          '0B':'普通外借',
          '0C':'参考阅览',
          '0D':'参考外借'
        };
        let cd = cardFnStr.split('###');
        let temp = [];
        cd.map((item) => {
          temp.push(type[item])
        })
        // temp.push('普通阅览')
        return temp;
      }
    },
    /** 
     * [getUserCenter 获取用户中心功能链接]
     */
    getUserCenter () {
      let uat = self.ls.getItem('UAT');
      userprofiles.getUserCenter({uat})
      .then(res => {
        self.externalLinks = res;
        self.ls.setItem('exList', JSON.stringify(res));
      });
    },
    /** 
     * [loginOut 退出登录]
     */
    loginOut () {
      self.isLoginOut = true;
    },
    confirmLoginout () {
      // 退出当前用户及其他操作
      self.hideLoginoutModal();
      logOut();
      self.commitEvent("changeshowLoginIcon", false);
      self.openNewPage({
        path: '/index'
      });
      // this.shlibBorrower = 'javascript:;'
      // this.externalLinks.BasicInfoUrl = 'javascript:;';
      // this.externalLinks.BookYuYueUrl = 'javascript:;';
      // self.ls.removeList(['UAT', 'URT', 'loginUserInfo']);
    },
    hideLoginoutModal () {
      self.isLoginOut = false;
    },
    /**
    goToCurrntLendingHistory () { // 借阅历史
      let isLogin = self.ls.getItem('loginUserInfo');
      // 未登录 - 打开登录Modal
      if ( !isLogin ) {
        self.commitEvent('changeshowLoginModal', true);
        self.commitEvent('changeTempPath', {
          path: '/index/fullMenu/currentLending',
          query: {isActive: 1}
        });
        self.utils.modalOpenEvent(true);
        return;
      }
      self.openNewPage({
        path: '/index/fullMenu/currentLending',
        query: {isActive: 1}
      });
    },
    goToCurrntLendingDone () {  // 已借阅图书
      let isLogin = self.ls.getItem('loginUserInfo');
      // 未登录 - 打开登录Modal
      if ( !isLogin ) {
        self.commitEvent('changeshowLoginModal', true);
        self.commitEvent('changeTempPath', {
          path: '/index/fullMenu/currentLending',
          query: {isActive: 0}
        });
        self.utils.modalOpenEvent(true);
        return;
      }
      self.openNewPage({
        path: '/index/fullMenu/currentLending',
        query: {isActive: 0}
      });
    },
    goToRecommendedBook () {  // 图书推荐
      let isLogin = self.ls.getItem('loginUserInfo');
      // 未登录 - 打开登录Modal
      if ( !isLogin ) {
        self.commitEvent('changeshowLoginModal', true);
        self.utils.modalOpenEvent(true);
        return;
      }
      self.openNewPage({
        path: '/index/myLibrary/recommendedBook'
      });
    }
    */
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  .myLibrary-default {

    // ================= @Media ====================
    // PC
    @media only screen and (min-width: 768px) {
      margin-top: -40px;
    }
  }
  
  .user-info-container {
    background-color: #5390d7;
    color: #fff;
    text-align: center;

    .breadcrumb {
      position: absolute;
      
      a {color: #fff;}
    }

    // 头像
    .user-avatar {
      .border-radius(50%);
      background-color: rgba(255, 255, 255, .23);
      overflow: hidden;
    }

    // 用户详细信息
    .user-info-details {
      text-align: left;

      > p {
        margin-top: 0;
        line-height: 21px;
      }
    }

    // 卡功能标签
    .feature-tag {
      padding: 2px 4px 1px;
      background-color: rgba(255, 255, 255, .13);
      border-radius: 2px;
      margin-right: 3px;
    }
    
    // 垂直居中Less类
    .verticalMiddle() {
      display: inline-block;
      .vertical-align(middle);
    }

    // ===================== @Media =====================
    // PC | Pad
    @media only screen and (min-width: 768px) {

      @avatarSize: 100px;
      
      .user-info {
        @userInfoHeight: 240px;

        .verticalMiddle();
        height: @userInfoHeight;
        line-height: @userInfoHeight; // 居中inline-block, 子元素必须设置line-height
        font-size: 0; // 去除inline-block间隙, 子元素必须设置font-size
      }

      .user-avatar {
        .verticalMiddle();
        .square(@avatarSize);
      }

      .user-info-details { // 必须设置font-size
        .verticalMiddle();
        padding-left: 28px;
        font-size: 14px;

        > p {
          margin-bottom: 4px;
          
          &.card-no {margin-bottom: 0;}

          &.nick-name {margin-top: 12px;}

          .iconfont{
            margin-right: 10px;
          }

          .icon-card {
            font-size: 13px;
          }
        }
      }

      // 用户名
      .user-name {
        padding-right: 5px;
        font-size: 24px;
        font-weight: normal;
      }

      // 卡功能标签
      .feature-tag {
        font-size: 12px;
        .vertical-align(2px);
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      .user-info {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90px;
      }

      .user-info-details {
        padding-left: 33px / 2;
        font-size: 12px;

        > p {
          margin-bottom: 0;
        }

        .user-name-feature {
          margin-bottom: 5px;
        }

        .iconfont {
          margin-right: 7px;
          font-size: 14px;
        }

        .icon-card {font-size: 12px;}
      }

      .user-avatar {
        display: inline-block;
        .square(123px / 2);
      }

      .user-name {
        padding-right: 5px;
        font-size: 17px;
      }

      .feature-tag {
        padding: 1px 3px 0 4px;
        font-size: 11px;

        &:not(:last-child) {
          margin-right: 4px;
        }
      }
    }
  }

  // 退出登录Modal
  .loginout-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, .3);
  }

  .login-out-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #333;
    text-align: center;
    background-color: #fff;
    overflow: hidden;

    > .action-btn {
      border-top: 1px solid #d9d9d9;

      > button {
        width: 50%;
        color: #959ca5;
      }

      .loginout {
        border-left: 1px solid #d9d9d9;
        color: #4877ae;
      }
    }

    // =================== @Media ====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      .size(360px; 160px);
      margin-top: -80px;
      margin-left: -180px;
      .border-radius(8px);
      font-size: 18px;

      > .modal-content {
        height: 109px;
        line-height: 109px;
      }

      > .action-btn {
        > button {
          line-height: 49px;
          font-size: 18px;
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      width: 85%;
      max-width: 319px;
      transform: translate3d(-50%, -50%, 0);
      font-size: 15px;
      line-height: 24px;
      .border-radius(4px);

      > .modal-content {
        padding-top: 30px;
        padding-bottom: 18px;
      }

      > .action-btn {
        > button {
          line-height: 44px;
          font-size: 16px;
        }
      }
    }
  }
</style>