<template>
  <div class="zhanshi waper">
    <div class="qq waper">
      <div class="zhao">
        <span>
          <i class="z"></i>2019国际义工 “青芒”行动
          <i class="r"></i>
        </span>
      </div>
    </div>
    <p class="bts">
      如果你能长期参与某一组织或者某一类型的志愿者活动，表现出自己的热情与领导力，并且能够运用自己独立的思考能力去探索志愿者服务的意
      <br>义，那么你向招生官展现的人物形象更加的丰满。义工活动中所学到的奉献精神，养成的良好的品质都是招生官所看重的。
    </p>
    <p class="hxian"></p>
    <ul class="fenbie">
      <li>
        <div class="tus">
          <img src="../../static/img/xm02.png" alt>
        </div>
        <p class="ddian">MALDIVES 马尔代夫</p>
        <p class="sjian">2019.01.27-02.02丨2019.02.10-02.16</p>
      </li>
      <li>
        <div class="tus">
          <img src="../../static/img/xm03.png" alt>
        </div>
        <p class="ddian">THAILAND 泰国·清迈</p>
        <p class="sjian">2019.02.06-02.12</p>
      </li>
      <li>
        <div class="tus">
          <img src="../../static/img/xm04.png" alt>
        </div>
        <p class="ddian">BALI 巴厘岛</p>
        <p class="sjian">2019.02.06-02.12</p>
      </li>
      <li>
        <div class="tus">
          <img src="../../static/img/xm05.png" alt>
        </div>
        <p class="ddian">SRI LANKA 斯里兰卡·加勒</p>
        <p class="sjian">2019.01.27-02.02丨2019.02.10-02.16</p>
      </li>
      <li>
        <div class="tus">
          <img src="../../static/img/xm06.png" alt>
        </div>
        <p class="ddian">CAMBODIA 柬埔寨·暹粒</p>
        <p class="sjian">2019.01.27-02.02丨2019.02.10-02.16</p>
      </li>
      <li>
        <div class="tus">
          <img src="../../static/img/xm07.png" alt>
        </div>
        <p class="ddian">THAILAND 泰国·甲米</p>
        <p class="sjian">2019.02.10-02.16</p>
      </li>
    </ul>
    <div class="qc waper">
      <div class="zhao">
        <p class="qw">活动收获</p>
        <p class="xianss"></p>
        <p class="tx1">获得国际义工证明</p>
        <p class="tx2">独特义工经历，不走寻常路 动手改变世界，成为世界公民</p>
        <p class="tx2">结识各地精英，搭建未来人脉</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs2",
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
.qq {
  width: 1280px;
  height: 400px;
  background-image: url(../../static/img/xm01.png);
  margin-bottom: 20px;
}
.qc {
  width: 1280px;
  height: 400px;
  background-image: url(../../static/img/xm08.png);
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
  .tx1{
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    margin-bottom: 13px;
  }
  .tx2{
    font-size: 14px;
    margin-bottom: 13px;
  }
}
.bts {
  width: 900px;
  height: 74px;
  font-size: 14px;
  font-family: Segoe UI;
  font-weight: 600;
  line-height: 24px;
  color: rgba(51, 51, 51, 1);
  margin: 0 auto;
  text-align: center;
    padding-top: 66px;
}
.hxian {
  width: 213px;
  height: 0px;
  border: 3px solid rgba(254, 51, 57, 1);
  margin: 0 auto;
  margin-bottom: 100px;
}
.fenbie {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 400px;
    height: 450px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.16);
    margin-bottom: 100px;
    text-align: center;
    line-height: 24px;
    cursor: pointer;
    .tus {
      height: 350px;
      img {
        width: 100%;
      }
    }
    .ddian {
      font-size: 18px;
      font-weight: bold;
      padding-top: 19px;
    }
    .sjian {
      font-size: 14px;
    }
  }
}
</style>
