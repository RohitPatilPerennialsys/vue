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
    MicroBankPoster,
    CreateAccForm
  }
};
</script>

<style scoped>
body {
  font-family: open sans;
  font-style: normal;
  font-weight: normal;
  margin: 0%;
  background: white !important;
}

.flex {
  display: flex;
}
</style>
