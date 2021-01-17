<template>
  <v-main>
    <router-view />
    <the-footer />
  </v-main>
</template>

<script>
import TheFooter from "@/components/base/TheFooter";
export default {
  name: "DashboardCoreView",

  components: {
    TheFooter,
  },
};
</script>
