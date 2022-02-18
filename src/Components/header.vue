<!-- ---------MICRO BANK HEADER--------- -->

<template>
  <header>
    <div class="header-left">
      <img
        src="/src/assets/images/microBankLogoimg.svg"
        alt="microBankLogoimg"
      />
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
        <img src="/src/assets/images/dropArrowimg.svg" />
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
