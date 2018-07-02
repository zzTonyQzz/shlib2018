<!-- 问答页搜索关键字 -->
<template>
  <div class="searchkey">
      <div class="searchform">
          <i class="iconfont icon-search2"></i>
          <input class="searchinput" type="text" placeholder="搜索关键字" v-model="keys" @keyup="search($event)">
      </div>
      <span class="searchbotton" @click="search($event)">检索</span>
  </div>
</template>

<script>
export default {
  name: "searchKey",

  data() {
      return {
          keys: this.words || ''
      }
  },

  props: ['words'],

  methods: {
      search (event) {
        if(event.keyCode === 13 || event.type === "click") {
            let k = this.keys.trim();
            // if (k) {
                // 根据需求修改，现在处输入空格不会发送消息
            //     this.$emit('search-key', k);
            // }
            this.$emit('search-key', k);
        }
      }
  }
}
</script>

<style lang="less" scoped>
    .searchkey {
        position: relative;
        line-height: 50px;
        .searchform {
            display: inline-block;
            width: 100%;
            position: relative;
            color: #999999;
            .iconfont {
                position: absolute;
                left: 16px;
                top: 0;
                font-size: 18px;
            }
            .searchinput {
                width: 100%;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                border-radius: 20px;
                background-color: #EEF1F3;
                padding: 0 40px 0 50px;
                border-style: none;
                @media only screen and (max-width: 767px) {
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    border-radius: 15px;
                }
            }
            @media only screen and (max-width: 767px) {
                padding-right: 40px;
            }
        }
        .searchbotton {
            cursor: pointer;
            color: #666666;
            position: absolute;
            top: 0;
            right: 0;
            display: none;
            @media only screen and (max-width: 767px) {
                display: inline;
            }
        }
    }
</style>
