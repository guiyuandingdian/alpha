<template>
  <div>
    <Botit></Botit>
    <div>
      <el-steps direction="vertical" :active="1">
        <el-step title="预评估表" description="此步骤的说明、要求及意义
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">
        </el-step>
        <el-step title="成绩管理"></el-step>
        <el-step title="选择学校" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="文书修改" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="提交申请" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="申请结果" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
import Botit from "./Botit";
export default {
  name: "Bzlc",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Botit
  }
};
</script>

<style scoped lang="scss">
</style>
