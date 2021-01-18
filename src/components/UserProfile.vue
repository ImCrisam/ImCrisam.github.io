<template>
  <v-card class="text-center mt-16" :loading="isloading">
    <template slot="progress">
      <v-progress-linear
        color="primary"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-app-bar
      class="d-flex flex-row-reverse h-0"
      tile
      flat
      height="0"
      outlined
      dense
      color="transparent"
    >
      <div class="d-flex flex-column mt-auto pt-2">
        <v-btn
          v-for="item in redes"
          :key="item.id"
          fab
          small
          class="mb-2 elevation-2"
          :href="item.link"
          target="_blank"
          
        >
          <v-icon :color="!$vuetify.theme.dark ? 'primary' : 'while'" large>{{
            item.icon | iconsChips
          }}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-hover v-slot="{ hover }">
    <v-avatar size="170" class="mt-n16 elevation-2 rounded-t ml-6">
      <v-img :src="data.imagen | imgsURl">
        <v-expand-transition>
            <v-img v-if="hover" :src="data.imagen2 | imgsURl"/>
         
        </v-expand-transition>
      </v-img>
    </v-avatar>
    </v-hover>
    <v-card-text class="text-center py-2" style="min-height: 150px">
      <h2 class="my-1 title px-16">{{ data.title }}</h2>
      <h1 class="mb-2 headline px-16">
        {{ data.firstName }} {{ data.lastName }}
      </h1>
      <v-icon color="primary">{{ "location" | iconsChips }}</v-icon>
      <span class="mb-1 subtitle-1">{{ data.city }}/{{ data.country }}</span>

      <p class="subtitle-2 text-justify px-16 mt-2">
        {{ data.description }}
      </p>
    </v-card-text>

    <v-divider class="mb-2" />
    <v-chip-group column class="mb-2">
      <div v-for="chip in niveles" :key="chip.id" class="pa-0 mx-auto">
        <the-chip
          :name="chip.nombre"
          :nivel="chip.nivel"
          thecolor="primary"
          :isOutlined="!$vuetify.theme.dark"
          class="mx-auto"
        />
      </div>
    </v-chip-group>
    <v-alert
      :color="!$vuetify.theme.dark ? 'compuestoC' : 'compuestoC'"
      border="left"
      elevation="2"
      colored-border
      :icon="'code' | iconsChips"
    >
      <v-chip-group column>
        <the-chip
          v-for="item in languages"
          :key="item.id"
          :name="item.nombre"
          :icon="item.icon"
          :nivel="item.nivel"
          thecolor="compuestoC"
          :isOutlined="!$vuetify.theme.dark"
          class="ma-0 mr-1 mb-1"
        />
      </v-chip-group>
    </v-alert>
    <v-alert
      color="compuestoB"
      border="left"
      elevation="2"
      colored-border
      :icon="'tools' | iconsChips"
    >
      <v-chip-group column>
        <the-chip
          v-for="item in tools"
          :key="item.id"
          :name="item.nombre"
          :icon="item.icon"
          :nivel="item.nivel"
          thecolor="compuestoB"
          :isOutlined="!$vuetify.theme.dark"
          class="ma-0 mr-1 mb-1"
        />
      </v-chip-group>
    </v-alert>
  </v-card>
</template>

<script>
import CardTitleText from "@/components/tools/CardTitleText.vue";
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
      redes: {},
      languages: {},
      tools: {},

      isloading: true,
      isloadingRedes: true,
      isloadingLanguages: true,
      isloadingTools: true,
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
    this.listRedes();
    this.listLanguages();
    this.listTools();
  },
  methods: {
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
    listRedes() {
      this.isloadingRedes = true;
      let me = this;
      axios
        .get("/api/perfil/redes")
        .then(function (response) {
          me.redes = response.data;
          me.isloadingRedes = false;
        })
        .catch(function (error) {
          me.isloadingRedes = false;
          console.log(error);
        });
    },
    listLanguages() {
      this.isloadingLanguages = true;
      let me = this;
      axios
        .get("/api/perfil/listLanguages")
        .then(function (response) {
          me.languages = response.data;
          me.isloadingLanguages = false;
        })
        .catch(function (error) {
          me.isloadingLanguages = false;
          console.log(error);
        });
    },
    listTools() {
      this.isloadingTools = true;
      let me = this;
      axios
        .get("/api/perfil/listTools")
        .then(function (response) {
          me.tools = response.data;
          me.isloadingTools = false;
        })
        .catch(function (error) {
          me.isloadingTools = false;
          console.log(error);
        });
    },
  },
};
</script>
