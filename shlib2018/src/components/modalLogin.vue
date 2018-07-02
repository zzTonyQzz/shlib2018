<!-- 用户登录Modal -->
<template>
  <div class="component-login">
    <div class="modal-container" v-show="showLoginModal">
      <i class="iconfont icon-close2" @click="closeModal"></i>
      <h2 class="modal-title">
        用户登录<a href="http://search1.library.sh.cn/mylibrary/html/help/login_help.htm" target="_blank" class="site-help"><i class="iconfont icon-help"></i>帮助</a>
      </h2>
      <ul class="user-login-list">
        <li class="clearfix">
          <input type="text" v-model="username" placeholder="请输入用户名/卡号"><i class="iconfont icon-user"></i>
        </li>
        <li class="clearfix">
          <input type="password" v-model="password" placeholder="请输入密码"><i class="iconfont icon-password"></i>
        </li>
        <li class="has-verify-code clearfix">
          <span class="verify-code-container"><img class="verify-code" :src="verifyCodeImage" @click="getVerifyCode"/></span><input type="text" v-model="verifyCode" placeholder="请输入验证码" @keyup.enter="loginAction" ref="yzm"><i class="iconfont icon-verify-code"></i>
        </li>
      </ul>
      <div class="login-action">
        <a href="https://passport.library.sh.cn:4430/rs/register/getpass_index" target="_blank" class="find-pwd">找回密码</a>
        <label for="rememberUser" class="label-checked"><input type="checkbox" id="rememberUser" v-model="remember"><i class="iconfont icon-unselected2"></i>记住我一周</label>
      </div>
      <div class="btn-wrap">
        <button class="btn btn-primary" @click="loginAction">登录</button>
      </div>
      <div class="other-action">
        <a :href="lossAndFindLink" target="_blank" class="find-wrap">
          <i class="iconfont icon-missing"></i>挂失/找回
        </a>
        <a :href="`https://passport.library.sh.cn/oauth/authorize?response_type=code&scope=read%20write&client_id=1658887189&redirect_uri=${homePage}/index&state=test&user_type=AA`" class="other-login-model">其他登录方式</a>
      </div>
      <!-- 提示信息 -->
      <div class="modal-note" v-show="showNote">
        <span class="modal-msg">{{noteMsg}}</span>
      </div>
    </div>

    <!-- 遮罩层 -->
    <div class="modal-overlay" v-show="showLoginModal"></div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

// api request
import { tokenHandle, modalLogin, yzmHandle } from "../server/api";

