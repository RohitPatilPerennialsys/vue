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
    MicroBankPoster: MicroBankPoster,
    LoginForm: LoginForm
  }
};
</script>

<style scoped>
@import "../Components/style/logInPage.css";
</style>
