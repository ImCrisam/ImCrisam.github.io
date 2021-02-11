import Vue from 'vue'
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import App from './App.vue'
import router from './router'
import axios from "axios";
/* axios.defaults.baseURL = 'http://localhost:3000'; */
axios.defaults.baseURL = '';


const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY_FIREBASE,
  authDomain: "imcrisam-portafolio.firebaseapp.com",
  databaseURL: "https://imcrisam-portafolio-default-rtdb.firebaseio.com",
  projectId: "imcrisam-portafolio",
  storageBucket: "imcrisam-portafolio.appspot.com",
  messagingSenderId: "38208393331",
  appId: "1:38208393331:web:a868d9f41747d148af5a06",
  measurementId: "G-ZRN84KW5NW"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var storage = firebase.storage();
var storageRef = storage.ref();


import vuetify from './plugins/vuetify';
import {
  iconsChips,
  iconslvls,
  
} from "@/filters/icons"
import {
  mounthYear
} from "@/filters/dates"


Vue.filter("mounthYear", mounthYear);
Vue.filter("iconsChips", iconsChips);
Vue.filter("iconslvls", iconslvls);
Vue.config.productionTip = false
export {
  axios
  
}
new Vue({
  router,
  vuetify,
  
  render: h => h(App)
}).$mount('#app')