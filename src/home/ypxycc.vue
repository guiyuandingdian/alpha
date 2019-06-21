<template>
  <div>
    <el-form ref="form" :model="aca" label-width="80px" size="mini">

      <el-form-item label="意向留学国家">
        <el-select v-model="aca.d_country" placeholder="请选择国家">
          <el-option label="美国" value="美国"></el-option>
          <el-option label="英国" value="英国"></el-option>
          <el-option label="法国" value="法国"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="在读科目">
        <el-input v-model="aca.insubjects"></el-input>
      </el-form-item>
      <el-form-item label="梦想学校">
        <el-input v-model="aca.d_school"></el-input>
      </el-form-item>
      <el-form-item label="目前成绩排名">
        <el-input v-model="aca.nowranking"></el-input>
        <el-input v-model="aca.nowrankings"></el-input>
      </el-form-item>
       <el-form-item label="意向留学专业">
        <el-input v-model="aca.d_major"></el-input>
      </el-form-item>
       <el-form-item label="目前GPA">
        <el-input v-model="aca.nowgpa"></el-input>
      </el-form-item>

       <el-form-item >
         <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
      aca() {
      return this.$store.state.List.aca;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
      onSubmit(){
          return this.$store.dispatch("Predict_xy");
      }
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
