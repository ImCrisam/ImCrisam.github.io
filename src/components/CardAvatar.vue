<template>
  <v-card class="pa-3 mt-16">
    <div class="d-flex grow flex-wrap">
      <v-avatar rounded size="128" class="mt-n16 ml-4 elevation-6 avatar">
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
    <v-card-actions >
      <v-row class="space-between">
        <v-col cols="12">
          <v-chip v-for="item in chips" :key="item.id">
            <v-icon left> {{ item.icon }}</v-icon>
            {{ item.text }}
          </v-chip>
        </v-col>
       <v-col  v-if="date">
          <v-chip class="px-2">
            {{ date }}
            <v-icon color="succes" class="float-right">mdi-calendar</v-icon>
          </v-chip>
        </v-col>
        <v-spacer/>
        <v-col class="d-flex flex-row">
          <v-btn   class="float-right mr-1 px-3" color="primary " :src="link">
            <v-icon class="mr-1">mdi-github</v-icon>
            {{"GITHUB"}}
          </v-btn>
          <v-btn    class="float-right px-3" color="primary" :src="link">
            <v-icon class="mr-1">mdi-information-outline</v-icon>
            {{"Mas"}}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardAvatar",

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
      type: Array,
      default: [],
    }
  },


};
</script>

<style scoped>
</style>
