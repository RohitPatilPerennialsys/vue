import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
Vue.prototype.$site_url = "http://localhost:3000";
// Vue.prototype.$userID = "1";
Vue.use(VueResource);
Vue.use(VueRouter);
import { routes } from "./routes";
import {store} from "./store/store"
const router = new VueRouter({
  mode: "history",
  routes
});
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
