<template>
  <v-flex>
    <v-toolbar d-flex  dense class="elevation-2" color="compuestoD">
      <v-btn icon dark @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title 
        ><span class="while--text title">{{ title }}</span></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-text-field
        class="text-xs-center"
        v-model="buscar"
        :append-icon="'search' | iconsChips"
        label="Búsqueda"
        dark
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          color="compuestoE"
          fab
          small
          class="elevation-2"
          @click="$emit('reroll')"
          :loading="isloading"
          ><v-icon color="while">{{ "reroll" | iconsChips }}</v-icon></v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="data"
      :search="buscar"
      :loading="isloading"
      @click:row="clickRow"
      :items-per-page="itemsPerRow"
      class="elevation-1"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus',
      }"
    >
      <!--     <template v-slot:[`item.opciones`]="{ item }" >
        <v-icon
          class="mr-2"
          @click="$emit('edit', item)"
          color="accent"
          :disabled="!derechos.edit"
        >
          mdi-pencil-circle-outline</v-icon
        >
        <v-icon
          v-if="item.estado"
          color="error"
          :disabled="!derechos.active"
          @click="$emit('desactive', item)"
        >
          mdi-close-circle-outline
        </v-icon>

        <v-icon
          v-else
          color="success"
          :disabled="!derechos.active"
          @click="$emit('active', item)"
        >
          mdi-checkbox-marked-circle-outline
        </v-icon>
      </template> -->

      <!--       <template v-slot:[`item.estado`]="{ item }">
        <div v-if="item.estado">
          <span class="success--text">Activo</span>
        </div>
        <div v-else>
          <span class="error--text">Inactivo</span>
        </div>
      </template> -->
    </v-data-table>
  </v-flex>
</template>

<script>
export default {
  props: {
    title: String,
    data: Array,
    headers: Array,
    isloading: Boolean,
    derechos: Object,
  },
  data() {
    return {
      buscar: "",
    };
  },
  methods: {
    clickRow(value) {
      this.$emit("clickRow", value);
    },
  },
  computed: {
    itemsPerRow() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 5;
        case "sm":
          return 5;
        case "md":
          return 10;
        case "lg":
          return 10;
        case "xl":
          return 15;
      }
    },
  },
};
</script>

<style></style>
