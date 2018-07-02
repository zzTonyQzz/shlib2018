<!-- tab -->
<template>
  <ul class="tab-menu clearfix" :class="flex">
    <li v-for="(item, index) in menuList" :key="item.tabName">
      <button
        class="tab-inner"
        :class="{active: tabActive === index}"
        :disabled="tabActive === index"
        @click="changeStatus(index)"
      >
        {{item.tabName}}<span class="tab-count" v-if="item.count">{{item.count}}</span>
      </button>
    </li>
  </ul>
</template>

<script>
/** 
 * [tabMenu tab切换]
 * 
 *  props(接收参数)
 *    menuList => 可切换列表
 *      tabName => tab名
 * 
 *  Events(抛出事件)
 *    changeStatus => 切换事件, 返回当前所选tab的index
 */
let self = null; // 自定义变量存储实例this

export default {
  name: "tabMenu",

  data () {
    return {
      tabActive: this.defaultActive
    };
  },

  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    menuList: {
      type: Array,
      default () {
        return [];
      }
    },
    customerClass: {
      type: String,
      default: ''
    }
  },

  created () {
    self = this;
  },

  computed: {
    flex () {
      let tabMenuLen = self.menuList.length;
      return [`flex-column-${tabMenuLen}`, self.customerClass || ''];
    }
  },

  methods: {
    changeStatus (index) {
      self.tabActive = index;

      // 抛出当前点击事件的index
      self.$emit('currentActive', index);
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";
  
  .tab-menu {

    &.e-book-search {
      border-bottom: 1px solid #eee;

      .tab-inner {
        top: -3px;
      }
    }

    > li {
      position: relative;
      float: left;
      width: 50%;
      text-align: center;

      + li {
        &:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          .size(2px; 20px);
          margin-top: -10px;
          background-color: #999;
          opacity: .7;
        }
      }
    }

    .tab-inner {
      display: inline-block;
      position: relative;
      height: 68px;
      color: #999;
      border-bottom: 2px solid transparent;
      outline: none;

      &:hover,
      &.active {
        color: #4474ac;
        border-bottom-color: #4474ac;
      }
    }

    // ================= @Media ===================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      height: 68px;
      line-height: 68px;
      border-bottom: 1px solid #EEEEEE;
      .tab-inner {
        font-size: 18px;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      height: 34px;
      line-height: 34px;
      border-bottom: 1px solid #eee;

      li {
        +li {
          &:before {
            .size(3px / 2; 14px);
            margin-top: -7px;
          }
        }
      }

      .tab-inner {
        @mobilePadding: 5px / 2;

        top: 0;
        max-height: 34px;
        padding-right: @mobilePadding;
        padding-left: @mobilePadding;
        border-bottom-width: 1px;
      }
    }
  }

  // Less loop
  .column-loop(@n, @i:1) when (@i <= @n) {
    .flex-column-@{i} {
      > li {
        width: 100% / @i;
      }
    }
    .column-loop(@n, (@i + 1));
  }

  .column-loop(5);
</style>