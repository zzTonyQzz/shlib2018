<!-- 搜索结果为0时显示 -->
<template>
  <div class="nomore">
      <div class="nonore-ico"></div>
      <div class="nomore-words">试着搜索其它检索词</div>
  </div>
</template>
<script>
export default {
  name: "noMore",
  data () {return {}}
}
</script>
<style lang="less" scoped>
.nomore{
    text-align: center;
    .nonore-ico {
        display: inline-block;
        width: 167px;
        height: 260px;
        background: url('/static/images/no-more.png') no-repeat center;
        background-size: 100%;
        @media only screen and (max-width: 767px) {
            width: 100px;
            height: 140px;
        }
    }
    .nomore-words {
        margin-top: 20px;
        font-size: 20px;
        color: #666666;
        @media only screen and (max-width: 767px) {
            font-size: 13px;
        }
    }
}
</style>