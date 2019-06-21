<template>
  <div>
    <Botit></Botit>
    <div>
      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png' class="cl">
          </span>
          <span>1、确定意向专业</span>
        </div>
        <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>2、确定大致目标院校</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png' class="cl">
          </span>
          <span>
            3、托福目标成绩
            <span class="set">60</span>
          </span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>4、 SAT成绩已达到目标成绩</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png' class="cl">
          </span>
          <span>5、SAT－2成绩已达到目标成绩</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>6、AP成绩已达到目标成绩</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png' class="cl">
          </span>
          <span>7、确定最终申请院校名单</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>8、Common Application系统基本资料填写完成</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>9、Common Application Personal Statement提交</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>10、学校补充文书提交</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>11、推荐信提交</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>12、学生简历提交</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>13、学生面试视频提交</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>14、校方校内成绩提交</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>

      <div class="leib">
        <div class="wenben">
          <span class="fangkuai">
            <img src='../../static/img/home03.png'>
          </span>
          <span>15、申请最终提交，缴付学校申请费</span>
        </div>
       <router-link to="/Home/Bzlc" class="linka">去完成</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Botit from "./Botit";
export default {
  name: "Sqcd",
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  components: {
    Botit
  }
};
</script>

<style scoped lang="scss">
.leib {
  display: flex;
  flex: 1;
  height: 69px;
  align-items: center;
  justify-content: space-between;
  .wenben {
    span {
      font-size: 20px;
      font-weight: 400;
      color: rgba(77, 77, 77, 1);
      vertical-align: middle;
      line-height: 28px;
      .set{
        color: #B31818;
        vertical-align: middle;
      }
    }
    .fangkuai {
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 1px solid rgba(112, 112, 112, 1);
      position: relative;
      margin-right: 29px;
      vertical-align: middle;
      img{
        position: absolute;
        width: 24px;
        bottom: 0;
        left: 0;
        display: none;
      }
      .cl{
        display: block;
      }
    }
  }
  .linka {
    display: block;
    width: 113px;
    height: 39px;
    background: rgba(125, 17, 17, 1);
    box-shadow: 0px 3px 6px rgba(204, 10, 10, 0.3);
    border-radius: 10px;
    text-align: center;
    color: #fff;
    line-height: 39px;
  }
}
</style>
