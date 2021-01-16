<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <card-title-text title="Perfil">
          <v-form class="mt-12">
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" sm="5" md="12">
                  <v-text-field
                    dense
                    label="First Name"
                    outlined
                    disabled
                    class="headline font-weight-blod"
                    :value="data.firstName"
                  />
                </v-col>

                <v-col cols="10" sm="5" md="10">
                  <v-text-field
                    dense
                    outlined
                    label="Last Name"
                    disabled
                    class="headline font-weight-blod"
                    :value="data.lastName"
                  />
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    dense
                    outlined
                    label="Edad"
                    disabled
                    class="headline font-weight-blod"
                    :value="edad"
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    dense
                    outlined
                    label="Pais"
                    disabled
                    class="headline font-weight-blod"
                    :value="data.country"
                  />
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    dense
                    outlined
                    label="Ciudad"
                    disabled
                    class="headline font-weight-blod"
                    :value="data.city"
                  />
                </v-col>
              </v-row>
              <!-- <v-row v-for="(item, index) in profile.redes" :key="index">
                <v-col cols="8">
                  <v-text-field
                    dense
                    outlined
                    class="headline font-weight-blod"
                    disabled
                    :label="item.name"
                    :value="item.link"
                  />
                </v-col>
                <v-col cols="4">
                  <v-btn tile block color="success">
                    <v-icon left>{{ item.icon }} </v-icon>
                    {{ item.name }}
                  </v-btn>
                </v-col>
              </v-row> -->
            </v-container>
          </v-form>
        </card-title-text>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mt-16 text-center">
          <v-avatar size="128" class="mt-n16 elevation-6 text-center">
            <v-img :src="imgs(data.imagen)" />
          </v-avatar>
          <v-card-text class="text-center">
            <h1 class="font-weight-light mb-3 black--text">
              {{ data.firstName }} {{ data.lastName }}
            </h1>
            <h3 class="mb-1 grey--text">{{ data.title }}</h3>
            <p class="font-weight-light grey--text">
              {{ data.description }}
            </p>
            <v-divider class="mb-2" />

            <v-chip-group column class="mb-2">
              <v-chip class="ma-auto text-center" color="primary" outlined>
                <v-icon left> {{ niveles(0) }}</v-icon>
                Basico
              </v-chip>
              <v-chip class="ma-auto" color="success" outlined>
                <v-icon left> {{ niveles(1) }}</v-icon>
                Intermedio
              </v-chip>
              <v-chip class="ma-auto" color="success" outlined>
                <v-icon left>{{ niveles(2) }}</v-icon>
                Avanzado
              </v-chip>
              <v-chip class="ma-auto" color="success" outlined>
                <v-icon left> {{ niveles(3) }} </v-icon>
                Experto
              </v-chip>
            </v-chip-group>

            <v-alert
              color="primary"
              border="left"
              elevation="2"
              colored-border
              icon="mdi-code-tags-check"
            >
              <v-chip-group column>
                 <the-chip
                  v-for="chip in data.languages_code"
                  :key="chip.id"
                  :name="chip.nombre"
                  :icon="chip.icon"
                  :nivel="chip.nivel"
                  thecolor="success"
                  :isOutlined="true"
                  class="ma-0 mr-1 mb-1"
                />
               
              </v-chip-group>
            </v-alert>

            <v-alert
              color="cyan"
              border="left"
              elevation="2"
              colored-border
              icon="mdi-tools"
            >
              <v-chip-group column>
                <the-chip
                  v-for="chip in data.tools_code"
                  :key="chip.id"
                  :name="chip.nombre"
                  :icon="chip.icon"
                  :nivel="chip.nivel"
                  thecolor="primary"
                  :isOutlined="true"
                  class="ma-0 mr-1 mb-1"
                />
              </v-chip-group>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardTitleText from "@/components/CardTitleText.vue";
import axios from "axios";
import TheChip from "@/components/tools/TheChip.vue";
export default {
  components: { CardTitleText, TheChip },
  name: "UserProfile",
  computed: {
    edad() {
      var hoy = new Date();
      var cumpleanos = new Date(this.data.date);
      var edad = hoy.getFullYear() - cumpleanos.getFullYear();
      var m = hoy.getMonth() - cumpleanos.getMonth();

      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
      }
      return edad;
    },
  },
  data() {
    return {
      data: {},
      isloading: true,

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
    niveles(nivel) {
      return this.lvls[nivel];
    },
    iconos(icon) {
      return this.icons[icon];
    },
    query(id_perfil) {
      this.isloading = true;
      let me = this;
      axios
        .get("/api/perfil/query", { params: { id: id_perfil } })
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
