<template>
  <div>
    <div class="flex">
      <MicroBankPoster></MicroBankPoster>
      <CreateAccForm></CreateAccForm>
    </div>
  </div>
</template>
<script>
import MicroBankPoster from "../Components/microBankPoster.vue";
import CreateAccForm from "../Components/createAccForm.vue";
export default {
  components: {
    MicroBankPoster: MicroBankPoster,
    CreateAccForm: CreateAccForm
  }
};
</script>

<style scoped>
@import "../Components/style/signUpPage.css";
</style>
