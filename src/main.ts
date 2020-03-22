import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//general components
import DefaultButton from "@/components/general/DefaultButton.vue";
Vue.config.productionTip = false;

// regsiter general components globally
Vue.component("DefaultButton", DefaultButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
