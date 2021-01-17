<template>
  <v-container id="dashboard" fluid tag="section" class="mx-auto pa-8">
    <v-btn
      color="primary"
      fab
      small
      absolute
      top
      right
      class="mt-10"
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
      <v-icon>{{ "lightDark" | iconsChips }}</v-icon>
    </v-btn>
    <v-row :style="{ backgroundColor: color }">
      <v-col cols="12" md="8" class="pa-0">
        <proyectos />
      </v-col>
      <v-col cols="12" md="4" class=" ">
        <user-profile class="mb-15" />
        <recent @clickRow="openDialog" />
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <lista @clickRow="openDialog" class="" />
    </v-row>
    <v-dialog
      v-model="dialog"
      class="d-inline-flex mx-auto elevation-0"
      max-height="100vh"
      max-width="100vh"
      color="transparent"
    >
      <v-img :src="urlImg | imgsURl" contain class="mx-auto"></v-img>
    </v-dialog>
  </v-container>
</template>

<script>
import Proyectos from "@/components/Proyectos.vue";
import UserProfile from "@/components/UserProfile.vue";
import Recent from "@/components/Recent.vue";
import Lista from "@/components/Lista.vue";


export default {
  components: { Proyectos, UserProfile, Recent, Lista },
  name: "Home",

  data() {
    return {
      dialog: false,
      theme: true,
      urlImg: "",

      bg:"rgba(231, 231, 230, 0.7)",
      bgDark:"rgba(83, 83, 83, 0.7)",

    };
  },
  computed:{
     color(){
        
        return !this.$vuetify.theme.dark? this.bg : this.bgDark
      }
  },
 
  created() {},

  methods: {
    openDialog(value) {
      this.urlImg = value.image;
      this.dialog = true;
    },
 
  },
};
</script>
<style scoped>

</style>

