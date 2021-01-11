<template>
  <v-card class="pa-3">
    <div class="d-flex grow flex-wrap">
      <v-avatar
        rounded
        size="128"
        class="mt-n16 ml-4 elevation-6 avatar"
        
      >
        <v-img :src="image" />
      </v-avatar>
      <v-card-title class="pa-0 mx-auto">
        <h4 class="font-weight-medium">{{ title }}</h4>
        
      </v-card-title>
      <v-card-title class="pa-0 align-self-start ml-auto mr-4">
        <h5 class="font-weight-medium">{{ category }}</h5>
        
      </v-card-title>

      <v-card-text class="mt-3 text-justify pb-0">
        <p>
          {{ description }}
        </p>
      </v-card-text>
    </div>
    <v-divider />
    <v-card-actions>
      <v-row class="space-between">
        <v-col cols="3" md="2" v-if="date">
          <v-chip class="px-2">
          <v-icon color="succes"  class="float-right" 
            >mdi-calendar</v-icon
          >
          {{date}}
          </v-chip>
        </v-col>
        <v-col >
          <v-chip v-for="item in chips" :key="item">
            <v-icon left > {{item.icon }}</v-icon>
            {{item.text}}
          </v-chip>
        </v-col>
        <v-col cols="1">
           <v-btn
              icon
              large
              color="primary"
              class="float-right"
              :src="link"
            >
              <v-icon large>mdi-information-outline</v-icon>
            </v-btn>
          
          
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MaterialCard",

  props: {
    
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    chips: {
      type: [],
      default: [],
    },
  },

  computed: {
    classes() {
      return {
        "v-card--material--has-heading": this.hasHeading,
      };
    },
    hasHeading() {
      return Boolean(this.$slots.heading || this.title || this.icon);
    },
    hasAltHeading() {
      return Boolean(this.$slots.heading || (this.title && this.icon));
    },
  },
};
</script>

<style scoped>
</style>
