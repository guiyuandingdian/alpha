<template>
  <div class="tableft">
    <el-row>
      <el-col :span="19">
        <span>Floor 10, no.19 Guoshun East Road, Yangpu District, Shanghai</span>
        <span style="padding-left:50px;">Tel：021-55088139 ; 邮箱: alpha@alphaeducation.net</span>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple-light gennen">
          <span>
            <img src="../../static/img/touxiang.png" alt>
          </span>
          <el-dropdown>
            <span class="name">{{List.basic.name}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>绑定微信</el-dropdown-item>
              <el-dropdown-item @click="bay()">
                <span @click="bay()">退出登录</span>
              </el-dropdown-item>
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
    List() {
      return this.$store.state.List;
    }
  },
  methods: {
    //退出登录
    bay() {
      return this.$store.dispatch("bay");
    }
  }
};
</script>

<style scoped lang="scss">
.el-row {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  height: 60px;
  .el-col {
    white-space: nowrap;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: rgba(77, 77, 77, 1);
    text-align: left;
    .gennen {
      display: flex;
      display: -webkit-flex;
      justify-content: flex-end;
      align-items: center;
      img {
        padding-right: 20px;
        width: 40px;
      }
      .name {
        padding-right: 20px;
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
