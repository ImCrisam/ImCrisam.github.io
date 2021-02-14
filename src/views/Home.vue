<template>
  <v-container id="dashboard" fluid tag="section" class="mx-auto pa-8">
    <v-btn
      color="blackWhile"
      fab
      fixed
      top
      left
      class="mt-2 ml-2 elevation-15"
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
      <v-icon large :color="$vuetify.theme.dark ? 'while' : 'black'">{{
        "lightDark" | iconsChips
      }}</v-icon>
    </v-btn>
    <v-row :style="{ backgroundColor: color }" class="pb-5 ">
      <v-col cols="12" md="4" class=" ">
        <user-profile class="m-auto" />
        <recent class="mt-1" :order="priority" @clickRow="openDialog"  @clickOpenTable="dialogTable= true" />
      </v-col>
      <v-col cols="12" md="8" class="pa-0 ">
        <proyectos :order="priority" filtro2="desarrollo" />
      </v-col>
    </v-row>
    <v-row class="mt-5"> </v-row>
    <v-dialog
      v-model="dialog"
      hide-overlay
      class="d-flex mx-auto elevation-0"
      width="initial"
      max-height="100vh"
      max-width="100vh"
      color="transparent"
    >
      <v-img :src="urlImg" contain max-height="100vh" class="mx-auto"></v-img>
    </v-dialog>
    <v-dialog
      v-model="dialogTable"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
        <lista :order="priority" @clickRow="openDialog" @clickCloseTable="dialogTable= false" class="mt-5 px-3"/>
       </v-dialog>
  </v-container>
</template>

<script>
import Proyectos from "@/components/Proyectos.vue";
import UserProfile from "@/components/UserProfile.vue";
import Recent from "@/components/Recent.vue";
import Lista from "@/components/Lista.vue";
import firebase from "firebase/app";
require("firebase/storage");
require("firebase/database");

export default {
  components: { Proyectos, UserProfile, Recent, Lista },
  name: "Home",
  props: {
    priority: {  },
  },
  data() {
    return {
      dialog: false,
      dialogTable: false,
      theme: true,
      urlImg: "",

      bg: "rgba(145, 145, 145, 0.9)",
      bgDark: "rgba(50, 50, 50, 0.9)",
    };
  },
  computed: {
    color() {
      return !this.$vuetify.theme.dark ? this.bg : this.bgDark;
    },
  },

  created() {
    
  },

  methods: {
    /*  openDialog(value) {
      this.urlImg = value.image;
      this.dialog = true;
    }, */

    openDialog(value) {
      let me = this;
      var storage = firebase.storage();
      var pathReference = storage.ref();
      pathReference
        .child(value.image)
        .getDownloadURL()
        .then(function(url) {
          me.urlImg = url;
          me.dialog = true;
        });
    },
  },
};
</script>
<style scoped>
.proyectos::-webkit-scrollbar {
  background: #ccc;
  border-radius: 4px;
}
</style>
