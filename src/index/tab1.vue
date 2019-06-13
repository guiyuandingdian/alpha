<template>
  <div class="zhanshi waper">
    <div class="iit">
      <img src="../../static/img/tdjs01.png" alt>
    </div>
    <div class="iits">
      <div>
        <p class="xiobiao">留学规划导师</p>
        <i class="xian"></i>
        <div
          class="wenb"
        >在学生加入ALPHA前，我们会为有意向留学的家庭和学生进行一次免费的留学规划咨询。留学规划导师的角色是初步了解学生的基本情况，深入了解学生的想法以及家长对孩子的期待和对院校的需求。导师在约谈中会了解学生学业成绩，背景经历与兴趣爱好和所期待的目标。结合学生情况做个性化分析，明确学生时间分配及后期申请规划。最后对初次约谈做出对于学生的评估而给出反馈报告。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab1",
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
