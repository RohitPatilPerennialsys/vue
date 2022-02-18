<template>
  <div class="sign-up">
    <div class="sign-up-form-container">
      <h1>Create an Account</h1>
      <form>
        <label class="sign-up-form-heading">Full Name</label>
        <input type="text" class="input-container" v-model="userData.name" />
        <label class="sign-up-form-heading">Date of Incorporation</label>
        <input type="date" class="input-container" v-model="userData.date" />
        <label class="sign-up-form-heading">Email</label>
        <input type="email" class="input-container" v-model="userData.email" />
        <label class="sign-up-form-heading">Password</label>
        <input type="password" class="input-container" v-model="userData.password" />
        <label class="sign-up-form-heading">Confirm Password</label>
        <input
          type="password"
          class="input-container"
          v-model="userData.confirmPwd"
        />
        <button class="Create-account-btn" @click.prevent="submit">
          <h1>Create an Account</h1>
        </button>
        <h3 class="existing-acc">
          Already have an account?&nbsp;<router-link to="/Login" class="highlight"
            >Login</router-link
          >
        </h3>
      </form>
    </div>
  </div>
</template>

<script>
const URL = "http://localhost:3000/users";
export default {
  data: function() {
    return {
      userData: { name: "", email: "", date: "", password: "", confirmPwd: "" },
      validUserData: { name: "", email: "", date: "", password: "", confirmPwd: "" }
    };
  },
  methods: {
    submit: function() {
      if (this.userData.name == 0) {
        console.error("Enter your name ");
      } else {
        this.validUserData.name = this.userData.name;
      }
      if (this.userData.email == 0) {
        console.error("Enter your Email");
      } else {
        this.validUserData.email = this.userData.email;
      }
      if (this.userData.date == 0) {
        console.error("Enter Date");
      } else {
        this.validUserData.date = this.userData.date;
      }
      if (this.userData.password == 0) {
        console.error("Enter Password");
      }
      if (this.userData.password == this.userData.confirmPwd) {
        this.validUserData.password = this.userData.password;
      } else {
        console.error("Password does not match");
      }
      if (this.validUserData.password != 0) {
        this.$http.post(this.$site_url+`/users`, this.userData).then(
          Response => {
            console.info(Response)
            this.$router.push("/Login");
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
};
</script>

<style scoped>
@import "./style/createAccForm.css";
</style>
