<template>
  <v-app id="app" :style="{ backgroundImage: ('url(' + img + ')') }">
    <!-- <the-drawer/> -->
    <the-view />
  </v-app>
</template>


<script>
import TheDrawer from "@/components/base/TheDrawer";

import TheView from "@/components/base/TheView";
import axios from "axios";


export default {
  components: { TheDrawer, TheView },
  computed:{
      img(){
        
        return !this.$vuetify.theme.dark? axios.defaults.baseURL + this.bg:axios.defaults.baseURL + this.bgDark
      }
  },
  data() {
    return {
      bgDark: "/bg_dark.jpg",
      bg: "/bg.jpg",
    };
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
