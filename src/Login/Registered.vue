<template>
  <div class="logoin">
    <el-container>
      <el-header style="height:100px;">
        <TabBar></TabBar>
      </el-header>
      <el-main align="middle" justify="center">
        <div class="tanone">
          <div class="logo">
            <img src="../../static/img/logo3.png" alt>
          </div>
          <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules">
            <el-form-item>
              <el-input class="email" v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                class="input"
                v-model="ruleForm.pass"
                autocomplete="off"
                prop="pass"
                type="password"
                placeholder="6 - 16位密码，区分大小写"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input
                prop="checkPass"
                v-model="ruleForm.checkPass"
                placeholder="确认密码"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input class="phone" v-model="ruleForm.phone" placeholder="11位手机号"></el-input>
            </el-form-item>
            <div class="box">
              <el-button type="primary" :loading="loading" @click="submitForm('ruleForm')" class="denglu">注册</el-button>
              <router-link to="/Login" class="Registered">使用已有账号登录</router-link>
            </div>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>


<script>
import TabBar from "../index/TabBar";
export default {
  name: "Registered",
  props: {},
  data() {
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkphone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value.legth == 13) {
            callback(new Error("请输入正确的手机号"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      loading: false,
      ruleForm: {
        emall: "",
        pass: "",
        checkPass: "",
        iphone: ""
      },
      checked: false,
      rules: {
        email: [{ validator: checkEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkphone, trigger: "blur" }]
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {
    TabBar
  }
};
</script>

<style scoped lang="scss">
.logoin {
  background: url(../../static/img/indexbg.png);
  .el-header {
    background-color: #000;
  }
  .el-dialog {
    width: 776px;
  }
  .tanone {
    width: 776px;
    padding: 65px 81px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    opacity: 0.95;
    border-radius: 10px;
    margin: 0 auto;
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .boxs {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Registered {
    font-size: 20px;
    font-family: Segoe UI;
    font-weight: 400;
    line-height: 27px;
    color: rgba(125, 17, 17, 1);
  }
  .logo {
    margin-bottom: 50px;
  }
  .denglu {
    width:285px;
    height: 68px;
    background: rgba(125, 17, 17, 1);
    opacity: 1;
    border-radius: 10px;
  }
}
</style>
