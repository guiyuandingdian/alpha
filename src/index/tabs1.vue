<template>
  <div class="zhanshi">
    <div class="qq waper">
      <div class="zhao">
        <span>
          <i class="z"></i>DECA& FBLA
          <i class="r"></i>
        </span>
      </div>
    </div>
    <div class="bj">
      <div class="waper">
        <div tupianwen>
          <div>
            <div>
              <img src="../../static/img/hdgk02.png" alt="">
            </div>
            <div>
              <img src="../../static/img/hdgk03.png" alt="">
              <img src="../../static/img/hdgk04.png" alt="">
            </div>
          </div>
          <div>
            <p class="bt">2020 DECA ICDC</p>
            <p class="bt">全美高中生商业挑战峰会</p>
            <p class="rq">2020.4.27—2020.5.5 Shanghai, China；Nashville, Tennessee, USA</p>
            <p class="hx"></p>
            <p class="txt">
              DECA全称为Distributive Educational Clubs of America, 成立于1946年，是美国最大的中学生商业领导力教育组织之一，致力于为市场营销、金融财务、工商管理、旅游管理等领域培养未来的商业领袖。 全美高中生商业挑战赛全称为The International Career Development Conference，简称ICDC，是DECA每年定期举办的全美规格最高的商业挑战赛，素有“商业奥林匹克”之称。于每年4月底5月初在美国举办。
              ICDC比赛成绩受到美国国会、美国教育部、美国学生生涯与技能组织（Career and Technical Student Organization）、美国中学校长协会（National association of secondary school principles）、美国大学理事会（College Board）等一致推荐和认可，认为是进入大学前必须参加的活动之一。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs1",
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
  margin: 0 auto;
}
.qq {
  width: 1280px;
  height: 400px;
  background-image: url(../../static/img/hdgk01.png);
  margin-bottom: 20px;
  .zhao {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    position: relative;
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
  }
}

.bj {
  background: #FFFFFF;
  .bt {
    font-size: 18px;
    font-family: Segoe UI;
    font-weight: 600;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
  }
  .rq {
    font-size: 14px;
    font-family: Segoe UI;
    font-weight: 600;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
  }
  .txt {
    font-size: 14px;
    font-family: Segoe UI;
    font-weight: 400;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
  }
  .hx {
    width: 32px;
    height: 0px;
    border: 2px solid rgba(254, 51, 57, 1);
  }
}
</style>
