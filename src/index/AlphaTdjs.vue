<template>

  <div class="content">
    <div class="banner">
      <img src="../../static/img/banner.png" alt class="banner">
    </div>
    <div class="title01 waper">
      <p class="zn">团队角色</p>
      <p class="xian"></p>
    </div>
    <ul class="shenfen waper">
      <li
        v-for="(tab,index) in tabs"
        :key="index"
        @click="toggle(index,tab.view)"
        :class="{active:active==index}"
      >{{tab.type}}</li>
    </ul>
    <component :is="currentView"></component>
  </div>
</template>
<script>
import tab1 from "./tab1";
import tab2 from "./tab2";
import tab3 from "./tab3";
export default {
  name: "AlphaTdjs",
  props: {},
  data() {
    return {
      active: 0,
      currentView: "tab1",
      tabs: [
        {
          type: "导师",
          view: "tab1"
        },
        {
          type: "顾问",
          view: "tab2"
        },
        {
          type: "教授",
          view: "tab3"
        }
      ]
    };
  },
  computed: {},

  methods: {
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    }
  },
  components: {
    tab1,
    tab2,
    tab3
  }
};
</script>

<style scoped lang="scss">
.waper {
  width: 1280px;
  margin: 0 auto;
}
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
.content {
  .title01 {
    text-align: center;
    padding-top: 100px;
    .zn {
      height: 37px;
      font-size: 28px;
      font-family: Segoe UI;
      font-weight: bold;
      line-height: 37px;
      color: rgba(51, 51, 51, 1);
      opacity: 1;
    }
    .xian {
      width: 51px;
      height: 0px;
      border: 3px solid rgba(254, 51, 57, 1);
      opacity: 1;
      margin: 0 auto;
      margin-top: 15px;
    }
  }
  .shenfen {
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding:0;
    margin-top: 110px;
    background: url(../../static/img/tdjs06.png) no-repeat center;
    li {
      width: 130px;
      height: 130px;
      cursor: pointer;
      background-image: url(../../static/img/tdjs04.png);
      background-position: center;
      background-size: 130px;
      text-align: center;
      line-height: 124px;
      font-size: 24px;
      font-family: Segoe UI;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      &:hover {
        background-image: url(../../static/img/tdjs05.png);
        background-position: center;
        background-size: 130px;
        border-radius: 50%;
        box-sizing: border-box;
      }
    }
    .active {
      background-image: url(../../static/img/tdjs05.png);
      background-position: center;
      background-size: 130px;
      border-radius: 50%;
      box-sizing: border-box;
    }
  }
  .zhanshi {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin-top: 97px;
    margin-bottom: 117px;
    .iit {
      border: 1px dashed #707070;
    }
    .iits {
      padding-left: 102px;
      display: flex;
      align-items: center;
      .xiobiao {
        font-size: 18px;
        font-family: Segoe UI;
        font-weight: 600;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
      }
      .xian {
        display: block;
        width: 32px;
        height: 0px;
        border: 2px solid rgba(254, 51, 57, 1);
        margin-top: 9px;
      }
      .wenb {
        font-size: 14px;
        font-family: Segoe UI;
        font-weight: 400;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
        margin-top: 27px;
      }
    }
  }
}
</style>
