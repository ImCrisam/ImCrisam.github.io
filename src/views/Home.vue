<template>
  <v-container id="dashboard" fluid tag="section" class="mx-auto">
    <v-row class="mx-2">
      <v-col cols="12">
        <proyectos> </proyectos>
      </v-col>

      <v-col cols="12">
        <card-title-text
          color="warning"
          title="Certificados Recientes"
          subTitle=""
        >
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="data"
              :loading="isloading"
              hide-default-footer
            />
          </v-card-text>
          <v-card-actions class="mt-0 pt-0">
            <v-btn block outlined :to="{name:'Lista'}">Mas</v-btn>
          </v-card-actions>
        </card-title-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardTitleText from "@/components/CardTitleText.vue";
import Proyectos from "@/components/Proyectos.vue";
import axios from "axios";

export default {
  components: { CardTitleText, Proyectos },
  name: "Home",

  data() {
    return {
      data: [],
      isloading: true,
      headers: [
        {
          sortable: false,
          text: "fecha",
          value: "date",
        },
        {
          sortable: true,
          text: "Tipo",
          value: "type",
        },
        {
          sortable: false,
          text: "Nombre",
          value: "title",
          align: "center",
        },
        {
          sortable: false,
          text: "Duracion",
          value: "duration",
          align: "center",
        },
        {
          sortable: false,
          text: "",
          value: "company",
          align: "center",
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
        .get("/api/estudios/recent")
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
