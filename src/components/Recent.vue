<template>
  <card-title-text color="compuestoD" title="Certificados">
    <v-card-text>
      <v-data-table
        dense
        disable-sort
        :headers="headers"
        :items="data"
        :loading="isloading"
        @click:row="clickRow"
        :items-per-page="itemsPerRow"
        class="mt-3 mb-0 pb-0"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
        }"
      >
        <template v-slot:[`item.ver`]="{}">
          <v-icon color="compuestoE"> mdi-eye</v-icon>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions class="ma-0 pa-0">
      <v-btn block class="mx-auto" color="primary" @click="certificados">
        Ver todo
      </v-btn>
    </v-card-actions>
  </card-title-text>
</template>

<script>
import CardTitleText from "@/components/tools/CardTitleText.vue";
import axios from "axios";
import firebase from "firebase/app";
import DataTableBase from "./tools/DataTableBase.vue";
require("firebase/database");
export default {
  components: { CardTitleText },
  name: "Recent",
  props: {
    order: { default: [] },
  },

  computed: {
   
    itemsPerRow() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 5;
        case "sm":
          return 5;
        case "md":
          return 10;
        case "lg":
          return 10;
        case "xl":
          return 15;
      }
    },
  },
  data() {
    return {
      data: [],

      isloading: true,
      headers: [
        /*    {
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
        }, */
        {
          sortable: false,
          text: "Nombre",
          value: "title",

          class: "px-0 mx-0 pl-1 ",
          cellClass: "px-0  pl-1 mx-0 ",
        },
        {
          sortable: false,
          text: "Ver",
          value: "ver",
          align: "right"
        },
        /* {
          sortable: false,
          text: "En",
          value: "company",
          class: "px-0 pl-1 mx-0 ",
          cellClass: "px-0 pl-1 mx-0 ",
        }, */
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
          me.ordenar( Object.values(snapshot.val()));
          me.isloading = false;
        })
        .catch(function(error) {
          me.isloading = false;
          console.log(error);
        });
    },

    ordenar(value){
      var otros = [];
      Object.keys(this.order).forEach((element) => {
        this.order[element] = []
      });

      value.forEach((element) => {
        if (this.order.hasOwnProperty(element.category)) {
          this.order[element.category].push(element);
        } else {
          otros.push(element);
        }
      });
      
      this.data =Object.values(this.order).flat().concat(otros)

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
    certificados() {
      this.$emit("clickOpenTable");
    },
  },
};
</script>

<style></style>
