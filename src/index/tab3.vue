<template>
  <div class="zhanshi waper">
    <div class="iit">
      <img src="../../static/img/tdjs03.png" alt>
    </div>
    <div class="iits">
      <div>
        <p class="xiobiao">在职教授</p>
        <i class="xian"></i>
        <div
          class="wenb"
        >在职教授： 教授是学生留学申请的强心剂。ALPHA的在职教授都是海外名校教授。相对于带有营销绰头的前招生官，教授更为让人放心。名校教授实际上都会参与到招生工作中，更为了解什么样的学生受学校青睐，并且教授能够掌握学校第一手信息。学生一个月会与教授有1.5小时的会议，会议内容基本为教授对学生目标院校以及专业对学生进行权威辅导。教授会对学生目标专业做分析并且给予学生该专业在美国的就业前景等背景介绍指导。在约谈过程中，学生会和教授建立沟通桥梁，让教授了解学生有助于后期教授对学生的推荐信撰写。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'tab3',
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
 .zhanshi {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin-top: 97px;
    margin-bottom: 117px;

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
</style>
