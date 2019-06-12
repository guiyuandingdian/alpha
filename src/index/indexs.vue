<template>
  <div class="qwe">
    <div>
      <TabBar></TabBar>
    </div>
    <p class="xian"></p>
    <div class="zhende">
      <el-row>
        <img src="../../static/img/indextit.png" alt class="solign">
        <router-link to="/Login" class="log">开始留学申请</router-link>
      </el-row>
    </div>
  </div>
</template>

<script>
import TabBar from "./TabBar";
export default {
  name: "Indexs",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    TabBar
  }
};
</script>

<style scoped lang="scss">
.qwe {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  .zhende {
    height: 100%;
    background-image: url(../../static/img/indexbg.png);
    .el-row {
      padding-top: 420px;
      .solign {
        display: block;
        margin: 0 auto;
      }
      .log {
        display: block;
        margin: 0 auto;
        margin-top: 30px;
        text-align: center;
        font-size: 20px;
        font-family: Segoe UI;
        font-weight: 600;
        line-height: 40px;
        color: rgba(254, 51, 57, 1);
        width: 208px;
        height: 40px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        opacity: 1;
        border-radius: 10px;
      }
    }
  }
  .xian{
    width: 100%;
    height: 0;
    border-bottom: 1px dashed rgba(26,26,26,1);
    padding: 0;
    margin: 0;
  }
}
</style>
