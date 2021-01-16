<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="mt-16 text-center" :loading="isloading">
          <template slot="progress">
            <v-progress-linear
              color="primary"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-avatar size="128" class="mt-n16 elevation-6">
            <v-img :src="imgs(data.imagen)" />
          </v-avatar>

          <v-card-text class="text-center py-2">
            <h2 class="my-1 title">{{ data.title }}</h2>
            <h1 class="mb-2 headline">
              {{ data.firstName }} {{ data.lastName }}
            </h1>
            <v-icon color="primary">mdi-google-maps</v-icon>
            <span class="mb-1 subtitle-1"
              >{{ data.city }}/{{ data.country }}</span
            >

            <p class="font-weight-light grey--text">
              {{ data.description }}
            </p>
          </v-card-text>

          <v-divider class="mb-2" />
          <v-chip-group column class="mb-2">
            <div v-for="chip in niveles" :key="chip.id" class="pa-0 mx-auto">
              <the-chip
                :name="chip.nombre"
                :nivel="chip.nivel"
                thecolor="success"
                :isOutlined="true"
                class="mx-auto"
              />
            </div>
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

      niveles: [
        {
          id: 0,
          nivel: 0,
          nombre: "Basico",
        },
        {
          id: 1,
          nivel: 1,
          nombre: "Intermedio",
        },
        {
          id: 2,
          nivel: 2,
          nombre: "Avanzado",
        },
        {
          id: 3,
          nivel: 3,
          nombre: "Experto",
        },
      ],
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
    query(id_perfil) {
      this.isloading = true;
      let me = this;
      axios
        .get("/api/perfil/query", { params: { id: id_perfil } })
        .then(function (response) {
          me.data = response.data;
          me.isloading = false;
          console.log(me.data);
        })
        .catch(function (error) {
          me.isloading = false;
          console.log(error);
        });
    },
  },
};
</script>
