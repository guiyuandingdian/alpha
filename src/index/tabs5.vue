<template>
  <div class="zhanshi">
    <div class="qq waper">
      <div class="zhao">
        <span>
          <i class="z"></i>中影影视传媒实训营
          <i class="r"></i>
        </span>
      </div>
    </div>
    <div class="bjs">
      <div class="center waper">
        <div>
          <img src="../../static/img/xq02.png" alt>
        </div>
        <div class="wenzi">
          <p class="xians"></p>
          <p>I喜欢影视制作的同学可以选择参加中影影视传媒实训营，汇集了由北京电影学院讲师、中央戏剧学院讲师、国家中影基地一线导师亲自授课的包括影视编导、摄影、后期制作等全方位课程内容。</p>
        </div>
      </div>
      <div class="sft waper">
        <div>
          <img src="../../static/img/xq03.png" alt>
          <i></i>
        </div>
        <div>
          <img src="../../static/img/xq04.png" alt>
          <i></i>
        </div>
        <div>
          <img src="../../static/img/xq05.png" alt>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs5",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.waper {
  width: 1280px;
  margin: 0 auto;
}
.qq {
  width: 1280px;
  height: 400px;
  background-image: url(../../static/img/xq01.png);
  margin-bottom: 20px;
}
.zhao {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  position: relative;
  color: #fff;
  span {
    display: inline-block;
    font-size: 32px;
    font-family: Segoe UI;
    font-weight: 600;
    line-height: 400px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin: 0 auto;
    position: relative;
    i {
      position: absolute;
      display: block;
      width: 150px;
      height: 1px;
      background: #fff;
      top: 200px;
    }
    .z {
      left: -160px;
    }
    .r {
      right: -160px;
    }
  }
  .qw {
    font-size: 28px;
    font-family: Segoe UI;
    font-weight: bold;
    line-height: 37px;
    padding-top: 77px;
  }
  .xianss {
    width: 51px;
    height: 3px;
    background: #fff;
    border-radius: 1px;
    margin: 0 auto;
    margin-top: 13px;
    margin-bottom: 68px;
  }
  .tx1 {
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    margin-bottom: 13px;
  }
  .tx2 {
    font-size: 14px;
    margin-bottom: 13px;
  }
}
.bjs {
  background: url(../../static/img/ky06.png);
  background-position: top;
  background-repeat: repeat-x;
}
.center {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  padding-top: 80px;
  margin-bottom: 80px;

  .wenzi {
    width: 887px;
    text-align: justify;
    margin-left: 50px;
    height: 250px;
    display: flex;
    display: -webkit-flex;
    align-content: center;
    flex-wrap: wrap;
    .xians {
      width: 100%;
      height: 1px;
      line-height: 0;
      border-top: 3px solid #707070;
      border-bottom: 1px solid #707070;
      margin-bottom: 30px;
    }
    p {
      line-height: 24px;
      font-size: 14px;
      margin-bottom: 13px;
    }
  }
}
.sft {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  height: 410px;
  overflow: hidden;
  margin-bottom: 100px;
  div {
    position: relative;
    i {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
