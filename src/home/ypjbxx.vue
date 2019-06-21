<template>
  <div>
    
      <el-form ref="basic" :model="basic" status-icon :rules="rules" label-position='left' class="biaodan">
 
          <el-form-item label="学生姓名 Student Name" label-position='left'>
            <el-input v-model="basic.name"></el-input>
          </el-form-item>
          <el-form-item label-position='left' label="学生英文名 English Name" >
            <el-input v-model="basic.enname"></el-input>
          </el-form-item>
    

        <el-form-item label="出生年月日 Date of Birth">
          <el-date-picker v-model="basic.birthday" type="date" placeholder="请选择出生年月日"></el-date-picker>
        </el-form-item>
        <el-form-item label="在读学校 School Name">
          <el-input v-model="basic.inschool"></el-input>
        </el-form-item>
        <el-form-item label="毕业年份 Graduation Year">
          <el-date-picker v-model="basic.finishyear" type="year" placeholder="选择年"></el-date-picker>
        </el-form-item>

        <el-form-item label="国籍 Nationality">
          <el-select v-model="basic.country" placeholder="请选择国籍">
            <el-option label="中华人民共和国" value="中华人民共和国"></el-option>
            <el-option label="日本" value="日本"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学校课程体制 School Curriculum">
          <el-select v-model="basic.system" placeholder="学校课程体制">
            <el-option label="3年制" value="3年制"></el-option>
            <el-option label="全日制" value="全日制"></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="电话 Phone Number" prop="phone">
          <el-input v-model.number="basic.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>-->

        <el-form-item label="学校所在城市 School Location">
          <el-cascader :options="options" v-model="basic.city" :show-all-levels="false"></el-cascader>
        </el-form-item>
        <el-form-item label="在读年级 Current Grade">
          <el-select v-model="basic.ingrade" placeholder="学校课程体制">
            <el-option label="7" value="7"></el-option>
            <el-option label="8" value="8"></el-option>
            <el-option label="9" value="9"></el-option>
            <el-option label="10" value="10"></el-option>
            <el-option label="11" value="11"></el-option>
            <el-option label="12" value="12"></el-option>
            <el-option label="13" value="13"></el-option>
            <el-option label="14" value="14"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学生性别 Gender">
          <el-radio v-model="basic.sex" label="1">男</el-radio>
          <el-radio v-model="basic.sex" label="2">女</el-radio>
        </el-form-item>
        <!-- <el-form-item label="邮箱 Email" prop="email">
          <el-input v-model="basic.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>-->
        <el-form-item></el-form-item>
        <el-form-item></el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="tijiao">立即创建</el-button>
        </el-form-item>
      </el-form>
   
  </div>
</template>

<script>
import options from "../assets/cs2";
export default {
  name: "ypjbxx",
  data() {
    let checkphone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(+value)) {
          callback(new Error("请输入数字值"));
        } else {
          const regs = /^1[3|4|5|7|8][0-9]\d{8}$/;
          if (regs.test(value)) {
            callback();
          } else {
            return callback(new Error("请输入正确的手机号"));
          }
        }
      }, 1000);
    };
    return {
      options: options, //存放城市数据,
      rules: {
        phone: [{ validator: checkphone, trigger: "blur" }]
      }
    };
  },
  computed: {
    basic() {
      return this.$store.state.List.basic;
    },
    // list() {
    //   return this.$store.state.List;
    // }
  },
  mounted: function() {
    this.getPredict();
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      //  getPredict()
    },
    getPredict() {
      //发送ajax
      return this.$store.dispatch("Predict");
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  font-size: 24px;
  font-family: Segoe UI;
  font-weight: 600;
  line-height: 51px;
  color: rgba(77, 77, 77, 1);
  margin-top: 24px;
}
.biaodan {
  margin-top: 60px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    .el-form-item {
      width: 21%;
      margin-right: 2%;
      .el-form-item__content {
        .el-input__inner {
          display: block;
          width: 100%;
          border: none;
          border-bottom: 1px solid #f6f6;
        }
      }
    
  }
  .tijiao {
    width: 220px;
    height: 60px;
    background: rgba(179, 24, 24, 1);
    box-shadow: 0px 3px 6px rgba(204, 10, 10, 0.3);
    opacity: 1;
    border-radius: 10px;
    color: #fff;
    text-align: center;
    border: none;
    margin-top: 40px;
  }
}
</style>
