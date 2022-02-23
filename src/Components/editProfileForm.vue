<template>
  <div>
    <h1>Edit Profile</h1>
    <div class="profile-form-wrapper">
      <form>
        <label class="form-label">Company Name</label>
        <input
          type="text"
          class="input-container"
          v-model="userData.companyname"
        />
        <label class="form-label">Email Address</label>
        <input type="text" class="input-container" v-model="userData.email" />
        <button class="update-btn" @click.prevent="update">
          <h2>Update</h2>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      userData: { companyname: "", email: "" }
    };
  },
  methods: {
    update: function() {
      this.$http
        .patch(this.$site_url + "/users/" + this.$store.state.userId, {
          name: this.userData.companyname,
          email: this.userData.email
        })
        .then(response => {
          alert("Update Sucessfully");
          this.$router.push("/Login/Summary");
          return response.json();
        });
    }
  }
};
</script>

<style scoped>
body {
  background: #e5e5e5;
}
h1 {
  /* Dashboard */
  margin: 32px 217px 24px 24px;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
form {
  width: 320px;
  height: 563px;
  padding-left: 24px;
}
.profile-form-wrapper {
  margin: 24px;
  height: 320px;
  margin-bottom: 270px;
  margin-right: 1140px;
  background: #ffffff;
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}
.form-label {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  padding-top: 24px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
.input-container {
  width: 320px;
  height: 50px;
  margin-top: 8px;
  font-size: large;
  background: #e8e8e8;
  border: initial;
  border-radius: 12px;
}
.update-btn {
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
.update-btn h2 {
  padding: 0px 127px 0px 127px;
  margin: 0px;
  padding-top: 14px;
  padding-bottom: 11px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
}
</style>
