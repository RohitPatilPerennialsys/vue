<template>
  <div class="flex">
    <MicroBankPoster></MicroBankPoster>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import MicroBankPoster from "../Components/microBankPoster.vue";
import LoginForm from "../Components/loginForm.vue";

export default {
  components: {
    MicroBankPoster,
    LoginForm
  }
};
</script>

<style scoped>
body {
  font-family: open sans;
  font-style: normal;
  font-weight: normal;
  margin: 0%;
  background: white;
}
* {
  box-sizing: border-box;
  text-decoration: none;
}

.flex {
  display: flex;
}
</style>
