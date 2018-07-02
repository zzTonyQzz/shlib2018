<!-- 借阅图书的弹窗 -->
<template>
  <div class="slide-container" v-show="showLoginModal">
    <div class="prop-content" :class="slidePosition">
      <div class="prop-top">
        <i class="iconfont icon-close2 hidden-xs" @click="closeModal"></i>
        <EasyScrollbar
          :barOption="barOption"
        >
          <div class="prop-main">
            <h4>榜单类型</h4>
          <ul class="prop-type">
            <li v-for="(item, index) in billBordType" :key="index">
              <label><input type="radio" @click="getValue(item.clc, item.lan)" name="top" class="select-type"><span>{{item.name}}</span></label>
            </li>
          </ul>
          <h4>年榜/月榜</h4> 
          <ul class="prop-time">
            <li>  
              <label>
                <input type="radio" v-model="timeTop" value="Y" name="bill" class="select-type">
                <span>年榜</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" v-model="timeTop" value="M" name="bill" class="select-type">
                <span>月榜</span>
              </label>
            </li>
          </ul>
          <div class="prop-time" v-show="showYears">
            <h4>时间选择</h4>
            <h4>{{getCurrSelect.pageUse}}</h4>
          </div>
          <h4 class="prop-year" v-show="showYears">年份</h4> 
          <ul class="prop-time" v-show="showYears">
            <li v-for="year in yearList" :key="year">
              <label>
                <input type="radio" v-model="yearSelect" :value="year" name="year" class="select-type">
                <span>{{year}}</span>
              </label>
            </li>
          </ul>
          <h4 v-show="showMonths">月份</h4>
          <ul class="prop-time" v-show="showMonths">
            <li v-for="month in 12" :key="month">
              <label>
                <input
                  type="radio"
                  name="month"
                  class="select-type"
                  v-model="monthSelect"
                  :value="month"
                >
                <span>{{month + '月'}}</span>
              </label>
            </li>
          </ul>
          </div>
        </EasyScrollbar>
      </div>
      <div class="prop-button">
        <button class="reset" @click="resetSelect">重置</button>
        <button class="confirm" @click="confirmSelect">确定</button>
      </div>
    </div>
    <!-- cover -->
    <div class="prop" v-show="showLoginModal" @click="closeModal"></div>
  </div>
  
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "libProp",

  data() {
    return {
      showLoginModal: false, // 是否显示登录Modal
      billBoard: "", // 榜单类型
      timeTop: "", // 年榜 or 月榜
      yearSelect: this.utils.currDates().y, // 所选年份(默认)
      monthSelect: this.utils.currDates().m - 1, // 所选月份(默认上一个月)

      // 年份区间段
      agoIntervals: 2,
      yearList: [2017, 2018],

      /**
       * [easyscroll vue 滚动条插件]
       * https://www.waitig.com/在vue项目中使用easyscroll滚动条插件.html
       * https://garveyzuo.github.io/easyscroll.github.io/#/
       */
      barOption: {
        barColor: "#d7dce0",
        barWidth: 3,
        barMarginRight: 1,
        horizrailenabled: false,
        railColor: "transparent"
      }
    };
  },

  props: {
    billBordType: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  created() {
    self = this;
    self.defaultBillBoard();
  },

  computed: {
    /**
     * [getCurrSelect 获取当前选择年月]
     *    this.timeTop === 'Y' => 获取年份排行榜
     *                 === 'M' => 获取年月排行榜
     * @return {String} like 年(2018) / 年月年月(201802)
     */
    getCurrSelect() {
      let y = `${this.yearSelect}`,
        m = `${this.utils.zeroPadding(this.monthSelect)}`;
      return {
        pageUse: this.timeTop === "Y" ? `${y}年` : `${y}年${m}月`,
        apiUse: this.timeTop === "Y" ? `${y}` : `${y}${m}`
      };
    },
    /**
     * [showYears 是否显示年份列表]
     *    this.timeTop 不为空即显示 年份列表
     */
    showYears() {
      // console.log(this.timeTop);
      return this.timeTop ? true : false;
    },
    /**
     * [showMonths 是否显示月份列表]
     *    this.timeTop === 'Y' => 不显示 月份 列表
     *                 === 'M' => 显示 月份 列表
     * @return {Boolean} true - 显示月份列表
     *                   false - 隐藏月份列表
     */
    showMonths() {
      return this.showYears && this.timeTop === "M" ? true : false;
    },
    /**
     * [slidePosition 侧滑显示筛选Modal]
     */
    slidePosition() {
      return this.showLoginModal ? "slide-left" : "slide-right";
    }
  },

  methods: {
    /**
     * [defaultBillBoard ]
     */
    defaultBillBoard() {
      // 默认选择 `总榜`
      let [defaultList] = self.billBordType;
      self.billBoard = `${defaultList.clc},${defaultList.lan}`;
    },
    /**
     * [getValue 获取选择value值]
     * @param {String} clc 分类
     * @param {String} lan 语言
     * @return {String} "分类,语言" => like 'A,chi'
     */
    getValue(clc, lan) {
      // console.log(`${clc},${lan}`);
      // return `${clc},${lan}`;
      self.billBoard = `${clc},${lan}`;
    },
    /**
     * [closeModal 关闭登录Modal]
     */
    closeModal() {
      self.showLoginModal = false;
      self.utils.modalOpenEvent(false);
    },
    /**
     * [resetSelect 重置选择]
     */
    resetSelect() {
      self.defaultBillBoard();
      self.timeTop = "";
      self.yearSelect = new Date().getFullYear();
      self.monthSelect = new Date().getMonth();
    },
    /**
     * [confirmSelect 确定按钮的事件]
     */
    confirmSelect() {
      self.closeModal();
      console.log(self.billBoard)
      console.log(self.getCurrSelect.apiUse)
      self.$emit("confirm-select", {
        boardType: self.billBoard,
        boardDate: self.getCurrSelect.apiUse
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../css/less/common";

.prop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: @zIndex + 998;
  background-color: rgba(0, 0, 0, 0.2);
}

.prop-content {
  position: fixed;
  z-index: @zIndex + 999;
  width: 90%;
  background-color: #fff;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  .prop-top {
    h4 {
      font-weight: normal;
    }
  }

  ul {
    overflow: hidden;

    > li {
      float: left;

      span {
        display: block;
        color: @fontC3;
        text-align: center;
        background-color: #eef1f3;
        cursor: pointer;
      }
    }

    .select-type {
      position: absolute;
      left: -9999em;
      opacity: 0;

      &:checked + span {
        background: @bl1;
        color: #fff;
      }
    }
  }

  .prop-time {
    overflow: hidden;

    h4 {
      float: left;

      &:first-child {
        margin-right: @m20;
      }
    }
  }

  .prop-button {
    text-align: center;

    button {
      color: @bl1;
      background: transparent;
      outline: none;

      &:last-child {
        background-color: @bl1;
        color: #fff;
      }
    }
  }

  // =============== @Media ================
  // PC
  @media only screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    max-width: 1000px;
    max-height: 700px;
    border-radius: 8px;
    transform: translate(-50%, -50%);

    .prop-button {
      margin-bottom: @m30;

      button {
        .size(120px; 40px);
        line-height: 36px;
        text-align: center;
        font-size: 16px;
        border: 1px solid @bl1;
        margin-right: @m10;
        border-radius: 4px;
      }
    }

    // 滚动条高度
    // .easy-scrollbar {
    //   // height: 640px;
    //   // overflow-y: scroll;
    // }

    .prop-top {
      padding: 30px 48px;

      .prop-main {
        height: 550px;
      }
      h4 {
        margin-top: 16px;
        margin-bottom: 18px;
        font-size: 22px;
      }
    }

    .icon-close2 {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 13px;
      color: #bec5c9;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        opacity: 0.7;
      }
    }

    ul {
      > li {
        span {
          min-width: 92px;
          height: 41px;
          line-height: 31px;
          padding: 5px @m20;
          margin-right: 10px;
          margin-bottom: 10px;
          font-size: 16px;
          border-radius: 4px;
        }
      }
    }
  }

  // Mobile
  @media only screen and (max-width: 767px) {
    top: 0;
    right: 0;
    height: 100%;
    width: 80%;

    &.slide-right {
      transform: translateX(100%);
    }

    &.slide-left {
      transform: translateX(0);
    }

    .prop-top {
      height: 100%;
      padding: 0 8px @headerHeight + 15;

      h4 {
        margin-top: 19px;
        font-size: 14px;
        color: #666;
      }

      .easy-scrollbar {
        height: 100%;
        margin-right: -15px;
        overflow-y: scroll;
      }
    }

    ul {
      > li {
        margin-bottom: 10px;

        &:not(:last-child) {
          margin-right: 8px;
        }

        span {
          padding: 6px;
          font-size: 12px;
          border-radius: 4px;
        }
      }
    }

    .prop-time {
      h4 {
        margin-bottom: 0;
      }
    }

    .prop-button {
      position: absolute;
      bottom: 0;
      .size(100%; 55px);
      background-color: #fff;
      font-size: 0; // 去除 inline-block 3px 间隙, 子元素必须设置font-size

      > button {
        .size(50%; 100%);
        padding: 0;
        font-size: 16px;
        color: #666;
        line-height: 55px;
        border-top: 1px solid #d6dadc;

        &.confirm {
          border-top-color: @bl1;
        }
      }
    }
  }
}
</style>