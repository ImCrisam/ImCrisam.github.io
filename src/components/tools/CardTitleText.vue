<template>
  <v-card class="mt-12 pa-3">
    <div class="d-flex grow flex-wrap">
      <v-sheet
        :color="color"
        width="100%"
        elevation="6"
        height="auto"
        class="text-center mb-n5 pa-4 mt-n12"
        dark
      >
        <div class="display-1 font-weight-light">{{title}}</div>

        <div class="subtitle-1 font-weight-light">
          {{subTitle}}
        </div>

      </v-sheet>

    </div>

    <slot />
 </v-card>
</template>

<script>
export default {
  name: "CardTitleText",

  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "success",
    },
   
  },

  computed: {
  
  },
};
</script>

