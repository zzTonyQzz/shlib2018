<!-- 菜单列表组件 -->
<template>
  <div class="component-menuInner">
    <div class="container">
      <div class="row white-bg">
        <template v-for="(item) in menu">
          <!-- 菜单列表 -->
          <router-link
            class="col-sm-2 col-xs-3"
            :target="item.target"
            :to="{path: item.externalLinks}" 
            :class="setDiffClass" :key="item.menuName" 
            @click.native="menuClickAction(item.type, item.isExternal, item.externalLinks)"
            @mouseover.native="menuHoverAction(item.type, item.isExternal, item.externalLinks)"
          >
            <i class="iconfont" :class="item.icon"></i>
            <p>{{item.menuName}}</p>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
/** 
 * [menuList 组件使用说明]
 * 
 * props(接收参数)
 *  menu =>  菜单列表
 *    icon => 菜单icon图标
 *    target => 是否本页面打开, '' => 本页面, '_blank' => 新标签页
 *    menuName => 菜单名
 *    isExternal => 是否打开外链, 本站以外url
 *    externalLinks => 外链url
 *    type => 非外链所操作类型, 只有当前菜单为 `非外链` 时, 才有类型值, 否则为 `null`
 * 
 * Events(抛出事件)
 *  menuClickAction => 菜单点击事件
 *  menuHoverAction => 菜单鼠标hover事件
 */

let self = null; // 自定义变量存储实例this

export default {
  name: "menuList",

  data () {
    return {
    };
  },

  props: {
    menu: {
      type: Array,
      default () { // Object / Array 必须为工厂函数返回默认值
        return [];
      }
    }
  },

  created () {
    self = this;
  },

  components: {},

  computed: {
    setDiffClass () {
      let menuLen = self.menu.length,
          menuCount = self.$store.state.isMobile ? 4 : 6,
          remainder = menuLen % menuCount;
      return remainder === 0 ? 'lastAll' : `last${remainder}`;
    }
  },

  methods: {
    menuClickAction (type, isExternal, links) {
      if (type) {
        self.$emit('menuClickAction', type);
        return;
      };

      if (isExternal) {
        location.href = links;
      }
    },
    menuHoverAction (type) {
      if (type) {
        self.$emit('menuHoverAction', type);
        return;
      };
    }
  }
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  // 用户菜单
  .component-menuInner {
    
    // =============== 全部菜单 ================
    &.menu1 {margin-top: 0;}

    &.menu1 .iconfont {
      color: #f7b366;
    }

    &.menu2 .iconfont {
      color: #63bfce;
    }

    &.menu3 .iconfont {
      color: #5cc8a8;
    }
    // ================= End ===================

    a {
      color: #666;
      text-align: center;
      border-bottom: 1px solid #e0e5e8;

      .iconfont {
        color: #4daada;
      }

      p {
        margin-top: 0;
        margin-bottom: 0;
        .text-overflow();
      }

      // 去除边框
      &.last5:nth-last-child(-n + 5),
      &.last4:nth-last-child(-n + 4),
      &.last3:nth-last-child(-n + 3),
      &.last2:nth-last-child(-n + 2),
      &.last1:nth-last-child(-n + 1) {
        border-bottom: 0;
      }
    }

    // ====================== @Media ======================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      margin-top: 43px;

      + .component-menuInner {margin-top: 20px;}

      a {
        padding-top: 36px;
        padding-bottom: 32px;
        vertical-align: top;
        font-size: 14px;

        &:hover {
          opacity: .8;
        }

        .iconfont {
          font-size: 34px;
        }

        p {
          margin-top: 12px;
        }

        // PC 端为每排6个
        &.lastAll:nth-last-child(-n + 6) {
          border-bottom: none;
        }
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {

      + .component-menuInner {margin-top: 10px;}

      a {
        padding: 22px 5px 19px;
        font-size: 12px;

        // Mobile 端为每排4个
        &.lastAll:nth-last-child(-n + 4) {
          border-bottom: none;
        }

        .iconfont {
          font-size: 19px;
        }

        p {
          margin-top: 9px;
        }
      }
    }

    // Pad
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      padding-right: @padMargin;
      padding-left: @padMargin;
    }
  }
</style>