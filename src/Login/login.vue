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
                  <el-input class="input" v-model="login.username" placeholder="请输入用户名"></el-input>
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
                    :loading="loading"
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
                    <el-input class="kword" v-model="logins.kword" placeholder="请输入验证码"></el-input>
                  </el-col>
                  <el-col :span="7" :offset="1">
                    <el-button class="hqyzm" @click="getyzm()">获取验证码</el-button>
                  </el-col>
                </el-form-item>
                <div class="boxs">
                  <el-checkbox v-model="checkeds" style="color:#a0a0a0;">账户密码登录</el-checkbox>
                  <router-link to="/Registered" class="Registered">注册账号</router-link>
                </div>
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="login_methods"
                    :loadings="loadings"
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
    return {
      visible: true,
      activeName: "first",
      loading: false,
      loadings: false,
      login: {
        username: "",
        password: ""
      },
      logins: {
        phone: "",
        kword: ""
      },
      checked: false,
      checkeds: false,
      time:''
    };
  },
  computed: {
    text: function() {
      return this.time > 0 ? this.time + "s" : "获取验证码";
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleClick(tab, event) {
      this.activeName = tab.name;
    },
    login_method() {
      //发送ajax
      this.loading = true;
      if (this.login.username && this.login.password) {
        this.axios
          .get("", {
            params: {
              username: this.login.username,
              password: this.login.password
            }
          })
          .then(res => {
            const data = res.data;
            if (data.code == 200) {
              sessionStorage.setItem("user", JSON.stringify(data.user));
              //跳转到首页
              this.$router.push("/");
              this.$message.success("登录成功");
            } else if (data.code == 500) {
              this.$message.error(data.msg);
            }
            this.loading = false;
          });
      }
    },
    login_methods() {
      //发送ajax
      this.loadings = true;
      if (this.logins.phone && this.logins.kword) {
        this.axios
          .get("", {
            params: {
              phone: this.logins.phone,
              kword: this.logins.kword
            }
          })
          .then(res => {
            const data = res.data;
            if (data.code == 200) {
              sessionStorage.setItem("user", JSON.stringify(data.user));
              //跳转到首页
              this.$router.push("/");
              this.$message.success("登录成功");
            } else if (data.code == 500) {
              this.$message.error(data.msg);
            }
            this.loadings = false;
          });
      }
    },
    getyzm() {
      if (this.logins.phone) {
        this.axios
          .get("", {
            params: {
              phone: this.logins.phone
            }
          })
          .then(res => {
            const data = res.data;
            if (data.code == 200) {
            } else if (data.code == 500) {
              this.$message.error(data.msg);
            }
          });
      }
    },
    timer: function() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      }
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
    opacity: 1;
    border-radius: 10px;
    margin-top: 36px;
  }
  .hqyzm {
    display: block;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(128, 128, 128, 1);
    opacity: 1;
    border-radius: 10px;
    font-size: 26px;
    line-height: 60px;
    box-sizing: border-box;
    padding: 0;
    color: #c0c4cc;
  }
}
</style>
