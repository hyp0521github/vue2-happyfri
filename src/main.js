import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './style/common.less'
import './config/rem'
import ajax from './config/ajax'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
