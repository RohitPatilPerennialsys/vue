<template>
  <div class="summary-container">
    <h1>Summary</h1>
    <div class="summary-flex">
      <div class="summary-card-content" v-for="i in data" v-bind:key="i">
        <h4>{{ i.name }}</h4>
        <h5>{{ i.value }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      data: [
        {
          id: "accNo",
          name: "Account Number",
          value: "67238744 "
        },
        {
          id: "incomeNo",
          name: "Income",
          value: "$20,00,000 "
        },
        {
          id: "spendsno",
          name: "Spends",
          value: "$11,00,000 "
        }
      ]
    };
  }
};
</script>
<style scoped>
@import "./style/summaryCard.css";
</style>

