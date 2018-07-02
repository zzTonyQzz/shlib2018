<!-- 活动中心页面使用（小图版） -->
<template>
  <div class="activity-lists clearfix">
    <!-- 活动照片 -->
    <span class="activity-photo">
      <img class="img-responsive ac-img"
        :src="activityObj.cover"
        :alt="activityObj.title">
    </span>
    <!-- 活动信息 -->
    <div class="activity-info">
      <h3 class="activity-title">
        <span class="activity-type" 
              :class="setDiffType(activityObj.type)">{{activityObj.type}}</span>{{activityObj.title}}</h3>
      <!-- 举办单位 场地 时间 -->
      <div class="activity-content">
        <div class="content-details activity-sponsor">{{activityObj.organizers}}</div>
        <div class="content-details activity-location">{{activityObj.location}}</div>
        <div class="content-details activity-timer"><span class="ac-timer">{{activityObj.time}}</span></div>
      </div>

      <!-- 关注按钮 -->
      <button class="focus-btn focus" v-show="!activityObj.isFocus" @click.prevent="focusOn(activityObj.id)"><i class="add-focus"></i>关注</button>
      <button class="focus-btn focused" v-show="activityObj.isFocus" @click.prevent="focusOff(activityObj.id)"><i class="iconfont icon-correct"></i>已关注</button>
    </div>
  </div>
</template>

<script>
import { activityCenter } from "../server/api"; // 活动中心接口
let self = null; // 自定义变量存储实例this

export default {
  name: "activitySmall",

  data () {
    return {
      // isFocus: false // 是否已关注
      isLogin: this.ls.getItem('loginUserInfo') ? true : false,
    };
  },

  props: {
    activityObj: {
      type: Object,
      default () {
        return {};
      }
    }
  },

  created () {
    self = this;
  },

  components: {
    
  },

  computed: {},

  mounted () {},

  methods: {
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
    goToDetail (nid) {
      this.$router.push({
        name: 'eventDetails',
        query: {
          event: nid
        }
      });
    },
    focusOn (id) {
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
        this.activityObj.isFocus = true;
        this.$emit('focus-on');
      }).catch((error) => {
        console.log(error);
      });
    },
    focusOff (id) {
      activityCenter.removeMyEvents(id).then(() => {
        this.activityObj.isFocus = false;
        this.$emit('focus-off');
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  .activity-lists {
    display: block;
    position: relative;
    color: #959ca5;

    > .activity-info {
      height: 100%;
    }

    > .activity-photo {
      float: left;
      .ac-img {
        height: 100%;
        object-fit: cover;
      }
    }

    // 活动标题
    .activity-title {
      width: 100%;
      margin-top: -3px;
      margin-bottom: 0;
      color: #333;
      font-weight: normal;
    }

    // 三种活动类型
    .activity-type {
      float: right;
      text-align: center;
      border-width: 1px;
      border-style: solid;
      .border-radius(3px);
    }

    // 活动类型
    .activity-content {
      // position: absolute;
      // bottom: -4px;
    }

    // ================ 三种活动类型 ================
    @exhibitionColor: #4bc3ce;  // 展览
    @trainColor: #f6a623;       // 培训
    @lectureColor: #5390d7;     // 讲座

    .type-exhibition {  // 展览
      color: @exhibitionColor;
      border-color: @exhibitionColor;
    }

    .type-train { // 培训
      color: @trainColor;
      border-color: @trainColor;
    }

    .type-lecture { // 讲座
      color: @lectureColor;
      border-color: @lectureColor;
    }
    // ================== End ========================

    // ===================== @Media =====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      @photoWidth: 139px;

      height: 86px;

      // 活动图片
      > .activity-photo {
        .size(@photoWidth; 86px);
        overflow: hidden;
      }

      // 活动内容
      .activity-info {
        max-width: 320px;
        display: block;
        margin-left: 139px;
        position: relative;
        // margin-left: @photoWidth;
        padding-left: 20px;
        font-size: 14px;
      }

      // 活动标题
      .activity-title {
        display: inline-block;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      // 三种活动类型
      .activity-type {
        .size(34px; 19px);
        margin-top: 3px;
        margin-left: 10px;
        font-size: 12px;
      }

      // 活动举办信息
      .activity-content {
        > .content-details {
          // margin-top: 7px;
        }
      }
      .activity-sponsor {
        min-height: 20px;
      }
      .activity-timer {
        padding-right: 70px;
        height: 24px;
        line-height: 24px;
        .ac-timer {
          display: inline-block;
          line-height: 12px;
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      @photoSize: 132px;

      > .activity-photo {
        .size(@photoSize; 82px);
        border-radius: 3px;
        overflow: hidden;
      }

      .activity-info {
        margin-left: @photoSize + 10;
        font-size: 12px;
      }

      .activity-title {
        width: ~"calc(100%)";
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .activity-type {
        .size(32px; 19px);
        margin-left: 5px;
        font-size: 12px;
      }

      .content-details {
        margin-top: 2px;
      }
      .activity-sponsor {
        min-height: 20px;
      }
      .activity-timer {
        padding-right: 65px;
        height: 24px;
        line-height: 24px;
        .ac-timer {
          display: inline-block;
          line-height: 12px;
        }
      }
    }

    // Pad - V
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      @photoSize: 150px;
      @itemHeight: 94px;

      height: @itemHeight;

      > .activity-photo {
        .size(@photoSize; @itemHeight);
      }

      .activity-info {
        display: block;
        padding-left: 15px;
        margin-left: @photoSize;
      }

      .activity-title {
        max-height: 42px;
        font-size: 15px;
        overflow: hidden;
      }

      .activity-content {
        font-size: 13px;

        > .content-details {
          margin-top: 0;
        }
      }
    }
  }

  // 关注按钮
  .focus {
    @focusColor: #4573ab;

    &:hover,
    &:focus {
      background-color: @focusColor;
      color: #fff;

      > .add-focus {
        &:before, &:after {background-color: #fff;}
      }
    }

    &-btn {
      position: absolute;
      right: 0;
      bottom: 0;
      color: @focusColor;
      font-size: 14px;
      border: 1px solid @focusColor;
      background: none;
      .border-radius(3px);

      // ================== @Media =================
      // PC | Pad
      @media only screen and (min-width: 768px) {
        padding: 4px 4px;

        > .iconfont {
          font-size: 7px;
        }

        .add-focus {
          .vertical-align(2px);
        }
      }

      // Mobile
      @media only screen and (max-width: 767px) {
        padding: 3px 6px 4px 5px;
        font-size: 12px;

        .add-focus {
          .vertical-align(1px);
        }
      }

      // 已关注
      &.focused {
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
    }

    > .add-focus {
      position: relative;
      display: inline-block;
      .square(7px);
      margin-right: 9px;

      &:before, &:after {
        content: '';
        position: absolute;
        background-color: @focusColor;
      }

      &:before {
        .size(7px; 1px);
        top: 50%;
        left: 50%;
        margin-top: -1px / 2;
        margin-left: -3px;
      }

      &:after {
        .size(1px; 7px);
      }
    }
  }
</style>