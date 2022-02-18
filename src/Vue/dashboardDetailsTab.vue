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
    heading: heading,
    TransactionTable: TransactionTable,
    NavBar: NavBar,
    Footer: Footer
  }
};
</script>

<style scoped>
@import "../Components/style/dashboardDetailsTab.css";
</style>
