<template>
  <v-layout align-start d-block flex-column block>
    <data-table-base
      :title="title"
      :data="data"
      :headers="headers"
      :isloading="isloading"
      @reroll="reroll"

      @close="close"
      @clickRow="clickRow"
    >
    </data-table-base>
  </v-layout>
</template>

<script>
import DataTableBase from "@/components/tools/DataTableBase.vue";
import axios from "axios";
import firebase from "firebase/app";

require("firebase/database");

export default {
  components: { DataTableBase },
  name: "list",

  props: {
    order: { default: [] },
  },

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
          align: "right"
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
          me.ordenar( Object.values(snapshot.val()));
          me.isloading = false;
          /* me.getUrlImgPhotos(); */
          
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
        .get("/api/estudios/list")
        .then(function (response) {
          me.data = response.data;
          me.isloading = false;
        })
        .catch(function (error) {
          me.isloading = false;
          console.log(error);
        });
    }, */

    reroll() {
      this.list();
    },
    clickRow(value) {
      this.$emit('clickRow', value)
     
    },
    close() {
      this.$emit('clickCloseTable')
     
    },
  },
};
</script>

<style>
</style>