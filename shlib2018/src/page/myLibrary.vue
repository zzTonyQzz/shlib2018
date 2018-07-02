<!-- 我的图书馆 -->
<template>
  <div class="component-myLibrary">
    <!-- 面包屑导航 -->
    <bread-crumb :color="eachColor"></bread-crumb>

    <!-- 用户信息 -->
    <router-view></router-view>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "myLibrary",

  data () {
    return {
      isNextPage: false
    };
  },

  created () {
    self = this;
  },

  computed: {
    eachColor () {
      return this.isNextPage ? '#666' : '#fff';
    }
  },

  destroyed () {
    self.commitEvent('changeIsHideFullFooter', false);
  },

  mounted () {
    self.commitEvent('changeIsHideFullFooter', true);
  },

  methods: {}
}

</script>
<style lang="less" scoped>
  
</style>