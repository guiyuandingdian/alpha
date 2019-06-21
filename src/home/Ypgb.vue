<template>
  <div>
    <Botit></Botit>
    <div class>
      <ul class="shenfen">
        <li
          v-for="(tab,index) in tabs"
          :key="index"
          @click="toggle(index,tab.view)"
          :class="{active:active==index}"
        >
          <p>{{tab.type}}</p>
          <p>{{tab.txt}}</p>
        </li>
      </ul>
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import Botit from "./Botit";
import pm1 from "./ypjbxx";
import pm2 from "./ypxycc";
import pm3 from "./ypbhcc";
import pm4 from "./ypxsbj";
import pm5 from "./ypsq";

export default {
  props: {},
  data() {
    return {
      active: 0,
      currentView: "pm1",
      tabs: [
        {
          type: "基本信息 ",
          txt: "Basic Information",
          view: "pm1"
        },
        {
          type: "学业信息",
          txt: "Academic Information",
          view: "pm2"
        },
        {
          type: "标化成绩",
          txt: "Standardized Test",
          view: "pm3"
        },
        {
          type: "学生背景",
          txt: "Background",
          view: "pm4"
        },
        {
          type: "Student",
          txt: "Questionnaire",
          view: "pm5"
        }
      ]
    };
  },
  computed: {},
  created() {
  },
  mounted() {},
  watch: {},
  methods: {
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    },
    
  },
  components: {
    Botit,
    pm1,
    pm2,
    pm3,
    pm4,
    pm5
  }
};
</script>

<style scoped lang="scss">
.shenfen {
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 33px;
  li {
    width: 220px;
    height: 60px;
    text-align: center;
    color: #fff;
    background: #991414;
    box-shadow: 0px 3px 6px rgba(204, 10, 10, 0.3);
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
    }
  }
  .active{
    background:  #CC0A0A !important;
  }
}

</style>
