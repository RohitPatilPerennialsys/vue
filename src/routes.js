import Summary from "./Vue/dashboardSummaryTab.vue";
import Details from "./Vue/dashboardDetailsTab.vue";
import CreateAcc from "./Vue/signUpPage.vue";
import Login from "./Vue/logInPage.vue";
import editProfile from "./Vue/editProfile.vue";

export const routes = [
  { path: "/createAnAccount", component: CreateAcc },
  { path: "/Login", component: Login },
  { path: "/Login/Summary", component: Summary },
  { path: "/Login/Details", component: Details },
  { path: "/Login/editProfile", component: editProfile }
];
