<template>
  <div>
    <div class="fang">
      <div class="bjt waper">
        <div class="xiaozi">
          <img src="../../static/img/sjgh01.png" alt>
          <div class="hb">10年级第一学期</div>
          <p>
            了解院校及专业以助敲定申请方向
            <br>了解美本申请系统
            <br>分析学生高中课程选课是否匹配
            <br>进行TOEFL／IELST 模考及学习
          </p>
        </div>
        <div class="cyou">
          <img src="../../static/img/sjgh05.png" alt>
        </div>
        <div class="xiaozi">
          <img src="../../static/img/sjgh02.png" alt>
          <div class="hb">10年级寒假</div>
          <p>
            进行 SAT／ACT 模考选择考试方向
            <br>进行SAT－2考试冲刺
            <br>背景提升活动以获取推荐信
            <br>参加夏季访校或夏校活动
          </p>
        </div>
        <div class="xiaozi">
          <img src="../../static/img/sjgh04.png" alt>
          <div class="hb">10年级升11年级暑假</div>
          <p>
            了解院校及专业以助敲定申请方向
            <br>了解美本申请系统
            <br>分析学生高中课程选课是否匹配
            <br>进行TOEFL／IELST 模考及学习
          </p>
        </div>
        <div class="cyou">
          <img src="../../static/img/sjgh06.png" alt>
        </div>
        <div class="xiaozi">
          <img src="../../static/img/sjgh03.png" alt>
          <div class="hb">10年级第二学期</div>
          <p>
            TOEFL／IELTS考试冲刺
            <br>着手准备SAT-2 考试
            <br>敲定目标学校并制定申请计划
            <br>筹备暑期活动申请
          </p>
        </div>
      </div>
    </div>
    <div class="dibutu">
      <img src="../../static/img/sjgh07.png" alt>
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
  .bjt {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
    .cyou {
      img {
        padding-top: 220px;
      }
    }
  }
}
.xiaozi {
  width: 600px;
  text-align: center;
  margin-bottom: 120px;
  img {
    display: inline-block;
    font-size: 0;
    line-height: 0;
  }
  .hb {
    height: 39px;
    background: rgba(204, 204, 204, 1);
    font-size: 18px;
    font-family: Segoe UI;
    font-weight: 600;
    line-height: 39px;
    text-align: center;
    margin-top: 30px;
  }
  p {
    font-size: 14px;
    font-family: Segoe UI;
    font-weight: 400;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    margin-top: 31px;
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
