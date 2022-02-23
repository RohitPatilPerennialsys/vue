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
        <input
          type="password"
          class="input-container"
          v-model="userData.password"
        />
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
          Already have an account?&nbsp;<router-link
            to="/Login"
            class="highlight"
            >Login</router-link
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
      userData: { name: "", email: "", date: "", password: "", confirmPwd: "" },
      validUserData: {
        name: "",
        email: "",
        date: "",
        password: "",
        confirmPwd: ""
      }
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
        this.$http.post(this.$site_url + `/users`, this.userData).then(
          Response => {
            console.info(Response);
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
.sign-up {
  background: white;
  flex: 50%;
}
.sign-up-form-container {
  margin: 160px 181px 62px 182px;
  height: 690px;
  width: 320px;
}
.sign-up-form-container-form-container h1 {
  height: 44px;
  padding-right: 26px;
  margin-bottom: 8px;
  margin: 0;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: #1a1a1a;
}

.sign-up-form-heading {
  padding-top: 24px;
  margin: 0px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
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

.Create-account-btn {
  margin-top: 32px;
  width: 320px;
  height: 50px;
  background: #d90429;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  cursor: pointer;
  border: initial;
}
.Create-account-btn h1 {
  padding-left: 70px;
  padding-right: 70px;
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
.existing-acc {
  margin-top: 32px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #828282;
  width: 221px;
  height: 19px;
  margin-left: 50px;
  margin-right: 49px;
}
.highlight {
  font-style: normal;
  color: #d90429;
  text-decoration: none;
}
</style>
