<template>
  <v-layout align-start d-block flex-column block>
    <!--     <v-dialog v-model="dialog" transition="slide-x-reverse-transition">
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs8 sm9 md10>
                <v-text-field v-model="nombre" label="Nombre"> </v-text-field>
              </v-flex>
              <v-flex xs4 sm3 md2>
                <v-text-field
                  v-model="id"
                  label="codigo"
                  disabled
                  v-show="typeDialog"
                  type="text"
                >
                </v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-textarea
                  v-model="descripcion"
                  outlined
                  rows="3"
                  auto-grow
                  label="descripcion"
                >
                </v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" small @click="dialog = false">Cancelar</v-btn>
          <v-btn color="primary" @click="dialogAcepter">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->

    <!--     <v-snackbar
      v-model="dialogAlert"
      :timeout="timeout"
      center
      dark
      bottom
      outlined
      transition="slide-y-reverse-transition"
      :color="coloAlert"
    >
      <div class="text-center title text">
        {{ textDialogAler }}
      </div>

      <template v-slot:action="{ attrs }">
        <v-btn
          small
          icon
          class="elevation-0"
          v-bind="attrs"
          @click="snackbar = dialogAlert"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
 -->
    <data-table-base
      :title="title"
      :data="data"
      :headers="headers"
      :isloading="isloading"
      @reroll="reroll"
      @clickRow="clickRow"
    >
    </data-table-base>
  </v-layout>
</template>

<script>
import DataTableBase from "@/components/DataTableBase.vue";
import axios from "axios";

export default {
  components: { DataTableBase },
  name: "list",

  data() {
    return {
      title: "certificados",
      data: [],
      isloading: true,
      headers: [
        {
          sortable: true,
          text: "fecha",
          value: "date",
        },
        {
          sortable: true,
          text: "Tipo",
          value: "type",
        },
        {
          sortable: true,
          text: "Categoria",
          value: "category",
        },
        {
          sortable: true,
          text: "Nombre",
          value: "title",
        },
        {
          sortable: true,
          text: "Duracion (h)",
          value: "duration",
        },
        {
          sortable: false,
          text: "En",
          value: "company",
          align: "center",
        },
      ],
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
        .get("/api/estudios/list")
        .then(function (response) {
          me.data = response.data;
          me.isloading = false;
        })
        .catch(function (error) {
          me.isloading = false;
          console.log(error);
        });
    },

    reroll() {
      this.list();
    },
    clickRow(vualue) {
      console.log(vualue)
    },
  },
};
</script>

<style>
</style>