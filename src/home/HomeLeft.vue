<template>
  <div class="aside" id="gouerzi">
    <div class="logo">
      <img src="../../static/img/logo2.png" alt>
    </div>
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#7D1111"
      text-color="#FAF6D0"
      active-text-color="#fff"

    >
      <el-submenu index="1">
        <template slot="title">
          <i class="fangkuai"></i>
          <span>我的申请</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Home/Bzlc">步骤流程</el-menu-item>
          <el-menu-item index="/Home/Sqcd">申请清单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/Home/Ypgb">
        <i class="fangkuai"></i>
        <span slot="title">预评估表</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="fangkuai"></i>
          <span>成绩</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Home/Xycj">学业成绩</el-menu-item>
          <el-menu-item index="/Home/Bhcj">标化成绩</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/Home/Hd">
        <i class="fangkuai"></i>
        <span slot="title">活动</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="fangkuai"></i>
          <span>学校</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Home/Xzxx">选择学校</el-menu-item>
          <el-menu-item index="/Home/Wdzx">我的择校</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/Home/Ws">
        <i class="fangkuai"></i>
        <span slot="title">文书</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HomeLeft",
  props: {}
  
};
</script>

<style scoped lang="scss">
.el-submenu .el-menu-item{
  background: #991414 !important
}
.el-submenu__title i{
  color: #fff !important
}
.aside {
  min-height: 100%;
  background: #7d1111;
  .logo {
    font-size: 0;
    img {
      display: block;
      margin: 0 auto;
      padding-top: 60px;
    }
  }
  .el-menu-vertical-demo {
    margin-top: 86px;
  }
  .is-active {
    background: #b31818 !important;
  }
  .fangkuai {
    display: inline-block;
    width: 15px;
    height: 15px;
    background: #fff;
  }
  .el-menu-item-group {
    .el-menu-item-group__title {
      display: none !important;
      padding: 0;
    }
  }
  .el-menu {
    border-right: 0 !important;
  }
}
.el-menu-item-group__title{
  padding: 0 !important;
}

.el-menu-vertical-demo>li{
  border-bottom: 1px solid rgba(153,20,20,1);
}
</style>
