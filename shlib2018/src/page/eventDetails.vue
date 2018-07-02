<!-- 活动详情 -->
<template>
  <div class="container">
    <bread-crumb></bread-crumb>
    <!-- 标题 -->
    <div class="eventDetail">
      <div class="eventTitle">
        <div class="top clearfix">
            <span class="title">{{event.title}}</span>
            <span class="type" 
            :class="setDiffType(event.type)">{{event.type}}</span>
        </div>
        <div class="msg">
          <div class="location"><i class="iconfont icon-location"></i>{{event.location}}</div>
          <div class="time"><i class="iconfont icon-clock-normal"></i>{{event.time}}</div>
        </div>
        <button class="btn unfocus" v-show="!event.isFocus" @click.prevent="focusOn(event.id)"><i class="add"></i>关注</button>
        <button class="btn focus" v-show="event.isFocus" @click.prevent="focusOff(event.id)"><i class="iconfont icon-correct"></i>已关注</button>
      </div>
      <!-- 内容 -->
      <div class="eventContent">
        <div class="contentimg" align="center">
          <img :src="event.img" alt="">
        </div>
        <div class="content">
          <p>{{event.content}}</p>
        </div>
      </div>
    </div>
    <next-previous @go-list="goToActivityList" @go-previous="goToPrevious" @go-next="goToNext"></next-previous>
    <!-- 加入提示信息 -->
    <div class="detail-note" v-show="showNote">
      <span class="detail-msg">{{noteMsg}}</span>
    </div>
  </div>
</template>

<script>
import nextPrevious from "../components/nextPrevious";
import { activityCenter } from "../server/api";
let self = null; // 自定义变量存储实例this

