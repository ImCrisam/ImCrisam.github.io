<template>
  <v-container id="dashboard" fluid tag="section" class="mx-auto">
    <v-row>
      <v-col cols="12" md="8">
        <proyectos />
      </v-col>
      <v-col cols="12" md="4">
        <user-profile />
        <recent />
      </v-col>
    </v-row>
    <v-row>
      <lista @clickRow="openDialog" />
    </v-row>
    <v-dialog
      v-model="dialog"
      class="d-inline-flex mx-auto elevation-0"
      max-height="100vh"
      max-width="100vh"

      color="transparent"
    >
      <v-img
        :src="urlImg | imgsURl"
        contain
        class="mx-auto"
      ></v-img>
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
