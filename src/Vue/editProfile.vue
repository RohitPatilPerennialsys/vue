<template>
  <div>
    <heading></heading>
    <editProfileform></editProfileform>
    <Footer></Footer>
  </div>
</template>

<script>
import heading from "../Components/header.vue";
import editProfileform from "../Components/editProfileForm.vue"
import Footer from "../Components/footer.vue";
export default {
  components: {
    heading: heading,
    Footer: Footer,
    editProfileform:editProfileform
  }
};
</script>
<style scoped></style>
