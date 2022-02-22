<!-- ---------MICRO BANK HEADER--------- -->

<template>
  <header>
    <div class="header-left">
      <router-link
        to="/Login/Summary"
        tag="img"
        src="/src/assets/images/microBankLogoimg.svg"
        alt="microBankLogoimg"
        class="logo"
      >
      </router-link>
      <div class="vertical-divider"></div>
      <h1>ABC Pvt. Ltd.</h1>
    </div>
    <div class="header-right">
      <div class="bell">
        <img src="/src/assets/images/notificationBellImg.svg" />
      </div>
      <div class="profile">
        <p>{{ firstLetters }}</p>
      </div>
      <div class="drop-arrow">
        <router-link to="/Login/editProfile">
          <img src="/src/assets/images/dropArrowimg.svg"
        /></router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      name: [],
      firstLetters: []
    };
  },
  created() {
    this.getProfileName();
  },
  methods: {
    getProfileName: function() {
      this.$http
        .get(this.$site_url + "/users")
        .then(response => {
          return response.json();
        })
        .then(data => {
          var jsonName = data[this.$store.state.userId].name;
          var details = jsonName.split(" ");
          var FirstName = details[0];
          var lastName = details[1];
          this.firstLetters = FirstName[0] + lastName[0];
        });
    }
  }
};
</script>

<style scoped>
@import "./style/header.css";
</style>
