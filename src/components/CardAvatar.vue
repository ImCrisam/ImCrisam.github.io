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
          <the-chip
          v-for="item in chips" :key="item.id"
          :name="item.nombre"
          :icon="item.icon"
          />
        </v-col>
       <v-col  v-if="date">
          <v-chip class="px-2">
            {{ mouthYear }}
            <v-icon color="succes" class="float-right">mdi-calendar</v-icon>
          </v-chip>
        </v-col>
        <v-spacer/>
        <v-col class="d-flex flex-row ml-auto">
          <v-btn v-if="repo"  class="float-right mr-1 px-3" :class="{'ml-auto':!link}" color="primary " :href="repo" target="_blank">
            <v-icon class="mr-1">mdi-github</v-icon>
            {{"GitHub"}}
          </v-btn>
          <v-btn  v-if="link"  class="float-right px-3 ml-auto" color="primary" :class="{'ml-auto':!repo}" :href="link" target="_blank">
            <v-icon class="mr-1">mdi-information-outline</v-icon>
            {{"IR"}}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import TheChip from '@/components/tools/TheChip.vue';
export default {
  components: { TheChip },
  name: "CardAvatar",
  computed:{
    mouthYear(){
      var dates = this.date.split("-");
      return dates[1] + "/" + dates[0]
    }
  },
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
    repo: {
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
