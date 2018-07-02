<!-- 加载更多按钮 -->
<template>
  <div class="loadmore">
      <div class="load" @click="loadMore(currIndex)" v-show="currIndex<total&&load==false">加载更多</div>
      <div class="loading" v-show="load">加载...</div>
      <div class="nomore" v-show="currIndex>=total&&load==false">没有更多数据</div>
  </div>
</template>

<script>
export default {
  name: "loadMore",

  data() {
      return {
          currIndex: this.current
      }
  },

  props: ['current', 'total', 'load'],  // 当前页码/总页码/是否加载数据

  methods: {
    loadMore (index) {  // 加载更多
        // let total = this.total;
        if (this.currIndex >= this.total) {
            return;
        }
        this.currIndex = index + 1;
        this.$emit('more-data', this.currIndex);
    }
  }
}
</script>

<style lang="less" scoped>
.loadmore {
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
  color: #999999;
  .load {
    cursor: pointer;
    margin: 0 auto;
    width: 90px;
    height: 30px;
    line-height: 30px;
    border: solid 1px #C1C1C1;
    border-radius: 3px;
  }
  .loading {
    height: 30px;
    line-height: 30px;
  }
  @media only screen and (min-width: 767px) {
    display: none;
  }
}
</style>
