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
import tabs1 from "./tabs1";
import tabs2 from "./tabs2";
import tabs3 from "./tabs3";
import tabs4 from "./tabs4";
import tabs5 from "./tabs5";
export default {
  name: "Hdgk",
  props: {},
  data() {
    return {
      active: 0,
      currentView: "tabs1",
      tabs: [
        {
          type: "竞赛类",
          view: "tabs1",
          img: "../../static/img/banner.png"
        },
        {
          type: "服务类",
          view: "tabs2",
          img: "../../static/img/banner4.png"
        },
        {
          type: "夏校类",
          view: "tabs3",
          img: "../../static/img/banner8.png"
        },
        {
          type: "科研项目类",
          view: "tabs4",
          img: "../../static/img/banner6.png"
        },
        {
          type: "兴趣类",
          view: "tabs5",
          img: "../../static/img/banner7.png"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    }
  },
  components: {
    tabs1,
    tabs2,
    tabs3,
    tabs4,
    tabs5
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
