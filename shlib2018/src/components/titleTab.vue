<!-- 顶部标题Tab切换（横向） -->
<template>
  <div class="tabs">
      <ul class="clearfix">
          <li v-for="(tab, index) in tablist" :style="tabWidth">
              <span :class="{active: curr==index}" @click="tabChange(index)">{{tab.title}}</span>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "titleTab",
  data () {
      return {
          curr: this.currenttab,    //当前标签index
          toggle: this.cantoggle || {edit: false}   // 标签是否可以切换{edit: boolean}
      }
  },
  props: ["tablist", "currenttab", "cantoggle"], // 标签列表，当前标签index，标签是否可以切换
  computed: {
      tabWidth () {     // 计算标签宽度
          let w = (100 / this.tablist.length) + '%';
          return {width: w};
      }
  },
  methods: {
      tabChange (index) {   // 切换tab标签
    //   console.log(this.toggle.edit);
          if (this.toggle.edit) {
              return;
          }
          if (index != this.curr) {
              this.curr = index;
              this.$emit('tab-change', index);
            //   console.log('Tab Index: ' + index);
          }
      }
  }
}
</script>
<style lang="less" scoped>
.tabs {
    text-align: center;
    height: 66px;
    border-bottom: 1px solid #EEEEEE;
    @media only screen and (max-width: 767px) {
        height: 38px;
    }
    ul {
        display: inline-block;
        width: 750px;
        height: 100%;
        padding-left: 0;
        @media only screen and (max-width: 767px) {
            width: 100%;
            height: 100%;
        }
        li {
            position: relative;
            list-style: none;
            box-sizing: border-box;
            float: left;
            height: 100%;
            line-height: 22px;
            padding: 0px 20px;
            + li {
                &:before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 2px;
                    height: 20px;
                    margin-top: -10px;
                    background-color: #999;
                    opacity: .7;
                    @media only screen and (max-width: 767px) {
                        height: 14px;
                        margin-top: -7px;
                    }
                }
            }
            span {
                display: inline-block;
                height: 100%;
                line-height: 66px;
                font-size: 18px;
                color: #999999;
                cursor: pointer;
                @media only screen and (max-width: 767px) {
                    font-size: 14px;
                    line-height: 38px;
                }
                &:hover {
                    color: #4474AC;
                    border-bottom: 2px solid #4474AC;
                }
            }
            .active {
                color: #4474AC;
                border-bottom: 2px solid #4474AC;
            }
        }
    }
}
</style>
