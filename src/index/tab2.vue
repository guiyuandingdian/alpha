<template>
  <div class="zhanshi waper">
    <div class="iit">
      <img src="../../static/img/tdjs02.png" alt>
    </div>
    <div class="iits">
      <div>
        <p class="xiobiao">升学顾问</p>
        <i class="xian"></i>
        <div
          class="wenb"
        >顾问是学生整个留学申请的主设计师，会根据学生的具体情况及兴趣去做相对应规划及任务下发，通过这些来协助学生录取最理想的大学。在学生加入ALPHA后，顾问会对学生做全面的详细评估，做出一个详细的申请规划。顾问会对学生的高中课程安排，标化考试，课外活动以及背景规划做规划。学生和顾问一周至少一次约谈，约谈内容为对学生当前的申请进度做跟进并且对下一步申请准备步骤做规划。在申请季前期，顾问会与学生一起探讨并决定一份战略性院校申请名单。申请季中，顾问会联合文书指导老师一起为学生文书创作及修改做指导并且顾问会对学生做面试指导。整个申请材料的把控以及提交前的审核都由顾问来负责。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'tab2',
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
