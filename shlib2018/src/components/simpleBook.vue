<!-- 简单书籍介绍：封面+标题+类型+阅读进度 -->
<template>
  <div class="simplebook" :title="bookinfo.title">
      <div class="cover">
          <img v-bind:src="bookinfo.cover ? bookinfo.cover : defaultCover" alt="">
      </div>
      <div class="about">
          <h3 class="title">{{bookinfo.title}}</h3>
          <p class="type" v-if="bookinfo.type">{{bookinfo.type}}</p>
          <p class="pace" v-if="bookinfo.pace">{{bookinfo.pace}}</p>
      </div>
  </div>
</template>
<script>
export default {
    name: "simpleBook",

    data() {
        return {
            defaultCover: 'http://e.library.sh.cn/elib.jpg'
        }
    },

    props: ['bookinfo'],

    methods: {

    }
}
</script>
<style lang="less" scoped>
.simplebook {
    .cover {
        width: 100%;
        // width: 161px;
        box-shadow: 0 0 35px rgba(0, 0, 0, .15);
        
        img {
            display: inline-block;
            width: 100%;
            height: 200px;
            object-fit: cover;
            @media only screen and (max-width: 767px) {
                // width: 100%;
                height: 120px;
            }
        }
    }
    .about {
        .title {
            font-size: 18px;
            color: #333333;
            margin: 20px 0 8px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-height: 25px;
            @media only screen and (max-width: 767px) {
                font-size: 13px;
                margin: 10px 0 2px 0;
                min-height: 18px;
            }
        }
        .type, .pace {
            font-size: 12px;
            color: #959CA5;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .pace {
            @media only screen and (max-width: 767px) {
                color: #BAA37D;
            }
        }
    }
}
</style>