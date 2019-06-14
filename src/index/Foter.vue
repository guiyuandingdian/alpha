<template>
  <div class="Foter">
    <el-row>
      <el-col :span="7">
        <div class="grid-content">
          <img src="../../static/img/logo4.png" alt>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content">
          <el-row class="text">
            <el-col :span="11" class="right">
              <router-link to="/">首页</router-link>
            </el-col>
            <el-col :span="2">
              |
            </el-col>
            <el-col :span="11" class="left">
              <router-link to="/Ligin">登录</router-link>
            </el-col>
          </el-row>
          <p>电话：021-55088139 地址：上海市杨浦区国顺东路19号首东国顺大厦10楼</p>
          <p>Copyright &#169 2010-2019 爱尔发留学 备案号：沪ICP备19009338号-2</p>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content">
          <img src="../../static/img/ewm.png" alt>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Foter",
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
.Foter {
  width: 1400px;
  margin: 0 auto;
  text-align: center;
  line-height: 40px;
  color: #fff;
  padding: 63px 0;
  .grid-content{
    img{
      padding-top: 6px;
    }
  }
  .text{
    width: 400px;
    margin: 0 auto;
    border-bottom: 1px solid #fff;
    margin-bottom: 10px;
    a{
      color: #fff;
    }
    .right{
      text-align: right;
    }
    .left{
      text-align: left;
    }
  }
}
</style>
