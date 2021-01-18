<template>
  <v-layout align-start d-block flex-column block>
    <data-table-base
      :title="title"
      :data="data"
      :headers="headers"
      :isloading="isloading"
      @reroll="reroll"
      @clickRow="clickRow"
    >
    </data-table-base>
  </v-layout>
</template>

<script>
import DataTableBase from "@/components/tools/DataTableBase.vue";
import axios from "axios";

export default {
  components: { DataTableBase },
  name: "list",

  data() {
    return {
      title: "Certificados",
      data: [],
      isloading: true,
      headers: [
        {
          sortable: true,
          text: "fecha",
          value: "date",
        },
        {
          sortable: true,
          text: "Tipo",
          value: "type",
        },
        {
          sortable: true,
          text: "Categoria",
          value: "category",
        },
        {
          sortable: true,
          text: "Nombre",
          value: "title",
        },
        {
          sortable: true,
          text: "Duracion (h)",
          value: "duration",
        },
        {
          sortable: false,
          text: "En",
          value: "company",
          align: "center",
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
        .get("/api/estudios/list")
        .then(function (response) {
          me.data = response.data;
          me.isloading = false;
        })
        .catch(function (error) {
          me.isloading = false;
          console.log(error);
        });
    },

    reroll() {
      this.list();
    },
    clickRow(value) {
      this.$emit('clickRow', value)
    },
  },
};
</script>

<style>
</style>