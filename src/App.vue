<template>
  <div id="app">
    <the-app-bar/>
    <the-drawer/>
    <the-view/>
    
  </div>
</template>


<script>
/* import {AppBar, Drawer, Footer,Settings, View } from '@/components/base'; */
import TheAppBar from '@/components/base/TheAppBar';
import TheDrawer from '@/components/base/TheDrawer';

import TheSettings from '@/components/base/TheSettings';
import TheView from '@/components/base/TheView';


export default {
  components:{TheAppBar, TheDrawer,TheSettings, TheView, }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
