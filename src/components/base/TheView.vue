<template>
  <v-main>

    <router-view />
    <dashboard-core-footer />
  </v-main>
</template>

<script>
import TheFooter from '@/components/base/TheFooter';
  export default {
    name: 'DashboardCoreView',

    components: {
      DashboardCoreFooter: TheFooter,
    },
  }
</script>
