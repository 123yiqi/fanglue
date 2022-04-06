<template>
  <div class="home">
    <div class="login_from">
      <div class="login_img"></div>
      <!-- <h3 class="from_title">登录</h3> -->
      <div
        v-if="open"
        class="login_input msg"
        style="color: red"
        :placeholder="text"
      >
        {{ text }}
      </div>
      <input
        class="login_input"
        v-model="username"
        value="username"
        placeholder="用户名"
      />
      <input
        class="login_input"
        v-model="password"
        placeholder="密码"
        type="password"
      />
      <div class="from_actions">
        <button
          :class="[opens ? 'active' : 'hhh']"
          type="submit"
          id="loginBtn"
          @click="submit"
        >
          登录
        </button>
      </div>
    </div>
    <div class="copyright">
      <a href="http://valueprinterp.com/index.html">北京悟略科技有限公司</a> .
      备案号：京ICP备14019621号
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      text: "",
      open: false,
      username: "",
      password: "",
      opens: false,
    };
  },
  methods: {
    fn() {
      this.password = "";
      this.username = "";
    },
    submit() {
      let uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
      let pass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]+/;
      if (uPattern.test(this.username)) {
        this.text = "用户名不存在!";

        this.open = true;
      }
      if (!pass.test(this.password)) {
        this.text = "密码必须包含数字和字母,请联系管理员重置密码!";

        this.open = true;
      }
      if (!uPattern.test(this.username) && !pass.test(this.password)) {
        this.text = "用户名或密码错误!";

        this.open = true;
      }
      if (this.username == "" || this.password == "") {
        this.text = "用户名或密码为空!";

        this.open = true;
      }
      this.fn();
      this.opens = true;
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
  color: #fff;
}
a:active {
  color: #fff;
}
.login_img {
  background-image: url(http://valueprinterp.com/images/logo.jpg);
  width: 50%;
  height: 50px;
  margin: 15px 0px;
}
.copyright {
  text-align: center;
  padding: 10px;
  color: #fff;
  font-size: 13px;
  position: absolute;
  bottom: 20px;
  /* margin-top: 100px; */
}
.home {
  width: 100vw;
  height: 100vh;
  background-color: #ff6700;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;

  background-position: 0 0;
  background-repeat: no-repeat;
}
* {
  margin: 0px;
  padding: 0px;
}
.login_from {
  width: 400px;
  padding: 10px 0px 30px;
  background-color: #fff;
  display: flex;
  /* margin: 40px; */
  flex-direction: column;
  align-items: center;
  margin: 40px auto 10px;
}
.login_input {
  width: 324px;
  height: 31px;
  margin-bottom: 15px;
  border: 1px solid #dde3ec;
  background-color: #dde3ec;
  box-shadow: none !important;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  font-size: 14px;
  line-height: 1.42857;
  outline: 0 !important;
  font-family: inherit;
  padding: 6px 12px;
}
.from_title {
  text-align: center;
  font-size: 28px;
  font-weight: 400 !important;
  color: #ea5420 !important;
  margin: 20px 0px 25px;
  line-height: 1.1;
}
#loginBtn {
  color: #fff;
  background-color: #ea5420;
  border-color: #ea5420;
  margin-top: 1px;
  font-weight: 600;
  padding: 10px 20px !important;
  line-height: 1.44;
  width: 350px;
  clear: both;
  border: 0;
  border-bottom: 1px solid #eee;
  padding: 25px 30px;
  margin-left: -30px;
  margin-right: -30px;
}
.from_actions {
  padding: 25px 55px;
  border-bottom: 1px solid #eee;
  margin-left: -30px;
  margin-right: -30px;
}
.msg {
  background-color: #fbe1e3;
  border-color: #fbe1e3;
  color: #e73d4a;
  font-size: 13px;
  line-height: 31px;
}
#loginBtn:hover {
  background: #cb4c20;
  transition: 0.2s;
}
.active {
  transition: 0.2s;
  background: #fff;
}
</style>
