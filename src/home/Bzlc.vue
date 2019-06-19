<template>
  <div>
    <Botit></Botit>
    <div>
      <el-row>
        <el-col :span="24">
          <div class="lcb">
            <div class="yuan">
              <p>STEP 1</p>
              <i class="xiaoyuan"></i>
            </div>
            <div class="rtxt">
              <div>
                <p>预评估表</p>
                <p>此步骤的说明、要求及意义</p>
                <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
              </div>
              <div>
                <el-button>去完成</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="lcb">
            <div class="yuan">
              <p>STEP 2</p>
              <i class="xiaoyuan"></i>
            </div>
            <div class="rtxt">
              <div>
                <p>成绩管理</p>
                <p>此步骤的说明、要求及意义</p>
                <p>学生填写成绩；各阶段标化成绩以及校内成绩</p>
              </div>
              <div>
                <el-button>去完成</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="lcb">
            <div class="yuan">
              <p>STEP 3</p>
              <i class="xiaoyuan"></i>
            </div>
            <div class="rtxt">
              <div>
                <p>选择学校</p>
                <p>此步骤的说明、要求及意义</p>
                <p>学生与顾问一起制作申请学校名单；顾问最后落实名单</p>
              </div>
              <div>
                <el-button>去完成</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="lcb">
            <div class="yuan">
              <p>STEP 4</p>
              <i class="xiaoyuan"></i>
            </div>
            <div class="rtxt">
              <div>
                <p>文书修改</p>
                <p>此步骤的说明、要求及意义</p>
                <p>学生提交文书，顾问给予反馈（请于暑期前完成）</p>
              </div>
              <div>
                <el-button>去完成</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="lcb">
            <div class="yuan">
              <p>STEP 5</p>
              <i class="xiaoyuan"></i>
            </div>
            <div class="rtxt">
              <div>
                <p>提交申请</p>
                <p>此步骤的说明、要求及意义</p>
                <p>学生上传材料，顾问核实材料（每年1月、11月可提交申请）</p>
              </div>
              <div>
                <el-button>去完成</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="lcb">
            <div class="yuan">
              <p>STEP 6</p>
              <i class="xiaoyuan"></i>
            </div>
            <div class="rtxt">
              <div>
                <p>申请结果</p>
                <p>此步骤的说明、要求及意义</p>
                <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
              </div>
              <div>
                <el-button>去查看</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Botit from "./Botit";
export default {
  name: "Bzlc",
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
    Botit
  }
};
</script>

<style scoped lang="scss">
.lcb {
  display: flex;
  height: 123px;
  align-items: center;
  .rtxt {
    display: flex;
    justify-content: space-between;
    width: auto;
    flex: 1;
    height: 100%;
    border-bottom:1px solid rgba(230,230,230,1);
    align-items: center;
  }
  .yuan {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: #e6e6e6;
    color: #666666;
    position: relative;
    margin-right: 80px;
    p {
      text-align: center;
      line-height: 65px;
    }
    .xiaoyuan {
      position: absolute;
      display: block;
      width: 60px;
      height: 60px;
      border: 1px solid #fff;
      box-sizing: border-box;
      border-radius: 50%;
      top: 2px;
      left: 2px;
    }
  }
}
</style>
