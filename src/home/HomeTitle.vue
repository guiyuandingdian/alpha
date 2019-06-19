<template>
  <div class="tableft">
    <el-row>
      <el-col :span="19">
        <span>Floor 10, no.19 Guoshun East Road, Yangpu District, Shanghai</span>
        <span style="padding-left:50px;">Tel：021-53021617 ; Fax：021-53021617-6519</span>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple-light gennen">
          <span>
            <img src="../../static/img/touxiang.png" alt>
          </span>
          <el-dropdown>
            <span class="name">{{list.name}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出登录</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  props: {},
  computed: {
    list() {
      return this.$store.state.list;
    }
  }
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
    font-size: 22px;
    font-family: Segoe UI;
    font-weight: 400;
    line-height: 30px;
    color: rgba(77, 77, 77, 1);
    text-align: center;
    .gennen {
      display: flex;
      display: -webkit-flex;
      justify-content: flex-end;
      align-items: center;
      img {
        padding-right: 30px;
      }
      .name {
        padding-right: 60px;
        font-size: 26px;
        font-family: Segoe UI;
        font-weight: 600;
        line-height: 35px;
        color: rgba(77, 77, 77, 1);
      }
    }
  }
}
</style>
