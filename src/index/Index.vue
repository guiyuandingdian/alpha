<template>
  <div class="qwe">
    <div class="tltle">
      <Tab-bar/>
    </div>
    
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">
      <Foter></Foter>
    </div>
  </div>
</template>

<script>
import TabBar from "./TabBar";
import BanNer from "./BanNer";
import Foter from "./Foter";
export default {
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
    TabBar,
    BanNer,
    Foter
  }
};
</script>

<style scoped lang="scss">
.tltle {
  position: relative;
  z-index: 22;
}
.banner {
  font-size: 0;
  line-height: 0;
}
.footer {
  background: #000;
}
</style>
