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
            <el-form-item prop="email">
              <el-input class="email" v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item minlength="6" maxlength="16" prop="pass">
              <el-input
                class="input"
                v-model="ruleForm.pass"
                autocomplete="off"
                type="password"
                placeholder="6 - 16位密码，区分大小写"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input
                v-model="ruleForm.checkPass"
                placeholder="确认密码"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input class="phone" v-model="ruleForm.phone" placeholder="11位手机号">
                <template slot="prepend">+86</template>
              </el-input>
            </el-form-item>

            <el-form-item prop="smscode" class="code">
              <el-col :span="16">
                <el-input v-model="ruleForm.smscode" placeholder="验证码"></el-input>
              </el-col>
              <el-col :span="7" :offset="1">
                <el-button type="primary" class="hqyzm" :disabled="isDisabled" @click="sendCode()">{{buttonText}}</el-button>
              </el-col>
            </el-form-item>
            <div class="box">
              <el-button
                type="primary"
                :loading="loading"
                @click="submitForm('ruleForm')"
                class="denglu"
              >注册</el-button>
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
import axios from "axios";
export default {
  name: "Registered",
  props: {},
  data() {
    let checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        return callback(new Error("‘邮箱不能为空‘"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("‘请输入正确的邮箱格式‘"));
        }
      }, 100);
    };
    let validatePass = (rule, value, callback) => {
      const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
      if (!value) {
        return callback(new Error("请填写密码"));
      } else if (!reg.test(value)) {
        return callback(new Error("密码格式错误"));
      } else {
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
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
    let checkSmscode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空‘"));
      }
      setTimeout(() => {
        if (!Number.isInteger(+value)) {
          callback(new Error("‘请输入数字值‘"));
        } else {
          callback();
        }
      }, 100);
    };
    return {
      ruleForm: {
        email: "",
        pass: "",
        checkPass: "",
        phone: "",
        smscode: "",
        loading:''
      },
      checked: false,
      rules: {
        email: [{ validator: checkEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkphone, trigger: "blur" }],
        smscode: [{ validator: checkSmscode, trigger: "change" }]
      },
      buttonText: "发送验证码",
      isDisabled: false, // 是否禁止点击发送验证码按钮，
      flag: true
    };
  },
  computed: {
     loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    // 获取验证码
    sendCode() {
      let time = 60;
      this.buttonText = "已发送";
      this.isDisabled = true;
      this.loading = true;
      if (this.flag) {
        this.flag = false;
        let timer = setInterval(() => {
          time--;
          this.buttonText = time + " 秒";
          if (time === 0) {
            clearInterval(timer);
            this.buttonText = "重新获取";
            this.isDisabled = false;
            this.flag = true;
          }
        }, 1000);
      }
      return this.$store.dispatch("phoneCode", Object.assign(this.ruleForm.phone));
    },
    // <!--提交注册-->
    submitForm() {
      return this.$store.dispatch("loginUser", Object.assign(this.ruleForm));
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
    width: 285px;
    height: 68px;
    background: rgba(125, 17, 17, 1);
    opacity: 1;
    border-radius: 10px;
  }
  .el-select .el-input {
    width: 160px !important;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .hqyzm {
    display: block;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(128, 128, 128, 1);
    border-radius: 10px;
    font-size: 26px;
    line-height: 60px;
    box-sizing: border-box;
    padding: 0;
    color: #c0c4cc;
  }
}
</style>
