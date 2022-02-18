<template>
  <nav class="navigation-bar ">
    <ul>
      <li>
        <router-link to="/Summary" active-class="summary-active-tab"
          >Summary</router-link
        >
      </li>
      <li>
        <router-link to="/Details" active-class="details-active-tab"
          >Details</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>

<style scoped>
@import "./style/navBar.css";
</style>
