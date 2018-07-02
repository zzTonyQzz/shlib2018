<!-- 图书期刊分类组件：封面（左侧）+标题数量（右侧） -->
<template>
  <div class="booksort clearfix" :title="sortinfo.name">
      <div class="cover">
          <img v-bind:src="sortinfo.cover ? sortinfo.cover : defaultCover" alt="">
      </div>
      <div class="about">
          <h3 class="title">{{sortinfo.name}}</h3>
          <p class="type">{{sortinfo.cnt}}本</p>
      </div>
  </div>
</template>
<script>
export default {
    name: "bookSort",

    data() {
        return {
            defaultCover: 'http://e.library.sh.cn/elib.jpg'
        }
    },

    props: ['sortinfo'],

    methods: {

    }
}
</script>
<style lang="less" scoped>
.booksort {
    display: flex;
    align-items: center;
    width: 100%;
    .cover {
        float: left;
        // width: 100%;
        width: 50%;
        box-shadow: 0 0 35px rgba(0, 0, 0, .15);
        img {
            display: inline-block;
            width: 100%;
            height: 170px;
            object-fit: cover;
            @media only screen and (max-width: 767px) {
                display: inline-block;
                width: 100%;
                height: 100px;
            }
        }
    }
    .about {
        float: left;
        width: 50%;
        padding-left: 20px;
        @media only screen and (max-width: 767px) {
            padding-left: 15px;
        }
        .title {
            font-size: 18px;
            font-weight: 400;
            color: #333333;
            margin: 20px 0 8px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            @media only screen and (max-width: 767px) {
                font-size: 15px;
                margin: 10px 0 4px 0;
            }
        }
        .type {
            font-size: 12px;
            color: #BAA37D;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            @media only screen and (max-width: 767px) {
                color: #959CA5;
            }
        }
    }
}
</style>