<template>
  <div class="logoin">
    <el-container>
      <el-header style="height:100px;">
        <TabBar></TabBar>
      </el-header>
      <el-main align="middle" justify="center">
        <div v-if="visible" class="tanone">
          <div class="logo">
            <img src="../../static/img/logo3.png" alt>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="账号密码登录" name="first">
              <el-form ref="form" :model="login">
                <el-form-item>
                  <el-input class="input" v-model="login.email" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="input"
                    v-model="login.password"
                    type="password"
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
                <div class="box">
                  <el-checkbox v-model="checked" style="color:#a0a0a0;">账户密码登录</el-checkbox>
                  <router-link to="/Registered" class="Registered">注册账号</router-link>
                </div>
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="login_method"
                    :loading="loadingss"
                    class="denglu"
                  >登录</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="手机号登录" name="fourth">
              <el-form ref="forms" :model="logins">
                <el-form-item>
                  <el-input class="phone" v-model="logins.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-col :span="16">
                    <el-input class="kword" v-model="logins.code" placeholder="请输入验证码"></el-input>
                  </el-col>
                  <el-col :span="7" :offset="1">
                    <el-button class="hqyzm" :disabled="isDisabled" @click="sendCode()">{{buttonText}}</el-button>
                  </el-col>
                </el-form-item>
                <div class="boxs">
                  <el-checkbox v-model="checkeds" style="color:#a0a0a0;">账户密码登录</el-checkbox>
                  <router-link to="/Registered" class="Registered">注册账号</router-link>
                </div>
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="setlogins()"
                    :loading="loadings"
                    class="denglu"
                  >登录</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TabBar from "../index/TabBar";

export default {
  name: "Login",
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
      visible: true,
      activeName: "first",
      login: {
        email: "",
        password: ""
      },
      logins: {
        phone: "",
        code: ""
      },
      checked: false,
      checkeds: false,
      buttonText: "发送验证码",
      isDisabled: false, // 是否禁止点击发送验证码按钮，
      flag: true,
      rules: {
        email: [{ validator: checkEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: checkphone, trigger: "blur" }]
      },
    };
  },
  computed: {
    loadings () {
      return this.$store.state.loadings
    },
    loadingss () {
      return this.$store.state.loadingss
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    // 切换登录方式
    handleClick(tab, event) {
      this.activeName = tab.name;
    },
    // 账号密码登录
    login_method() {
      //发送ajax
      return this.$store.dispatch("Elogins", Object.assign(this.login));
    },
    // 手机号登录
    setlogins() {
      return this.$store.dispatch("logins", Object.assign(this.logins));
    },

    // 发送验证码
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
      return this.$store.dispatch(
        "phoneCode",
        Object.assign(this.logins.phone)
      );
    }
  },
  components: {
    TabBar
  }
};
</script>

<style scoped lang="scss">
body {
  height: 100%;
  overflow: hidden;
}
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
    height: 801px;
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
    width: 615px;
    height: 68px;
    background: rgba(125, 17, 17, 1);
    border-radius: 10px;
    margin-top: 36px;
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
