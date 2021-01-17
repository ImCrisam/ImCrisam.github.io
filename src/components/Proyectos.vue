<template>
  <v-container
    color="primary"
    flat
    outlined
    :loading="isloading"
    min-height="100"
  >
    <v-row v-if="isloading">
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
    </v-row>

    <!-- <v-sheet class="mx-auto">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="n in 7" :key="n" v-slot="{ active, toggle }" >
          <span class="mx-auto">
            <v-btn
              class="mx-1"
              :input-value="active"
              active-class="purple white--text"
              depressed
              rounded
              @click="toggle"
            >
              Options {{ n }}
            </v-btn>
          </span>
        </v-slide-item>
      </v-slide-group>
    </v-sheet> -->

    <v-item-group v-else>
      <v-row>
        <v-col
          v-for="item in data"
          :key="item.id"
          cols="12"
          md="6"
          lg="6"
          xl="4"
          class="mx-auto"
        >
          <v-item v-slot="{ toggle }">
            <card-avatar
              :image="item.imagen | imgsURl"
              :title="item.title"
              :description="item.description"
              :category="item.category"
              :link="item.link"
              :repo="item.repo"
              :date="item.date"
              :chips="item.chips_code"
              @click="toggle"
            >
            </card-avatar>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
import CardAvatar from "@/components/tools/CardAvatar.vue";
import axios from "axios";

export default {
  name: "Proyectos",
  components: { CardAvatar },
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
    },
  },
};
</script>

<style>
</style>