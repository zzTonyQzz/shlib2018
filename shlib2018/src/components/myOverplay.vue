<template>
  <bm-overlay ref="customOverlay" :class="{sample: true, isActive}" pane="labelPane" @draw="draw">
    <div class="row title">
      <div class="title-item col-xs-10">
        <h3>{{text.libname}}</h3>
      </div>
      <div class="title-item col-xs-2 icon" @click="handleClick" @touchend="handleClick">
        <i class="iconfont icon-close2"></i>
      </div>
    </div>
    <p><i class="iconfont icon-xiaofangzi"></i>{{text.address}}</p>
    <p><i class="iconfont icon-telphone"></i>{{text.tel}}</p>
    <p><i class="iconfont icon-clock-normal"></i>{{text.opentime}}</p>
  </bm-overlay>
</template>

<script>
let self = null;
export default {
  data() {
    return {
      isActive: true,
      width: this.$store.state.isMobile ? 360 : 450
    };
  },

  created() {
    self = this;
  },

  props: ["text", "position", "active"],

  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload();
      },
      deep: true
    },
    active(newVal, oldVal) {
      this.isActive = newVal;
    }
  },

  methods: {
    handleClick() {
      // global.alert("Well done.");
      this.$emit('init-overplay');
      this.isActive = true;
    },
    draw({ el, BMap, map }) {
      const { lng, lat } = this.position;
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat));
      el.style.left = pixel.x - (self.width / 2) + "px";
      el.style.top = pixel.y - 205 + "px";
    }
  }
};
</script>

<style  lang="less" scoped>
.sample {
  position: absolute;
  width: 450px;
  padding: 15px;
  text-align: left;
  background-color: #fff;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, .05);
  border-radius: 4px;
  @media only screen and (max-width: 767px) {
    width: 360px;
  }

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -28px;
    width: 0;
    height: 0;
    margin-left: -14px;
    border-style: solid dashed dashed;
    border-color: #fff transparent transparent;
    border-width: 14px;
  }

  &.isActive {
    display: none;
    background: rgba(0, 0, 0, .75);
    color: #fff;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }

  .icon {
    text-align: right;

    i {
      color: #bec5c9;
      font-size: 13px;
    }
  }

  .title {
    margin: 0 0 10px 0;
    padding: 0 0 10px 0;
    border-bottom: 1px solid #bec5c9;

    > .title-item {
      padding: 0;
    }
  }

  p {
    margin: 5px 0;

    i {
      color: #4474ac;
      margin-right: 10px;
    }
  }
}
</style>