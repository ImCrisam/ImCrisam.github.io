<template>
  <v-chip class="ma-0 mr-1 mb-1" :color="color" :outlined="outlined">
    <v-icon left> {{ niveles(nivel) }}</v-icon>
    <v-icon> {{ iconos(icon) }} </v-icon>
    {{ name }}
  </v-chip>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    nivel: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      lvls: {
        0: "mdi-star-minus-outline",
        1: "mdi-star-outline",
        2: "mdi-star",
        3: "mdi-death-star-variant",
      },
      icons: {
        "c#": "mdi-language-csharp",
        c: "mdi-language-c",
        "c++": "mdi-language-cpp",
        java: "mdi-language-java",
        py: "mdi-language-python",
        js: "mdi-language-javascript",
        php: "mdi-language-php",
        sql: "mdi-database-search",
        hc: "mdi-language-html5",
        androids: "mdi-android-studio",
        git: "mdi-git",
        scrum: "mdi-account-group",
        unity: "mdi-unity",
        ps: "mdi-adobe",
        bootstrap: "mdi-bootstrap",
        vue: "mdi-vuejs",
        express: "mdi-api",
        foundation: "mdi-language-css-3",
        vuetify: "mdi-vuetify",
        mysql: "mdi-database-outline",
        posgrate: "mdi-database",
      },
    }
  },

  methods: {
    niveles(nivel) {
      return nivel == "" ? "" : this.lvls[nivel];
    },
    iconos(icon) {
      return icon == "" ? "" : this.icons[icon];
    },
  },
};
</script>

<style>
</style>