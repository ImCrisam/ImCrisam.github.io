<template>
  <v-card class="pa-3 mt-12">
    <div class="d-flex grow flex-wrap">
      <v-avatar rounded size="128" class="mt-n16 ml-4 elevation-6 avatar">
        <v-img :src="image" />
      </v-avatar>
      
      <v-card-subtitle class="pa-0  ml-auto mr-4 subtitle-1">
       {{ category }}
      </v-card-subtitle>

    </div>
      <v-card-title class="pa-0 d-flex justify-center title mt-2 text-center mx-auto">
        {{ title }}
      </v-card-title>

      <v-card-text class="mt-3 text-justify pb-0 body-1">
        <p >
          {{ description }}
        </p>
      </v-card-text>
    <v-divider />
    <v-card-actions dense>
      <v-row class="space-between">
        <v-col cols="12" class="pt-3 pb-1">
          <the-chip
          v-for="item in chips" :key="item.id"
          :name="item.nombre"
          :icon="item.icon"
          thecolor="compuestoE"
          :isOutlined="!$vuetify.theme.dark"
          />
        </v-col>
       <v-col  v-if="date" class="py-1">
         
          <v-chip color="compuestoD" :outlined="!$vuetify.theme.dark">
            <strong>{{ date | mounthYear }}</strong>
            <v-icon color="succes" class="float-right " >{{"calendar"|iconsChips}}</v-icon>
          </v-chip>
        </v-col>
        <v-spacer/>
        <v-col class="d-flex flex-row ml-auto py-1">
          <v-btn v-if="repo"  class="float-right mr-1 px-3" :class="{'ml-auto':!link}" color="primary " :href="repo" target="_blank">
            <v-icon class="mr-1">{{"github"|iconsChips}}</v-icon>
            {{"GitHub"}}
          </v-btn>
          
          <v-btn v-if="code"  class="float-right mr-1 px-3" :class="{'ml-auto':!link}" color="primary " :href="code" target="_blank">
            <v-icon class="mr-1">{{"code"|iconsChips}}</v-icon>
            
          </v-btn>
          <v-spacer v-if="link"/>
          <v-btn  v-if="link"  class="float-right px-3 ml-auto " color="primary" :class="{'ml-auto':!repo}" :href="link" target="_blank">
            <v-icon class="mr-1">{{"info"|iconsChips}}</v-icon>
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
    /* mouthYear(){
      var dates = this.date.split("-");
      return dates[1] + "/" + dates[0]
    } */
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
    code: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    calendar: {
      type: String,
      default: "calendar",
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
