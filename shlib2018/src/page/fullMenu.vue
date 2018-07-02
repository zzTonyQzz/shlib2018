<!-- 全部菜单 -->
<template>
  <div class="component-fullMenu">
    <!-- 面包屑 -->
    <bread-crumb></bread-crumb>
    
    <router-view></router-view>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "fullMenu",

  data () {
    return {
    };
  },

  created () {
    self = this;
  },

  components: {},

  computed: {},

  mounted () {
    self.commitEvent('changeIsHideFullFooter', true);
  },

  methods: {}
}

</script>
<style lang="less" scoped>
  
</style>