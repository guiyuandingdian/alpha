<template>
  <div class="warper">
    <div class="tabbar">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img
              src="../../static/img/logo.png"
              alt="logo"
              style="padding-top:18px;padding-left:60px;"
            >
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light dhlan">
            <el-menu
              :default-active="$route.path"
              class="el-menu-demo"
              mode="horizontal"
              :router="true"
              text-color="#fff"
              active-text-color="#333"
              background-color="#000"
            >
              <el-menu-item index="/indexs">首页</el-menu-item>
              <el-submenu index="/AlphaJs">
                <template slot="title">关于ALPHA</template>
                <el-menu-item index="/AlphaJs">ALPHA项目介绍</el-menu-item>
                <el-menu-item index="/AlphaFwys">ALPHA服务优势</el-menu-item>
                <el-menu-item index="/AlphaTdjs">ALPHA团队介绍</el-menu-item>
              </el-submenu>
              <el-submenu index="/Xmlc">
                <template slot="title">项目服务</template>
                <el-menu-item index="/Xmlc">项目流程</el-menu-item>
                <el-menu-item index="/Hdgk">活动概览</el-menu-item>
              </el-submenu>
              <el-submenu index="/APIB">
                <template slot="title">课程体系</template>
                <el-menu-item index="/A_Level">AP&IB</el-menu-item>
                <el-menu-item index="/APIB">A-Level</el-menu-item>
              </el-submenu>
              <el-menu-item index="/Yxph">院校排名</el-menu-item>
              <el-menu-item index="/Cgal">成功案例</el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="4" class="denglo">
          <div v-if="!tokens">
            <router-link to="/Home" class="lgo">登录注册</router-link>
          </div>
          <div class="grid-content bg-purple-light gennen" v-if="tokens">
            <span>
              <img src="../../static/img/touxiang.png" alt>
            </span>
            <el-dropdown>
              <span class="name">{{List.basic.name}}</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="/Home" class="lgo">个人中心</router-link>
                </el-dropdown-item>
                <el-dropdown-item>绑定微信</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {},
  data() {
    return {
      activeIndex: "/indexs",
      tokens : localStorage.getItem("token")
    };
  },
  computed: {
    List() {
      return this.$store.state.List;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  components: {}
};
</script>

<style lang="scss">
.warper {
  width: 100%;
  margin: 0 auto;
  background: #1a1a1a;
  height: 100px;
}
.tabbar {
  width: 1440px;
  margin: 0 auto;
  .el-menu {
    background: none !important;
    .el-menu-item {
      color: #fff !important;
      border-radius: 13px;
      background: none !important;
    }
  }
  .el-menu-item {
    height: 25px !important;
    line-height: 25px !important;
    border: none !important;
    margin-right: 20px !important;
    border-radius: 20px;
    color: #fff !important;
    min-width: 116px !important;
    box-sizing: border-box;
    text-align: center;
  }
  .el-submenu {
    height: 25px !important;
    border: none !important;
    margin-right: 20px !important;
    border-radius: 20px;
    color: #fff !important;
    .el-menu-item {
      color: #fff !important;
      padding: 0 !important;
    }
  }
  .dhlan {
    padding: 38px 0 37px;
  }
  .denglo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    .lgo {
      display: block;
      text-align: center;
      color: #fff;
      width: 110px;
      height: 25px;
      line-height: 25px;
      border: 1px solid rgba(254, 51, 57, 1);
      opacity: 1;
      border-radius: 10px;
    }
  }
  .el-submenu__title {
    height: 25px !important;
    line-height: 25px !important;
    border: none !important;
    border-radius: 20px;
  }
}
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

.el-menu.el-menu--horizontal {
  border: none;
}
.el-input__inner {
  height: 60px;
  line-height: 60px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(128, 128, 128, 1);
  opacity: 1;
  border-radius: 10px;
  font-size: 26px;
}
.el-tabs__nav {
  width: 100%;
}
.el-tabs__item {
  font-size: 26px;
  line-height: 56px;
  height: 56px;
  color: #7d1111 !important;
  width: 50% !important;
  padding: 0 !important;
}
.el-checkbox__label {
  font-size: 20px;
  vertical-align: middle;
}
.el-tabs__item:hover {
  color: #7d1111 !important;
}
.el-tabs__active-bar {
  background-color: #7d1111;
}
.el-tabs__header {
  margin: 0 0 40px 0;
}
.el-form-item {
  margin-bottom: 40px;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #7d1111;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #7d1111;
  border-color: #7d1111;
}
.el-menu--horizontal > .el-menu-item {
  background-color: none;
  color: #fff;
  margin-right: 20px !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  background-color: #fe3339 !important;
  color: #fff !important;
  margin-right: 20px !important;
}
.submenu__title:hover {
  background: #fe3339 !important;
}
.el-submenu__title:hover {
  background: #fe3339 !important;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background: #fe3339 !important;
  border-radius: 20px;
  margin-right: 20px !important;
}
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 118px !important;
  background: none !important;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  background-color: #fe3339 !important;
  color: #fff !important;
}
.el-icon-arrow-down:before {
  color: #fff;
}
.el-menu--horizontal {
  padding: 0 !important;
}
.el-menu--horizontal .el-menu .el-menu-item {
  padding: 0 16px !important;
  border-radius: 10px !important;
  height: 25px !important;
  line-height: 25px !important;
  margin-bottom: 10px;
  text-align: center !important;
}
.el-menu--horizontal .el-menu .el-menu-item:hover {
  background: #fe3339 !important;
}
.el-menu--horizontal .el-menu .el-menu-item.is-active {
  background: #fe3339 !important;
  color: #fff !important;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  background: none !important;
}
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: #fe3339 !important;
  color: #fff !important;
}
.tabbar .el-menu.el-menu--horizontal {
  border: none !important;
}
</style>
