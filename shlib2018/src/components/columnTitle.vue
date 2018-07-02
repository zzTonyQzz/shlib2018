<!-- 栏目大标题 -->
<template>
  <div class="component-title">
    <h2 class="column-title" :class="customerClass"><span>{{columnTitle}}</span></h2>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "columnTitle",

  data () {
    return {
    };
  },

  props: {
    columnTitle: {
      type: String,
      default: '栏目标题'
    },
    customerClass: {
      type: String,
      default: ''
    }
  },

  created () {
    self = this;
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang="less" scoped>
  @import "../css/less/common";

  .column-title {
    text-align: center;
    font-weight: normal;

    > span {
      display: inline-block;
      position: relative;
      color: #333;

      @gutter: 20px;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        .size(@gutter; 1px);
        background-color: #333;
        transform: translateY(-50%);
      }

      &:before {left: -@gutter;}
      &:after {right: -@gutter;}
    }

    // ====================== @Media =====================
    // PC | Pad
    @media only screen and (min-width: 768px) {
      margin-top: 40px;
      margin-bottom: 36px;

      &.about-class {
        margin-top: 26px;
        margin-bottom: 26px;
        
        > span {
          font-size: 18px;
        }
      }

      > span {
        padding-right: 11px;
        padding-left: 11px;
        font-size: 22px;
      }
    }

    // Mobile
    @media only screen and (max-width: 767px) {
      margin-top: 23px;
      margin-bottom: 16px;

      &.about-class {
        margin-top: 9px;
        margin-bottom: 0;
        
        > span {
          font-size: 14px;
        }
      }

      > span {
        @gutter: 8px;
      
        font-size: 18px;

        padding-right: @gutter;
        padding-left: @gutter;

        &:before, &:after {
          width: 10px;
        }

        &:before {left: -@gutter;}
        &:after {right: -@gutter;}
      }
    }
  }
</style>