export default {
  name: "eventDetails",

  data () {
    return {
      isLogin: this.ls.getItem('loginUserInfo') ? true : false,
      event: {
        id: this.$route.query.event,
        title: '',
        type: '',
        isFocus: true,
        location: '',
        time: '',
        content: '',
        isLogin: this.ls.getItem('loginUserInfo') ? true : false,
      },
      idList: JSON.parse(this.ls.getItem('myEvents')) || [],
      next: 0,  // 下一个id
      previous: 0,   // 上一个id
      loading: true,
      showNote: false,
      noteMsg: ''
    };
  },

  created () {
    self = this;
  },

  components: {
    nextPrevious
  },

  computed: {},

  mounted () {
    this.initDetail();
  },

  methods: {
    initDetail () {
      let id = this.$route.query.event;
      let f = this.$route.query.f;
      let t = this.$route.query.t;
      if (f === '2' && t === '2') {
        // 表示从'我的活动'页跳转过来
        this.getEventDetails = this.getEventDetailsByID;
      } else {
        this.getEventDetails = this.getEventDetailsNavi;
      }
      if (id) {
        this.getEventDetails(id);
      } else {
        this.$router.push({
          name: 'activityCenter',
          query: {isActive: 0}
        });
      }
    },
    setDiffType (type) {
      let diffClass = '';
      switch (type) {
        case '展览':
          diffClass = 'type-exhibition';
          break;
        case '培训':
          diffClass = 'type-train';
          break;
        case '讲座':
          diffClass = 'type-lecture';
        default: break;
      }

      return diffClass;
    },
    getEventDetails () {},
    getEventDetailsByID (id) {  // 不带导航,返回一个值,从我的活动页跳转到详情时，使用此方法，使用localstorage存储的id列表导航
      this.loading = true;
      activityCenter.getEventDetailByID(id).then((data) => {
        let res = data.result.datas;
        if (!res.length) {
          return;
        }
        this.DataHandel(id);
        this.event = this.resDataHandel(res[0]);
        this.loading = false;
        window.scrollTo(0,0);
      }).catch((error) => {
        console.log(error);
      });
    },
    getEventDetailsNavi (id) {  // 带导航，返回三个值
      this.loading = true;
      activityCenter.naviEventsInfo(id).then((data) => {
        let res = data.result.datas;
        if (!res.length) {
          return;
        }
        this.event = this.resDataHandel(this.naviDataHandel(id, res));
        this.loading = false;
        window.scrollTo(0,0);
      }).catch((error) => {
        console.log(error);
      });
    },
    resDataHandel (data) {  // 返回数据二次处理,用于展示
      return {
        id: data.id,
        title: data.v1,
        type: data.v5,
        isFocus: data.v8 ? (data.v8 === 'false' ? false : true) : false,  // 判断是否已经关注,
        location: data.v6,
        time: self.utils.timerHandle(data.v3, data.v4),
        img: data.v7,
        content: decodeURIComponent(data.v21).replace(/\+/g, ' ')
      }
    },
    // 非导航接口前后导航数据处理
    DataHandel (id) {
      let i = this.idList.indexOf(id + '');
      // let l = this.idList.length;
      this.previous = this.idList[i - 1] ? this.idList[i - 1] : 'first';
      this.next = this.idList[i + 1] ? this.idList[i + 1] : 'last';
    },
    // 导航接口前后导航数据处理
    naviDataHandel (id, data) {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (id === element.id) {
          if (i === 0) {
            this.previous = 'first';
            this.next = data[1].id;
          }
          if (i === 1) {
            this.previous = data[0].id;
            this.next = data.length > 2 ? data[2].id : 'last';
          }
          return element;
        }
      }
    },
    goToActivityList () {   // 返回活动列表
      // this.$router.push({
      //   name: 'activityCenter',
      //   query: {isActive: 0}
      // });
      if (!this.$route.query.f) {
        // 跳转到首页
        this.$router.push({
          name: 'homePage'
        });
        return;
      }
      if (this.$route.query.f === '2') {
        // 跳转到活动中心页
        this.$router.push({
          name: 'activityCenter',
          query: {
            isActive: this.$route.query.t
          }
        });
      } else {
        this.$router.push({
          name: 'activityCenter',
          query: {isActive: 0}
        });
      }
      // this.$router.go(-1);
    },
    focusOn (id) {  // 关注
      // 判断用户是否登录
      if (!this.isLogin) {
        self.commitEvent('changeshowLoginModal', true);
        self.commitEvent('changeTempPath', {
          path: 'reload'
        });
        self.utils.modalOpenEvent(true);
        return;
      }
      activityCenter.addMyEvents(id).then(() => {
        self.event.isFocus = true;
        // console.log('关注');
      }).catch((error) => {
        console.log(error);
      });
    },
    focusOff (id) { // 取消关注
      activityCenter.removeMyEvents(id).then(() => {
        self.event.isFocus = false;
        // console.log('取消关注');
      }).catch((error) => {
        console.log(error);
      });
    },
    goToNext () { // 上一个
      this.naviByID(this.next);
    },
    goToPrevious () { // 下一个
      this.naviByID(this.previous);
    },
    naviByID (id) {
      if (this.loading) {
        return;
      }
      if (id === 'first') {
        self.showMsg('已经是第一条了');
        return;
      }
      if (id === 'last') {
        self.showMsg('已经是最后一条了');
        return;
      }
      if (!this.$route.query.f) {
        this.$router.replace({
          query: {
            event: id
          }
        });
      }
      if (this.$route.query.f === '2') {
        this.$router.replace({
          query: {
            f: this.$route.query.f,
            t: this.$route.query.t,
            event: id
          }
        });
      }
      this.getEventDetails(id);
    },
    showMsg (msg) { // 显示提示信息
      self.noteMsg = msg;
      self.showNote = true;
      let t = setTimeout(() => {
        self.showNote = false;
        clearTimeout(t);
      },2000);
    }
  }
}

