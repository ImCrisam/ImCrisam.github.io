<template>
  <card-title-text color="compuestoD" title="Certificados Recientes" subTitle="">
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
export default {
  components: { CardTitleText },
  name: "Recent",
  computed:{
    dataTable(){
      return this.data.slice(0,5)
    }
  },
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
    clickRow(value) {
      this.$emit("clickRow", value);
    },
  },
};
</script>

<style>
</style>