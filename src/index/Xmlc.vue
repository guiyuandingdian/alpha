<template>
  <div>
    <div class="banner">
      <img src="../../static/img/banner.png" alt class="banner">
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
    <div class="xianss"></div>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import tabs1 from "./tabb1";
import tabs2 from "./tabb2";
import tabs3 from "./tabb3";
export default {
  name: "Xmlc",
  props: {},
  data() {
    return {
      active: 0,
      currentView: "tabs1",
      tabs: [
        {
          type: "留学申请基本流程",
          view: "tabs1"
        },
        {
          type: "申请材料策略",
          view: "tabs2"
        },
        {
          type: "服务时间规划范例",
          view: "tabs3"
        }
      ]
    };
  },
  methods: {
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    }
  },
  components: {
    tabs1,
    tabs2,
    tabs3
  }
};
</script>

<style scoped lang="scss">
.banner {
  font-size: 0;
  line-height: 0;
  position: relative;
  height: 400px;
  img {
    position: absolute;
    width: 1920px;
    height: 400px;
    left: 50%;
    margin-left: -960px;
  }
}
.xianss {
  width: 1280px;
  height: 0px;
  border: 3px solid rgba(112, 112, 112, 1);
  margin: 0 auto;
  margin-top: 97px;
  margin-bottom: 20px;
}
.waper {
  width: 1280px;
  margin: 0 auto;
}
.shenfen {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  li {
    padding: 0 20px;
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
