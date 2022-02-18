<template>
  <div>
    <heading></heading>
    <div class="dash-title">Dashboard</div>
    <Navbar></Navbar>
    <SummaryCard></SummaryCard>
    <div class="serviceMsg">
      <h1>Services</h1>
      <p>Micro bank services for you</p>
    </div>
    <CurrentServices></CurrentServices>
    <AvailableServices></AvailableServices>
    <Footer></Footer>
  </div>
</template>

<script>
import heading from "../Components/header.vue";
import Navbar from "../Components/navBar.vue";
import SummaryCard from "../Components/summaryCard.vue";
import CurrentServices from "../Components/currentServices.vue";
import AvailableServices from "../Components/availableServices.vue";
import Footer from "../Components/footer.vue";
export default {
  components: {
    heading: heading,
    Navbar: Navbar,
    SummaryCard: SummaryCard,
    CurrentServices: CurrentServices,
    AvailableServices: AvailableServices,
    Footer: Footer
  }
};
</script>
<style scoped>
@import "../Components/style/dashboardSummaryTab.css";
</style>
