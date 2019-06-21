<template>
  <div>
    <Botit></Botit>
    <div class="ri">
      <full-calendar :events="fcEvents" locale="zn"></full-calendar>
    </div>
  </div>
</template>

<script>
import Botit from "./Botit";
import FullCalendar from "vue-fullcalendar";
export default {
  name: "Rlkb",
  props: {},
  data() {
    return {
      fcEvents: [
        {
          title: "Sunny Out of Office",
          start: "2019-06-18",
          end: "2019-06-18"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Botit,
    FullCalendar
  }
};
</script>

<style scoped lang="scss">
</style>
