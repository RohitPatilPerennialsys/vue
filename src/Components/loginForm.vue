<template>
  <div class="log-in">
    <div class="log-in-form-container">
      <h1>Login</h1>
      <p>Please login to your account</p>
      <form>
        <label class="login-email-or-Phone">Email or Phone</label>
        <input type="text" class="input-container" v-model="inputUserEmail" />
        <label class="login-password">Password</label>
        <input
          type="password"
          class="input-container"
          v-model="inputUserPassword"
        />
        <div class="forgot-pass">Forgot Password?</div>
        <button class="login-Btn" id="submit" @click.prevent="submitform">
          <h1>Login</h1>
        </button>
        <h3 class="exist-acc">
          Don't have an account?&nbsp;
          <router-link to="/createAnAccount" class="highlight">
            Create an Account</router-link
          >
        </h3>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      inputUserEmail: "",
      inputUserPassword: ""
    };
  },
  methods: {
    submitform: function() {
      this.$http
        .get(this.$site_url + "/users")
        .then(res => {
          for (let id in res.data) {
            if (
              res.data[id].email === this.inputUserEmail &&
              res.data[id].password === this.inputUserPassword
            ) {
              this.$store.state.userId = res.data[id].id;
              console.info(this.$store.state.userId);
              this.$router.push("/Login/Summary");
              return;
            }
          }
          alert("Check your email and password or create an account.");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.log-in {
  flex: 50%;
}
.log-in-form-container {
  margin: 160px 181px 62px 182px;
  height: 690px;
  width: 320px;
}
.log-in-form-container p {
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  color: #828282;
}

.highlight {
  font-style: normal;
  color: #d90429;
  text-decoration: none;
}
.login-email-or-Phone {
  padding-top: 32px;
  margin: 0px;
}
.login-password {
  padding-top: 24px;
  margin: 0px;
}
.login-password,
.login-email-or-Phone {
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  margin: 0px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
.input-container {
  margin-top: 8px;
  width: 320px;
  height: 50px;
  font-size: large;
  background: #e8e8e8;
  border: initial;
  border-radius: 12px;
}
.login-Btn {
  margin-top: 32px;
  width: 320px;
  height: 50px;
  padding: 0;
  background: #d90429;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  border: initial;
  cursor: pointer;
}
.login-Btn h1 {
  width: 320px;
  height: 50px;
  padding-left: 136px;
  padding-right: 135px;

  margin: 0px;
  padding-top: 14px;
  padding-bottom: 11px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
}

.forgot-pass {
  padding-top: 12px;
  margin: 0px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  text-align: right;
  justify-content: flex-end;
  color: #d90429;
}
.exist-acc {
  margin-top: 32px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #828282;
  width: 302px;
  height: 19px;
  margin-left: 10px;
  margin-right: 49px;
}
</style>
