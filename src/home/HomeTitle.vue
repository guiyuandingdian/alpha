<template>
  <div class="tableft">
    <el-row>
      <el-col :span="12">
        <div
          class="grid-content bg-purple"
        >Floor 10, no.19 Guoshun East Road, Yangpu District, Shanghai</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">Tel：021-53021617 ; Fax：021-53021617-6519</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light gennen">
          <span>
            <img src="../../static/img/touxiang.png" alt>
          </span>
          <span>用户名</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
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
.el-row {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  height: 140px;
  .el-col {
    overflow: hidden;
    text-overflow: hidden;
    white-space: nowrap;
    .gennen {
      display: flex;
      display: -webkit-flex;
      justify-content: flex-end;
      align-items: center;
      img {
        padding-right: 30px;
      }
    }
  }
}
</style>
