<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  font-family: "微软雅黑", "黑体", "宋体";
}
ul,
li {
  list-style: none;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  line-height: 0;
  visibility: hidden;
}
#gouerzi .el-menu-item-group__title{
  padding: 0 !important;
}
</style>
