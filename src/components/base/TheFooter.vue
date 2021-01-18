<template>
  <v-footer
    id="dashboard-core-footer"
    class="primary"
  >
    <v-container>
      <v-row
        align="center"
        no-gutters
      >
     <!--    <v-col
          v-for="(link, i) in links"
          :key="i"
          class="text-center mb-sm-0 mb-5"
          cols="auto"
        >
          <a
            :href="link.href"
            class="mr-0 grey--text text--darken-3"
            rel="noopener"
            target="_blank"
            v-text="link.text"
          />
        </v-col>
 -->
        

        <v-col
          cols="12"
          
        >
          <div class="body-1 font-weight-light pt-6 pt-md-0 text-center while--text">
            &copy; {{ new Date().getFullYear() }}, Imcrisam.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardCoreFooter',

    data: () => ({
      links: [
        {
          href: '#',
          text: 'GitHub',
        },
        {
          href: '#',
          text: 'Twitter',
        },
        {
          href: '#',
          text: 'Linkedin',
        },
      ],
    }),
  }
</script>

<style >

</style>
