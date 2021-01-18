import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from "axios";
/* axios.defaults.baseURL = 'http://localhost:3000'; */
axios.defaults.baseURL = 'https://guarded-sands-41116.herokuapp.com';



import vuetify from './plugins/vuetify';
import {
  iconsChips,
  iconslvls,
  
} from "@/filters/icons"
import {
  mounthYear
} from "@/filters/dates"
import {
  imgsURl
} from "@/filters/routes"

Vue.filter("mounthYear", mounthYear);
Vue.filter("iconsChips", iconsChips);
Vue.filter("iconslvls", iconslvls);
Vue.filter("imgsURl", imgsURl);
Vue.config.productionTip = false
export {
  axios
}
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')