export default {
  name: "modalLogin",

  data () {
    return {
      username: '',         // 用户名 | 卡号
      password: '',         // 密码
      verifyCode: '',       // 验证码
      lossAndFindLink: '',  // 挂失 | 找回url
      remember: false,      // 记住一周
      verifyCodeImage: '/static/images/temp/verify-code.jpg',
      noteMsg: '',      // 登陆框提示信息
      showNote: false,   // 显示登陆框提示框
      // homePage: 'http://www.baidu.com'
      homePage: window.location.origin
    };
  },

  created () {
    self = this;
  },

  components: {},

  computed: {
    showLoginModal () {
      let state = self.$store.state.showLoginModal;
      if (state) {
        self.lossAndFind();
        self.getVerifyCode();
      }
      return state;
    }
  },

  mounted () {
    self.checkThirdPartLogIn();
  },

  methods: {
    closeModal () { // 关闭登录Modal
      if (this.$route.query.login) {
        // 如果当前页面有登录标记，点击关闭登陆框时，清除登录标记
        this.$router.replace({
          query: {}
        });
      }
      self.commitEvent('changeshowLoginModal', false);
      // self.commitEvent('changeTempPath', {
      //   path: '/index/myLibrary'
      // });
      self.utils.modalOpenEvent(false);
    },
    getVerifyCode () { // 获取验证码图片 - 暂缺接口
        yzmHandle.yzmFetch().then((data) => {
            //console.log(data);
            let yzmimg = data;
            if(data.code){
              self.showMsg(data.msg, 4000);
              return false
            }
            if(data.length<100){
              getVerifyCode ();
              return false
            }
            this.verifyCodeImage = yzmimg;
        }).catch((error) => {
            console.warn(error);
        });
    },
      checkYzm () { //
          return new Promise((resolve, reject) => {
              let yzminput = this.verifyCode;
              console.log(yzminput);
              yzmHandle.yzmCheck({value:yzminput}).then((data) => {
                  console.log(data.result);
                  if (data.result === "true") {
                      //console.warn(true);
                      resolve(true)
                  } else {
                      //console.warn(false);
                      this.getVerifyCode();
                      resolve(false)
                  }
              }).catch((error) => {
                  reject(error);
                  console.warn(error);
              });
          });
      },
    /**
     * 第三方登录，检测code，登录
     */
    checkThirdPartLogIn () {
      // let codeIndex = this.$route.path.indexOf("&code");
      // let stateIndex = this.$route.path.indexOf("&state");

      // if (codeIndex !== -1 && stateIndex !== -1) {
      //   let isLogin = self.ls.getItem('loginUserInfo');
      //   if (!isLogin) {
      //     // console.log('reload');
      //     // self.openNewPage('homePage');
      //     let code = window.location.href.slice(codeIndex + 6, stateIndex);
      //     modalLogin.otherLoginMethods(code).then(() => {
      //       // location.reload();
      //       self.openNewPage('homePage');
      //     }).catch(error => {
      //       console.log(error);
      //     })
      //   }
      // }
      function getUrlSearch(key) {
        var reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
        var search = window.location.search.substr(1).match(reg);
        return search ? search[2] : '';
      }
      let code = getUrlSearch('code'),
        state = getUrlSearch('state');
      if (code && state) {
        let isLogin = self.ls.getItem('loginUserInfo');
        if (!isLogin) {
          // console.log('reload');
          // self.openNewPage('homePage');
          modalLogin.otherLoginMethods(code).then(() => {
            // location.reload();
            self.openNewPage('homePage');
          }).catch(error => {
            console.log(error);
          })
        }
      }
    },
    loginAction () { // 登录
      if (!self.checkLogInfo()) {
          self.showMsg('请输入用户名和密码', 4000);
        return;
      }
      
      if (!self.verifyCode) {
          self.showMsg('请输入验证码', 4000);
        return;
      }
      
        self.checkYzm().then((data)=> {
            // 成功訊息 (需要 3 秒)
            console.log("promise done",data);
            //console.log(data);
            if(data==true){
                tokenHandle.getUATURT({
                    username: self.username,
                    password: self.password,
                    tokentype: self.remember ? 'uat_7' : 'uat_1'
                })
                    .then(res => {
                        self.closeModal();
                        // 清空登录信息
                        self.username = '';
                        self.password = '';
                        self.verifyCode = '';
                        self.remember = false;
                        let temp = this.$store.state.tempPath;
                        self.commitEvent("changeshowLoginIcon", true);
                        if (temp.path === 'reload') {
                            location.reload();
                        }else if (temp.path === 'done') {
                            // location.reload();
                        } else {
                            // 登录成功跳转
                            self.openNewPage(temp);
                        }
                    }).catch((error) => {
                    if (error === '13000') {
                        self.showMsg('用户名或密码错误', 4000);
                    }
                });
            }else{
                self.verifyCode = '';
                self.$refs.yzm.focus();
                self.showMsg('验证码有误', 4000);
                return
            }
        }).catch((err)=> {
            // 失敗訊息 (立即)
            //console.log("promise done",err);
            console.log(err)
        });

    },
    lossAndFind () { // 获取挂失 | 找回链接
      // 已获取过不再重新获取
      let lossAndFindUrl = self.ls.getItem('lossAndFindUrl');
      if (lossAndFindUrl) {
        self.lossAndFindLink = lossAndFindUrl;
        return;
      }

      // 初次操作获取链接
      modalLogin.lossAndFind()
      .then(res => {
        self.ls.setItem('lossAndFindUrl', res.LossAndFindUrl);
        self.lossAndFindLink = res.LossAndFindUrl;
      });
    },
    checkLogInfo () { // 检查用户名和密码是否完整
      if (self.username.trim() === '' || self.password.trim() === '') {
        // console.log('请输入完整用户名和密码');
        self.showMsg('用户名和密码不能为空', 2000);
        return false;
      }
      return true;
    },
    showMsg (msg, time) {
      self.noteMsg = msg;
      self.showNote = true;
      let t = setTimeout(() => {
        self.showNote = false;
        clearTimeout(t);
      },time);
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  // Modal半透明遮罩层
  .modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: @zIndex + 9;
    background-color: rgba(0, 0, 0, .2);
  }

  .modal-container {
    @modalHeight: 500px;
    @modalWidth: 452px;

    position: fixed;
    top: 50%;
    z-index: @zIndex + 999;
    background-color: #fff;
    .border-radius(8px);

    .icon-close2 {
      position: absolute;
      top: 9px;
      right: 9px;
      font-size: 13px;
      color: #bec5c9;
      cursor: pointer;
      transition: all .5s;

      &:hover {opacity: .7;}
    }

    > .modal-title {
      position: relative;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 19px;
      color: #333;
      text-align: center;
      overflow: hidden;
      font-weight: normal;

      > .site-help {
        position: absolute;
        right: 0;
        bottom: 0;
        color: #999;
        font-size: 12px;
      }

      .icon-help {
        margin-right: 3px;
        .vertical-align(middle);
      }
    }

    // ==================== @Media =======================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      left: 50%;
      .size(@modalWidth; @modalHeight);
      margin-top: -@modalHeight / 2;
      margin-left: -@modalWidth / 2;
      padding: 47px 36px 53px;

      .icon-close2 {
        top: 18px;
        right: 18px;
      }

      .modal-title {
        font-size: 24px;

        > .site-help {
          bottom: 3px;
          font-size: 14px;
        }

        .icon-help {
          margin-right: 5px;
          vertical-align: -1px;
        }
      }
    }
    
    // Mobile
    @media only screen and (max-width: 767px) {
      right: 20px;
      left: 20px;
      padding: 33px 20px 40px;
      transform: translateY(-50%);
    }
  }

  // ============================= @登录输入 =============================
  .user-login-list {
    margin-top: 15px;
    margin-bottom: 20px;

    > li {
      @height: 43px;

      position: relative;
      height: @height;
      font-size: 14px;
      color: #999;

      > .iconfont {
        position: absolute;
        top: 11px;
        left: 14px;
        font-size: 16px;
        .vertical-align(middle);
      }

      > input {
        .square(100%);
        padding: 12px 14px 11px 40px;
        border: 1px solid #e0e5e8;
        .vertical-align(-3px);
        border-radius: 4px;
        transition: all .5s;

        &:focus {
          border-color: #5390d7;

          + .iconfont {color: #5390d7;}
        }
      }

      + li {margin-top: 15px;}
    }

    // 验证码
    .has-verify-code {
      > input {width: ~"calc(100% - 119px)";}
    }

    .verify-code-container {
      float: right;
      .size(98px; 43px);


      > img {.square(100%);cursor: pointer;}
    }

    // ================ @Media =====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      margin-top: 40px;
      margin-bottom: 34px;

      > li {
        height: 45px;

        + li {margin-top: 20px;}

        .iconfont {
          top: 9px;
          font-size: 20px;
        }

        > input {padding-left: 48px;}
      }

      .verify-code-container {.size(91px; 45px);}
    }
  }

  // ============================= 记住密码 ===========================
  .login-action {
    overflow: hidden;
    line-height: 20px;
    color: #666;
    font-size: 12px;

    // ================== @Media ====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      font-size: 14px;

      .label-checked .icon-unselected2 {
        font-size: 18px;
      }
    }
  }

  .find-pwd {
    float: right;
    color: #666;
  }

  .label-checked {
    > input[type="checkbox"] {
      position: absolute;
      left: -9999px;

      &:checked + .icon-unselected2 {
        color: #5390d7;

        // 选择 `记住我一周` icon
        &:before {
          content: "\e655";
        }
      }
    }

    .icon-unselected2 {
      margin-right: 6px;
      font-size: 15px;
      color: #ccc;
      border-radius: 2px;
      .vertical-align(-1px);
    }
  }

  // ========================= @登录按钮 ======================
  .btn-wrap {
    padding-top: 10px;

    > .btn-primary {
      .size(100%; 44px);
      border: none;
      line-height: 44px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      background-color: #5390d7;
      .border-radius(4px);
      transition: all .5s;

      &:hover {opacity: .8;}
    }

    // ================== @Media ====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      padding-top: 15px;

      > .btn-primary {
        height: 48px;
        line-height: 48px;
        font-size: 18px;
      }
    }
  }

  // ========================= @`其他登录方式` ==========================
  .other-action {
    padding-top: 5px;
    text-align: center;
    font-size: 13px;
    color: #666;

    > a {color: #666;}

    .icon-missing {
      margin-right: 4px;
      color: #888;
    }

    .other-login-model {
      margin-left: 17px;
      color: #4573ab;
      text-decoration: underline;
    }

    // ================== @Media ====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      padding-top: 18px;
      text-align: center;
      font-size: 14px;
    }
  }
  .modal-note {
    position: absolute;
    top: 16px;
    left: 0;
    text-align: center;
    width: 100%;
    .modal-msg {
      padding: 8px;
      font-size: 16px;
      color: #fff;
      border-radius: 4px;
      background-color: rgba(95, 87, 87, 0.5);
    }
  }
</style>