<template>
  <div class="block">
    <el-carousel trigger="click" height="400px" indicator-position='none'>
      <el-carousel-item>
        <img src="../../static/img/banner1.png" alt>
      </el-carousel-item>
       <el-carousel-item>
        <img src="../../static/img/banner2.png" alt>
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../static/img/banner3.png" alt>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "BanNer",
};
</script>

<style scoped lang="scss">
.block {
  line-height: 0;
  font-size: 0;
  padding: 0;margin: 0;
}
.el-carousel {
  width: 100%;
}
</style>
