<template>
  <div class="zhanshi">
    <div class="qq waper">
      <div class="zhao">
        <span>
          <i class="z"></i>IAR
          <i class="r"></i>
        </span>
      </div>
    </div>
    <div class="bjs">
      <div class="center waper">
        <div>
          <img src="../../static/img/ky02.png" alt>
        </div>
        <div class="wenzi">
          <p class="xians"></p>
          <p>IAR, 全称Institute for Advanced Research, 专为中国学生打造跟随常青藤等美国名校教授进行学术研究的机会，旨在提升中国优秀学生的学术课题研究能力，以及进入美国名校的竞争力。</p>
          <p>IAR包括常青藤夏季科研项目（IAR Research）和常青藤课题研究挑战赛（IAR Challenge）两大项目，以及IAR校园学术社团。</p>
          <p>常青藤夏季科研项目（IAR Research）, 由名校教授全程面对面指导授课，为期四周，通过学习专业论文破题、统计资料收集、详细观点陈述、比较研究方法、数据处理分析、论文征引文献等方式完成课题报告，使更多的优秀学生提早补充学术背景的短板，敢于面对当下和未来的挑战，赢取新的发展空间，进一步真正体验到学术科研的无限乐趣及魅力。</p>
        </div>
      </div>
      <div class="sft waper">
        <div>
          <img src="../../static/img/ky03.png" alt>
          <i></i>
        </div>
        <div>
          <img src="../../static/img/ky04.png" alt>
          <i></i>
        </div>
        <div>
          <img src="../../static/img/ky05.png" alt>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs4",
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
  background-image: url(../../static/img/ky01.png);
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
