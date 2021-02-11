<template>
  <card-title-text
    color="compuestoD"
    title="Certificados"
    :subTitle="filtro1"
  >
    <v-card-text>
      <v-data-table
        dense
        disable-sort
        :headers="headers"
        :items="dataTable"
        :loading="isloading"
        @click:row="clickRow"
        hide-default-footer
        class="mt-3"
      />
    </v-card-text>
  </card-title-text>
</template>

<script>
import CardTitleText from "@/components/tools/CardTitleText.vue";
import axios from "axios";
import firebase from "firebase/app";
require("firebase/database");
export default {
  components: { CardTitleText },
  name: "Recent",
  computed: {
    dataTable() {
      return this.data.filter(estudio => (estudio.category == this.filtro1 || estudio.category == this.filtro2 || estudio.category == this.filtro3 ));
    }, 
  },
  data() {
    return {
      data: [],
      filtro1 : "web",
      filtro2 : "desarrollo",
      filtro3 : "",
      
      
      isloading: true,
      headers: [
        {
          sortable: false,
          text: "Tipo",
          value: "type",

          class: "px-0 mx-0 ",
          cellClass: "px-0  mx-0",
        },
        {
          sortable: false,
          text: "Horas",
          value: "duration",
          class: "px-0 mx-0 pl-2",
          cellClass: "px-0  mx-0 pl-2",
        },
        {
          sortable: false,
          text: "Nombre",
          value: "title",
          class: "px-0 mx-0 pl-1 ",
          cellClass: "px-0  pl-1 mx-0 ",
        },
        {
          sortable: false,
          text: "En",
          value: "company",
          class: "px-0 pl-1 mx-0 ",
          cellClass: "px-0 pl-1 mx-0 ",
        },
      ],
    };
  },
  created() {
    this.list();
  },
  methods: {
    list() {
      this.isloading = true;
      let me = this;
      firebase
        .database()
        .ref("estudios")
        .once("value")
        .then((snapshot) => {
          me.data = Object.values(snapshot.val());
          me.isloading = false;
          
        })
        .catch(function(error) {
          me.isloading = false;
          console.log(error);
        });
    },
    /* list() {
      this.isloading = true;
      let me = this;
      axios
        .get("/api/estudios/recent")
        .then(function (response) {
          me.data = response.data;
          me.isloading = false;
        })
        .catch(function (error) {
          me.isloading = false;
          console.log(error);
        });
    }, */
    clickRow(value) {
      this.$emit("clickRow", value);
    },
  },
};
</script>

<style></style>
