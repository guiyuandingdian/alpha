<template>
  <div class="content">
    <div class="banner">
      <img src="../../static/img/banner.png" alt class="banner">
    </div>
    <div class="title01 waper">
      <p class="zn">服务优势</p>
      <p class="xian"></p>
    </div>
    <div class="imgtxtwaper waper">
      <div class="kua img">
        <img src="../../static/img/fwys01.png" alt>
      </div>
      <div class="kua txt">
        <p class="ico">01</p>
        <p class="biao">在职教授指导</p>
        <p class="xianh"></p>
        <p class="content">美国社会和大学体制不同于我们国家，通过和招生官“认识”就能有助于录取的美国大学还值得去吗？相反，Alpha不用“招生官”，我们聘请的在职教授不仅会参与招生工作，还会根据学生的兴趣专业与目标大学对学生进行一对一指导，并且在文书方面也能给予最中肯的建议。</p>
      </div>
      <div class="kua img">
        <img src="../../static/img/fwys02.png" alt>
      </div>
      <div class="kua txt">
        <p class="ico">02</p>
        <p class="biao">全球化申请</p>
        <p class="xianh"></p>
        <p class="content">中美关系因贸易战而僵化，为了规避美国签证条件提高而拒签率增加的风险，ALPHA将留学申请国家扩展到英美澳加等多个热门国家。</p>
      </div>

      <div class="kua txt">
        <p class="ico">03</p>
        <p class="biao">提高学术成绩，丰富课外活动</p>
        <p class="xianh"></p>
        <p class="content">学术成绩和课外活动是国外大学考核的重要指标。ALPHA会针对学生的实际情况进行对国际课程和课外活动的推荐指导。</p>
      </div>
      <div class="kua img">
        <img src="../../static/img/fwys03.png" alt>
      </div>

      <div class="kua txt">
        <p class="ico">04</p>
        <p class="biao">文书指导</p>
        <p class="xianh"></p>
        <p class="content">文书是国外大学申请的重头戏，每年因为优秀的文书而逆袭名校的学生案例多不胜数。ALPHA拒绝单一枯燥的模板，文书指导团队会细心给予专业的帮助学生修改出一份满意的文书。</p>
      </div>
      <div class="kua img">
        <img src="../../static/img/fwys04.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlphaFwys",
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
  .imgtxtwaper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
    margin-top: 105px;
    .kua {
      width: 320px;
      height: 320px;
      box-sizing: border-box;
    }
    .txt {
      padding: 0 25px;
      background: rgba(242, 242, 242, 0.5);
      .ico {
        width: 48px;
        height: 51px;
        background-image: url(../../static/img/fwys05.png);
        background-repeat: repeat;
        text-align: center;
        line-height: 40px;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
      }
      .biao {
        font-size: 18px;
        font-family: Segoe UI;
        font-weight: 600;
        line-height: 24px;
        color: rgba(254, 51, 57, 1);
        margin-top: 20px;
      }
      .xianh {
        width: 32px;
        height: 0px;
        border: 2px solid rgba(26, 26, 26, 1);
        margin: 9px 0 26px 0;
      }
      .content {
        font-size: 14px;
        font-family: Segoe UI;
        font-weight: 400;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
      }
    }
  }
}
</style>
