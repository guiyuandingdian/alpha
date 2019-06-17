<template>
  <div>
    <div class="banner">
      <img
        :src="tab.img"
        v-for="(tab,index) in tabs"
        :key="index"
        @click="toggle(index,tab.view)"
        :class="{active:active==index}"
      >
      <i></i>
    </div>
    <ul class="shenfen waper">
      <li
        v-for="(tab,index) in tabs"
        :key="index"
        @click="toggle(index,tab.view)"
        :class="{active:active==index}"
      >
        <span>
          {{tab.type}}
          <i></i>
        </span>
      </li>
    </ul>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import pm1 from "./pm1";
import pm2 from "./pm2";
export default {
  name: "Yxpm",
  props: {},
  data() {
   return {
      active: 0,
      currentView: "pm1",
      tabs: [
        {
          type: "综合排名",
          view: "pm1",
          img: "../../static/img/banner14.png"
        },
        {
          type: "文理学院排名",
          view: "pm2",
          img: "../../static/img/banner15.png"
        }
      ]
    };
  },
  watch: {},
  methods: {
      toggle(i, v) {
      this.active = i;
      this.currentView = v;
    }
  },
  components: {
      pm1,
      pm2
  }
};
</script>

<style scoped lang="scss">
.waper {
  width: 1280px;
  margin: 0 auto;
}
.banner {
  position: relative;
  height: 400px;
  i {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.4);
  }
}
.banner img {
  display: none;
}
.banner .active {
  display: block;
  position: absolute;
  width: 1920px;
  height: 400px;
  top: 0;
  left: 50%;
  margin-left: -960px;
}
.shenfen {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  li {
    padding: 0 54px;
    border-left: 1px solid #707070;
    cursor: pointer;
    &:nth-child(1) {
      border-left: 0;
    }
    &:hover {
      span {
        i {
          display: block;
          width: 100%;
          height: 3px;
          position: absolute;
          left: 0;
          bottom: -13px;
          background: rgba(254, 51, 57, 1);
        }
      }
    }
    span {
      font-size: 28px;
      font-family: Segoe UI;
      font-weight: bold;
      line-height: 37px;
      color: rgba(51, 51, 51, 1);
      display: inline-block;
      position: relative;
    }
  }
  .active {
    span {
      i {
        display: block;
        width: 100%;
        height: 3px;
        position: absolute;
        left: 0;
        bottom: -13px;
        background: rgba(254, 51, 57, 1);
      }
    }
  }
}
</style>
