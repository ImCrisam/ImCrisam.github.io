<template>
  <v-card color="" flat outlined class=" mt-2" :loading="isloading" min-height="100">
    <template slot="progress">
      <v-progress-linear
        color="primary"
        height="10"
        
        indeterminate
      ></v-progress-linear>
    </template>
    <!-- <v-sheet class="mx-auto">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="n in 7" :key="n" v-slot="{ active, toggle }" >
          <span class="mx-auto">
            <v-btn
              class="mx-1"
              :input-value="active"
              active-class="purple white--text"
              depressed
              rounded
              @click="toggle"
            >
              Options {{ n }}
            </v-btn>
          </span>
        </v-slide-item>
      </v-slide-group>
    </v-sheet> -->

    <v-item-group class="mx-2 ">
        <v-row>
          <v-col v-for="item in data" :key="item.id" cols="12" md="6" lg="4" xl="3" class="mx-auto">
            <v-item v-slot="{ toggle }" >
              <card-avatar
                  :image="imgs(item.imagen)"
                  :title="item.title"
                  :description="item.description"
                  :category="item.category"
                  :link="item.link"
                  :repo="item.repo"
                  :date="item.date"
                  :chips="item.chips_code"
                  @click="toggle"
                >
                
                </card-avatar>
              
            </v-item>
          </v-col>
        </v-row>
        
    </v-item-group>
  </v-card>

</template>

<script>
import CardAvatar from "@/components/CardAvatar.vue";
import axios from "axios";

export default {
  name: "Proyectos",
  components: { CardAvatar },
  data() {
    return {
      data: {},
      isloading: true,

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
    };
  },
  created() {
    this.query(1);
  },
  methods: {
    imgs(url) {
      console.log(axios.defaults.baseURL + url);
      return axios.defaults.baseURL + url;
    },

    iconos(icon) {
      return this.icons[icon];
    },
    query(id_perfil) {
      this.isloading = true;
      let me = this;
      axios
        .get("/api/proyectos/list")
        .then(function (response) {
          me.data = response.data;
          me.isloading = false;
        })
        .catch(function (error) {
          me.isloading = false;
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>