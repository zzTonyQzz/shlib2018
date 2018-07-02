<!-- loading -->
<template>
  <div class="component-loading">
    <div class="ball-clip-rotate"></div>
  </div>
</template>

<script>
let self = null; // 自定义变量存储实例this

export default {
  name: "loading",

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
  @import "../css/less/common";

  .ball-clip-rotate {
    .ball-clip-rotate();
  }
</style>