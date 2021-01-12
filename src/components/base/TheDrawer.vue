<template>
  <div id="app">
    <v-navigation-drawer v-model="isShowMenu"  app dark left>
      <v-divider class="mb-1" />

      <v-list dense nav>
        <v-list-item>
          <v-list-item-avatar class="align-self-center" color="white" contain>
            <v-img
              src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
              max-height="30"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="display-1" v-text="profile.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider class="mb-2" />

      <v-list expand nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="`group-${i}`"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar  app flat height="60" >
      <v-app-bar-nav-icon @click="isShowMenu = !isShowMenu">
        <v-icon large>mdi-dots-vertical </v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-light" v-text="$route.name" />
      <v-spacer />
      <div>
        <v-icon large class="mr-3">mdi-linkedin</v-icon>

        <v-icon large>mdi-github</v-icon>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
// Utilities

export default {
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShowMenu: false,
      items: [
        {
          icon: "mdi-view-dashboard",
          title: "Inicio",
          to: "/",
        },
        {
          icon: "mdi-account",
          title: "Perfil",
          to: "Perfil",
        },
        {
          title: "Lista",
          icon: "mdi-clipboard-outline",
          to: "Lista",
        },
      ],
    };
  },

  computed: {
    profile() {
      return {
        avatar: true,
        title: "avatar",
      };
    },
  },

  methods: {},
};
</script>

<style scoped>

</style>

