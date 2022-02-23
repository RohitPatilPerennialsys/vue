<template>
  <div>
    <heading></heading>
    <div class="dash-title">Dashboard</div>
    <NavBar></NavBar>
    <TransactionTable></TransactionTable>
    <Footer></Footer>
  </div>
</template>

<script>
import heading from "../Components/header.vue";
import NavBar from "../Components/navBar.vue";
import Footer from "../Components/footer.vue";
import TransactionTable from "../Components/transactionTable.vue";

export default {
  components: {
    heading,
    TransactionTable,
    NavBar,
    Footer
  }
};
</script>

<style scoped>
body {
  margin: 0%;
  background: #e5e5e5 !important;
}

.dash-title {
  /* Dashboard */
  margin: 32px 217px 24px 12px;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
@media screen and (min-width: 1016px) {
  .dash-title {
    margin-left: 24px;
  }
}
</style>
