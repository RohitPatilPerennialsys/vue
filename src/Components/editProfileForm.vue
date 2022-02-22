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
  data: function() {
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
@import "./style/editProfileForm.css";
</style>
