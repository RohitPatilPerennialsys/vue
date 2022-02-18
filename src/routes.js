import Summary from "./Vue/dashboardSummaryTab.vue";
import Details from "./Vue/dashboardDetailsTab.vue";
import CreateAcc from "./Vue/signUpPage.vue";
import Login from "./Vue/logInPage.vue";

export const routes = [
  { path: "/Summary", component: Summary },
  { path: "/Details", component: Details },
  { path: "/createAnAccount", component: CreateAcc },
  { path: "/Login", component: Login }
];