</script>
<style lang="less" scoped>
.eventTitle {
  position: relative;
  padding-bottom: 15px;
  border-bottom: 1px solid #E0E5E8;
  .top {
    font-size: 22px;
    margin-right: 80px;
    .title {
      // margin-right: 80px;
      // display: inline-block;
      float: left;
      max-width: calc(85%);
      margin-top: 0;
      margin-bottom: 0;
      height: 29px;
      line-height: 29px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @media only screen and (max-width: 767px) {
        font-size: 16px;
      }
    }
    .type {
      // display: inline-block;
      float: left;
      width: 34px;
      height: 19px;
      line-height: 19px;
      // margin-bottom: 3px;
      margin-top: 5px;
      margin-left: 10px;
      font-size: 12px;
      text-align: center;
      border-width: 1px;
      border-style: solid;
      border-radius: 3px;
      border-color: #959CA5;
    }
    @exhibitionColor: #4bc3ce;  // 展览
    @trainColor: #f6a623;       // 培训
    @lectureColor: #5390d7;     // 讲座

    .type-exhibition {  // 展览
      // border-width: 1px;
      color: @exhibitionColor;
      border-color: @exhibitionColor;
    }

    .type-train { // 培训
      // border-width: 1px;
      color: @trainColor;
      border-color: @trainColor;
    }

    .type-lecture { // 讲座
      // border-width: 1px;
      color: @lectureColor;
      border-color: @lectureColor;
    }
  }
  @media only screen and (max-width: 767px) {
    margin-top: 20px;
    padding-bottom: 0;
    border-bottom: none;
    .top {
      margin-right: 0;
    }
  }
  .msg {
    font-size: 14px;
    color: #959CA5;
    margin-top: 18px;
    .location {
      margin-bottom: 8px;
    }
    .iconfont {
      font-size: 12px;
      color: #888888;
      padding-right: 10px;
    }
    @media only screen and (max-width: 767px) {
      margin-top: 12px;
      .location {
        margin-bottom: 4px;
      }
    }
  }
  .btn {
    position: absolute;
    font-size: 14px;
    background: none;
    padding: 4px 12px;
    -webkit-appearance: none;
    border-style: solid;
    border-width: 1px;
    @media only screen and (min-width: 768px) {
      top: 0;
      right: 0;
      border-radius: 3px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 12px;
      padding: 3px 6px 3px 5px;
      vertical-align: 0;
      right: 0;
      bottom: 0;
      border-radius: 0;
    }
  }
  // 已关注
  .focus {
    color: #64C1CF;
    border-color: #64C1CF;
    > .icon-correct {
      display: inline-block;
      font-size: 7px;
      transform: scale(.7);

      &:before {
        content: "\e64d";
      }
    }
    &:hover,
    &:focus {
      background-color: #64C1CF;
      color: #fff;
    }
  }
  // 未关注
  .unfocus {
    color: #4573ab;
    border-color: #4573ab;
    .add {
      position: relative;
      display: inline-block;
      width: 7px;
      height: 7px;
      margin-right: 9px;
      vertical-align: 2px;
      &:before {
        content: '';
        position: absolute;
        background-color: #4573ab;
        width: 7px;
        height: 1px;
        top: 50%;
        left: 50%;
        margin-top: -0.5px;
        margin-left: -3px;
      }
      &:after {
        content: '';
        position: absolute;
        background-color: #4573ab;
        width: 1px;
        height: 7px;
      }
      @media only screen and (max-width: 767px) {
        vertical-align: 0;
      }
    }
    &:hover,
    &:focus {
      background-color: #4573ab;
      color: #fff;
      > .add {
        &:before, &:after {background-color: #fff;}
      }
    }
  }
}
.eventContent {
  margin-top: 20px;
  .contentimg {
    img {
      max-width: 100%;
    }
  }
  .content {
    margin-top: 15px;
    p {
      text-indent: 2em;
      font-size: 14px;
      color: #666;
      line-height: 28px;
    }
  }
  @media only screen and (max-width: 767px) {
      margin-left: -15px;
      margin-right: -15px;
      height: calc(~'100vh - 265px');
      overflow: scroll;
    }
}
.detail-note {
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    .detail-msg {
      padding: 8px;
      font-size: 16px;
      color: #fff;
      border-radius: 4px;
      background-color: rgba(95, 87, 87, 0.5);
    }
  }
</style>