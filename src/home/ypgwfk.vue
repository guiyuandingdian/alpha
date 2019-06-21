<template>
  <div>
    <div class="gwfk">
      <p class="gw">顾问反馈</p>
      <p class="gwfknr">{{List.res}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    List() {
      return this.$store.state.List;
    }
  }
};
</script>

<style scoped lang="scss">
.gwfk {
  padding: 27px 37px;
  background: #e6e6e6;
  border-radius: 10px;
  margin-top: 33px;
  .gw {
    display: inline-block;
    width: 112px;
    height: 37px;
    font-size: 28px;
    font-weight: 600;
    line-height: 37px;
    color: rgba(77, 77, 77, 1);
    vertical-align: top;
  }
  .gwfknr {
    display: inline-block;
    width: 900px;
    text-align: justify;
    font-size: 16px;
    line-height: 21px;
    color: #808080;
  }
}
</style>
