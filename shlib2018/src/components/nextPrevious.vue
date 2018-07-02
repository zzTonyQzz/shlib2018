<!--  前后导航，上一个，下一个，返回列表 -->
<template>
  <div class="navigation">
      <div class="previous" @click="previous()"><i class="iconfont icon-arrow-left2"></i>{{navObj.previous}}</div>
      <div class="tolist" @click="goToList()">返回列表</div>
      <div class="next" @click="next()"><i class="iconfont icon-arrow-right2"></i>{{navObj.next}}</div>
  </div>
</template>
<script>
export default {
  name: "nextPrevious",
  data () {
      return {}
  },
  props: {
      navObj: {
          type: Object,
          default () {
              return {next: '下一个', previous: '上一个'}
          }
        }
  },
  methods: {
      next () {
          this.$emit('go-next');
      },
      previous () {
          this.$emit('go-previous');
      },
      goToList () {
          this.$emit('go-list');
      }
  }
}
</script>
<style lang="less" scoped>
.navigation {
    margin-top: 40px;
    text-align: center;
    > div {
        display: inline-block;
        cursor: pointer;
    }
    .tolist {
        width: 100px;
        height: 30px;
        border: 1px solid #4573AB;
        border-radius: 2px;
        font-size: 14px;
        color: #4573AB;
        line-height: 30px;
        margin-right: 40px;
        margin-left: 40px;
    }
    .previous {
        color: #666666;
        i {
            float: left;
            margin-right: 10px;
        }
    }
    .next {
        color: #666666;
        i {
            float: right;
            margin-left: 10px;
        }
    }
    @media only screen and (max-width: 767px) {
        .tolist {
            width: 85px;
        }
        .tolist {
            margin-right: 10px;
            margin-left: 10px;
        }
        .previous, .next {
            color: #959CA5;
        }
    }
}
@media only screen and (max-width: 767px) {
    .navigation {
        margin-top: 20px;
        margin-bottom: 10px;
    }
}
</style>
