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
  font-family: "Segoe UI" "微软雅黑", "黑体", "宋体";
  padding: 0;
  margin: 0;
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
a{
  text-emphasis: none;
  text-decoration: none;
}
#gouerzi .el-menu-item-group__title{
  padding: 0 !important;
}
</style>
