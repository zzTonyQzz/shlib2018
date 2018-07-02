<!-- 图书分类 -->
<template>
  <div class="container">
    <bread-crumb></bread-crumb>
    <router-view></router-view>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "bookClassification",

  data () {
    return {
    };
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
</style>