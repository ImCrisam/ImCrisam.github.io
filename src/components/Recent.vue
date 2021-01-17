<template>
  <card-title-text color="warning" title="Certificados Recientes" subTitle="">
    <v-card-text>
      <v-data-table
        dense
        disable-sort
        :headers="headers"
        :items="data"
        :loading="isloading"
        hide-default-footer
      />
    </v-card-text>
 
  </card-title-text>
</template>

<script>
import CardTitleText from "@/components/tools/CardTitleText.vue";
import axios from "axios";
export default {
  components: { CardTitleText },
  name: "Recent",

  data() {
    return {
      data: [],
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
          class: "px-0 mx-0 ",
          cellClass: "px-0  mx-0 ",
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
    },
  },
};
</script>

<style>
</style>