<template>
  <div>
    <p class="Botit">{{this.$route.meta.title}}</p>
  </div>
</template>

<script>
export default {
  name: "Botit",
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
.Botit {
  font-size: 28px;
  font-family: Segoe UI;
  font-weight: 600;
  line-height: 79px;
  color: rgba(77, 77, 77, 1);
  border-bottom: 1px solid #999999;
}
</style>
