<template>
  <div>
    <div class="banner">
      <img src="../../static/img/banner11.png" alt class="banner">
      <i></i>
    </div>
    <div class="qq waper">
      <div class="zhao">
        <span>
          <i class="z"></i>A level
          <i class="r"></i>
        </span>
      </div>
    </div>
    <div>
      <p class="bt">
        Alevel是一种以学科为基础的资格证书，可以通向大学、深造、培训或工作。
        <br>你通常可以在两年的时间里学习三个或更多的Alevel课程科目。
        <br>如果你有一个特定的职业，工作或进一步学习的想法，你可能需要选择特定的Alevel科目，以满足入门要求。
      </p>
      <i class="xians"></i>
    </div>
    <div class="bjs">
      <div class="imgs">
        <img src="../../static/img/apib02.png" alt>
      </div>
      <div class="wez">
        <div class="sekuai">
          <p class="onet">选择Alevel科目最重要的准则是:</p>
          <p>
            你擅长和喜欢什么？
            <br>这些特定的科目和成绩是你需要的吗？
            <br>对于你今后的职业和学习计划的变化你有多开放？
          </p>
        </div>
        <p class="tit">
          Alevel 被英国所有大学认证，并且在国际上颇有名声。这也意味着你有机会申请可能不接受基础课程的大学和学位。牛津，剑桥，LSW，帝国理工，UCL和大多数的医科专业都要求Alevel。
          在你Alevel学习的第一年结束的时候会接受考核，这是为了确保你能达到你需要的成绩，而这些成绩不会被录入你Alevel的最终成绩中。但这些成绩对于检查你的进度以及准备最后考试是一个很好的指标。在Alevel学习的第二年，你会通过一系列的考试作为你的最后评估。
        </p>
      </div>
    </div>
    <div class="waper">
      <p class="tpb">课程体系-A-Level</p>
      <i class="hsxian"></i>
      <p>选择学习Alevel意味着对于选择大学时会受益于专家的建议和在校学习期间的校园访问。你可以申请包括牛津，剑桥，LSW，帝国理工，UCL在内的任意英国大学院校。并且从申请院校到进入大学，你所选择合适的科目会支撑你对学业和职业的抱负。</p>
      <img src="../../static/img/apib03.png" alt>
      <p>
        选择Alevel的学科是一个复杂的过程。大学想录取的学生除了有优秀的成绩以外，还要求这些优秀的成绩是来自对应他们申请专业的科目。如果你已经明确大学想修的专业，那你应该考虑选择什么的学科学习会在最大程度上为你以后的专业做准备。但是如果你还没明确以后学习的专业，那么去选择一些会适合很多不同专业的科目很重要。很多大学的课程是建立在学生在高中学到的知识和技能的基础上的。因此，一些大学课程要求你已经学过某一特定的科目。例如，对于一般工程学位，数学和物理通常是基本的A-level资格。
        一些进阶难度的课程比其他课程会更频繁的被大学要求为录入学位的要求。我们把这些科目称为促进科目，因为当你选择这些科目的进阶难度会为你在大学专业选择上留下了广泛的选择。
      </p>
      <p>而这些促进科目为：</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "APIB",
}
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
.qq {
  background-image: url(../../static/img/apib01.png);
  margin-top: 110px;
}
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

.bt {
  font-size: 14px;
  font-family: Segoe UI;
  font-weight: 600;
  line-height: 24px;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  margin: 88px 0 80px;
}
.xians {
  display: block;
  width: 213px;
  height: 0px;
  border: 3px solid rgba(254, 51, 57, 1);
  margin: 0 auto;
}
.bjs {
  background: #fafafa;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  height: 466px;
  margin-top: 180px;
  .imgs {
    width: 500px;
    position: relative;
    img {
      position: absolute;
      left: 0;
      top: -81px;
    }
  }
  .wez {
    width: 640px;
    .sekuai {
      background: #fe3339;
      padding: 35px 50px 25px;
      p {
        font-size: 20px;
        font-weight: 600;
        line-height: 40px;
        color: rgba(255, 255, 255, 1);
      }
      .onet {
        font-size: 28px;
        font-weight: bold;
        line-height: 37px;
        padding-bottom: 20px;
        border-bottom: 3px solid rgba(255, 255, 255, 1);
      }
    }
    .tit {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      color: rgba(51, 51, 51, 1);
      padding-left: 50px;
      text-align: justify;
      margin-top: 50px;
    }
  }
}
</style>
