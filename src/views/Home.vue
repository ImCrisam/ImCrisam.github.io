<template>
  <v-container id="dashboard" fluid tag="section" class="mx-auto pa-8">
    <v-btn color="primary" fab small absolute top right class="mt-10"  @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon>{{'lightDark'|iconsChips}}</v-icon>
    </v-btn>
    <v-row>
      <v-col cols="12" md="8" class="pa-0">
        <proyectos />
      </v-col>
      <v-col cols="12" md="4">
        <user-profile class="mb-15" />
        <recent @clickRow="openDialog" />
      </v-col>
    </v-row>
    <v-row>
      <lista @clickRow="openDialog" class="mx-4 mt-5" />
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
    };
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
