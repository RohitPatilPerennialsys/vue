<template>
  <div class="pop-up-wrapper">
    <slot />
    <div class="header">
      <h1>Transaction Details</h1>
      <img src="../assets/images/close-img.svg" />
    </div>
    <hr class="horizontal-line" />
    <div class="pop-up-content-container">
      <h1 class="content-title">Transaction ID</h1>
      <h2 class="content-value">2011002039111</h2>
      <h1 class="content-title">Date</h1>
      <h2 class="content-value">22-09-2021</h2>
      <h1 class="content-title">Status</h1>
      <h2 class="content-value">Approved</h2>
      <h1 class="content-title">Comment</h1>
      <h2 class="content-value">Against invoice IN00021009</h2>
      <h1 class="content-title">Transfer to</h1>
      <h2 class="content-value">XYZ corporation</h2>
      <h1 class="content-title">Amount</h1>
      <h2 class="content-value">1,780</h2>
      <h1 class="content-title">Action</h1>
      <img src="../assets/images/download-dash-2.svg" />
    </div></div
></template>

<script>
export default {};
</script>

<style scoped>
@import "./style/transactionDetailsPopup.css";
</style>
