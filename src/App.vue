<template>
  <v-app id="app" :style="{ backgroundImage: 'url(' + img + ')' }">
    
    <!-- <the-drawer/> -->
    <the-view />
  </v-app>
</template>

<script>
import TheDrawer from "@/components/base/TheDrawer";

import TheView from "@/components/base/TheView";
import axios from "axios";
import firebase from "firebase/app";
require("firebase/storage");

export default {
  components: { TheDrawer, TheView },
  computed: {
    img() {
      return !this.$vuetify.theme.dark ? this.bg : this.bgDark;
    },
  },
  data() {
    return {
      bgDark: "",
      bg: "",
    };
    
  },
  created() {
    this.getUrlImgbg();
  },
  methods: {
    getUrlImgbg() {
      let me = this;
      var storage = firebase.storage();
      var pathReference = storage.ref();
       pathReference
        .child("/bg.jpg")
        .getDownloadURL()
        .then(function(url) {
          me.bg = url;
        });
      pathReference
        .child("/bg_dark.jpg")
        .getDownloadURL()
        .then(function(url) {
          me.bgDark = url;
        });
     
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
