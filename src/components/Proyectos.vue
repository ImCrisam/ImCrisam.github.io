<template>
  <v-container
    color="primary"
    flat
    outlined
    :loading="isloading"
    
     class=" mt-2" 
      style="height: 100% "
     
  >
    <v-row class="">
      <v-col cols="12" class="mx-auto text-center">
        <v-card class="mx-0 px-0 py-1">
          <span class="mx-auto headline text-center"> Mis Proyectos </span>
        </v-card>
      </v-col>
    </v-row>
    <v-row class=" m-auto" >
      <template v-if="isloading" >
        <v-col
          v-for="item in 3"
          :key="item.id"
          cols="12"
          md="6"
          lg="6"
          xl="4"
          class="mx-auto"
        >
          <v-skeleton-loader
            type=" avatar, article, chip, actions"
          ></v-skeleton-loader>
        </v-col>
      </template>
      <template v-else>
        <v-col
          v-for="item in proyectos"
          :key="item.id"
          cols="12"
          md="6"
          lg="6"
          xl="4"
          class="mx-auto"
        >
         
            <card-avatar
              :image="item.url_img"
              :title="item.title"
              :description="item.description"
              :category="item.category"
              :link="item.link"
              :repo="item.repo"
              :date="item.date"
              :chips="item.chips_code"
              
            >
            </card-avatar>
          
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import CardAvatar from "@/components/tools/CardAvatar.vue";
import axios from "axios";
import firebase from "firebase/app";
require("firebase/database");
require("firebase/storage");

export default {
  name: "Proyectos",
  components: { CardAvatar },
  props: {
    order: { default: [] },
  },
  computed: {
    proyectos() {
      var dataFilter1 = [];
      var dataFilter2 = [];
      var dataNoFilter = [];
      this.data.forEach((element) => {
        if (element.sub_category == this.filtro1) {
          dataFilter1.push(element);
        } else if (element.sub_category == this.filtro2) {
          dataFilter2.push(element);
        } else {
          dataNoFilter.push(element);
        }
      });

      return dataFilter1.concat(dataFilter2).concat(dataNoFilter);
    },
  },

  data() {
    return {
      data: {},
      isloading: true,
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
        .ref("proyectos")
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

    getUrlImgs() {
      let me = this;
      var storage = firebase.storage();
      var pathReference = storage.ref();
      for (let i = 0; i < this.data.length; i++) {
        pathReference
          .child(this.data[i].imagen)
          .getDownloadURL()
          .then(function(url) {
            me.data[i].url_img = url;
          });
      }
    },

    ordenar(value){
      var otros = [];
      Object.keys(this.order).forEach((element) => {
        this.order[element] = []
      });

      value.forEach((element) => {
        if (this.order.hasOwnProperty(element.sub_category)) {
          this.order[element.sub_category].push(element);
        } else {
          otros.push(element);
        }
      });
      
      this.data =Object.values(this.order).flat().concat(otros)
      this.getUrlImgs();

    },
    /* list() {
      this.isloading = true;
      let me = this;
      axios
        .get("/api/proyectos/list")
        .then(function (response) {
          me.data = response.data;
          me.isloading = false;
        })
        .catch(function (error) {
          me.isloading = false;
          console.log(error);
        });
    }, */
  },
};
</script>

<style></style>
