<template>
  <div>
    <el-form ref="back" :model="back">
      <el-form-item>
        <div>
          <ypgwfk></ypgwfk>
        </div>
      </el-form-item>
      <el-form-item label="荣誉及奖项">
        <el-input type="text" placeholder="请输入内容" v-model="back.honor" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="课外活动">
        <el-input type="text" placeholder="请输入内容" v-model="back.active" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="个人爱好">
        <el-input type="text" placeholder="请输入内容" v-model="back.hobby" show-word-limit></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ypgwfk from "./ypgwfk";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    back() {
     return this.$store.state.List.back;
    }
  },
  created() {

  },
  mounted() {},
  watch: {},
  methods: {
  },
  components: {
    ypgwfk
  }
};
</script>

<style scoped lang="scss">
</style>
