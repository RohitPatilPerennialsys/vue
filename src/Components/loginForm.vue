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
          <h1> Login</h1>
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
  data() {
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
@import "./style/loginForm.css";
</style>
