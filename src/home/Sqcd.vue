<template>
  <div>
    <Botit></Botit>
    <div>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked1">1、确定意向专业</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked2">2、确定大致目标院校</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked3">
              3、托福目标成绩
              <span>60</span>
            </el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked4">4、 SAT成绩已达到目标成绩</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked5">5、SAT－2成绩已达到目标成绩</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked6">6、AP成绩已达到目标成绩</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked7">7、确定最终申请院校名单</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked8">8、Common Application系统基本资料填写完成</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked9">9、Common Application Personal Statement提交</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked10">10、学校补充文书提交</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked11">11、推荐信提交</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked12">12、学生简历提交</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked13">13、学生面试视频提交</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked14">14、校方校内成绩提交</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="leib">
            <el-checkbox v-model="checked15">15、申请最终提交，缴付学校申请费</el-checkbox>
            <el-button>去完成</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Botit from "./Botit";
export default {
  name: "Sqcd",
  props: {},
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
      checked11: false,
      checked12: false,
      checked13: false,
      checked14: false,
      checked15: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Botit
  }
};
</script>

<style scoped lang="scss">
.leib {
  display: flex;
  flex: 1;
  height: 69px;
  align-items: center;
  justify-content: space-between;
}
</style>
