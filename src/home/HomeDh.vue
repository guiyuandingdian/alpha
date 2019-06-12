<template>
  <div class="dahagn">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        :to="this.$route"
      >{{this.$route.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    
  </div>
</template>

<script>
export default {
  name: "HomeDh",
  props: {},
  data() {
    return {
      list: []
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
  },
  components: {}
};
</script>

<style scoped lang="scss">
.dahagn {
  margin-bottom: 18px;
  padding-left: 66px;
}
</style>
