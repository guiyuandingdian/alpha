<template>
  <div>
    <div class="fang">
      <div class="bjt waper">
        <div class="xiaodi">
          <div class="yuanjian">
            <div class="yuanh">
              <div>01</div>
            </div>
            <div class="jian">
              <img src="../../static/img/sjgh08.png" alt>
            </div>
          </div>
          <div class="wenzi">
            <p class="bt">成绩单</p>
            <p>顾问会根据学生成绩情况做具体成绩规划。指导学生如何向指定大学提交成绩单，并且提交哪些项目成绩</p>
          </div>
          <div class="tpian">
            <img src="../../static/img/sqcl01.png" alt>
          </div>
        </div>
        <div class="xiaodi">
          <div class="yuanjian">
            <div class="yuanh">
              <div>02</div>
            </div>
            <div class="jian">
              <img src="../../static/img/sjgh08.png" alt>
            </div>
          </div>
          <div class="wenzi">
            <p class="bt">申请系统</p>
            <p>顾问会向学生对申请系统的操作做辅导，指导学生填写资料，并在提交资料前做最后核实</p>
          </div>
          <div class="tpian">
            <img src="../../static/img/sqcl02.png" alt>
          </div>
        </div>
        <div class="xiaodi">
          <div class="yuanjian">
            <div class="yuanh">
              <div>03</div>
            </div>
            <div class="jian">
              <img src="../../static/img/sjgh08.png" alt>
            </div>
          </div>
          <div class="wenzi">
            <p class="bt">课外活动</p>
            <p>顾问会分析学生所参与过的活动，从而挑选出对学生申请最有利的项目并指导学生如何在申请中撰写以及编辑活动内容</p>
          </div>
          <div class="tpian">
            <img src="../../static/img/sqcl03.png" alt>
          </div>
        </div>
        <div class="xiaodi">
          <div class="yuanjian">
            <div class="yuanh">
              <div>04</div>
            </div>
            <div class="jian">
              <img src="../../static/img/sjgh08.png" alt>
            </div>
          </div>
          <div class="wenzi">
            <p class="bt">推荐信</p>
            <p>帮助学生选择推荐信的最佳来源，指导学生获取推荐信的方法，以及为学生提供推荐信的内容要点，便于学生与推荐人沟通，以确保推荐信对申请的帮助及高质量</p>
          </div>
          <div class="tpian">
            <img src="../../static/img/sqcl04.png" alt>
          </div>
        </div>
        <div class="xiaodi">
          <div class="yuanjian">
            <div class="yuanh">
              <div>05</div>
            </div>
            <div class="jian">
              <img src="../../static/img/sjgh08.png" alt>
            </div>
          </div>
          <div class="wenzi">
            <p class="bt">申请文书（个人陈述和补充文书）</p>
            <p>头脑风暴、提纲规划、内容修改、编辑及润色</p>
          </div>
          <div class="tpian">
            <img src="../../static/img/sqcl05.png" alt>
          </div>
        </div>
        <div class="xiaodi">
          <div class="yuanjian">
            <div class="yuanh">
              <div>06</div>
            </div>
          </div>
          <div class="wenzi">
            <p class="bt">面试准备</p>
            <p>顾问会提供1-2次面试准备，对面试进行要点指导，每次约一小时</p>
          </div>
          <div class="tpian">
            <img src="../../static/img/sqcl06.png" alt>
          </div>
        </div>
      </div>
    </div>
    <div class="dibutu">
      <img src="../../static/img/sqcl08.png" alt>
      <i></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.fang {
  padding-top: 100px;
  background: #fafafa;
  margin-bottom: 100px;
  .xiaodi {
    display: flex;
    justify-content: center;
    .yuanjian {
      width: 102px;
      margin-right: 106px;
      .yuanh {
        width: 90px;
        height: 90px;
        padding: 5px;
        border-radius: 50%;
        border: 1px solid #fe3339;
        margin-right: 108px;
        div {
          width: 90px;
          height: 90px;
          background: #fe3339;
          color: #fff;
          border-radius: 50%;
          text-align: center;
          line-height: 90px;
          box-sizing: border-box;
          font-size: 34px;
          font-weight: bold;
        }
      }
      .jian {
        text-align: center;
        margin-top: 16px;
        img {
          display: inline-block;
        }
      }
    }
    .wenzi {
      width: 420px;
      height: 164px;
      margin-right: 107px;
      .bt {
        font-size: 18px;
        font-family: Segoe UI;
        font-weight: 600;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
        line-height: 40px;
        border-top: 1px solid rgba(112, 112, 112, 1);
        border-bottom: 1px solid rgba(112, 112, 112, 1);
        margin-bottom: 18px;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
}

.dibutu {
  position: relative;
  overflow: hidden;
  height: 400px;
  margin-bottom: 100px;
  img {
    position: absolute;
    width: 1920px;
    height: 400px;
    top: 0;
    left: 50%;
    margin-left: -960px;
  }
  i {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
