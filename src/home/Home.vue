<template>
  <div class="wapper">
    <el-container>
      <el-aside width="200px">
        <HomeLeft></HomeLeft>
      </el-aside>
      <el-container>
        <el-header style="text-align: center; font-size: 12px;height:60px;">
          <HomeTitle></HomeTitle>
        </el-header>
        <el-main class="shitu">
          <HomeDh></HomeDh>
          <div class="shikou">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeTitle from "./HomeTitle";
import HomeLeft from "./HomeLeft";
import HomeDh from "./HomeDh";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  created() {},
  components: {
    HomeTitle,
    HomeLeft,
    HomeDh
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.wapper {
  background: #e6e6e6;
}
.shikou {
  border-radius: 10px;
  background: #fff;
  padding: 28px 67px;
  box-sizing: border-box;
  min-width: 1095px;
  min-height: 728px;
}
.el-header {
  background: #fff;
}
</style>
