<template>
  <v-container id="dashboard" fluid tag="section" class="mx-auto">
    <v-row class="mx-2">
      <v-col cols="12">
        <proyectos>
        </proyectos>
      </v-col>


      <v-col cols="12" md="6" >
        <card-title-text color="warning" title="Certificados Recientes" subTitle="">
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
              hide-default-footer
            />
          </v-card-text>
          <v-card-actions class="mt-0 pt-0">
            <v-btn block outlined>Mas</v-btn> 
          </v-card-actions >
        </card-title-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardTitleText from "@/components/CardTitleText.vue";
import CardAvatar from "@/components/CardAvatar.vue";
import Proyectos from "@/components/Proyectos.vue";

export default {
  components: { CardTitleText, CardAvatar,Proyectos },
  name: "Home",

  data() {
    return {

      headers: [
        {
          sortable: false,
          text: "ID",
          value: "id",
        },
        {
          sortable: false,
          text: "Name",
          value: "name",
        },
        {
          sortable: false,
          text: "Salary",
          value: "salary",
          align: "right",
        },
        {
          sortable: false,
          text: "Country",
          value: "country",
          align: "right",
        },
        {
          sortable: false,
          text: "City",
          value: "city",
          align: "right",
        },
      ],
      items: [
        {
          id: 1,
          name: "Dakota Rice",
          country: "Niger",
          city: "Oud-Tunrhout",
          salary: "$35,738",
        },
        {
          id: 2,
          name: "Minerva Hooper",
          country: "Curaçao",
          city: "Sinaai-Waas",
          salary: "$23,738",
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          country: "Netherlands",
          city: "Overland Park",
          salary: "$56,142",
        },
        {
          id: 4,
          name: "Philip Chanley",
          country: "Korea, South",
          city: "Gloucester",
          salary: "$38,735",
        },
        {
          id: 5,
          name: "Doris Greene",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
          salary: "$63,542",
        },
      ],
    };
  },

  methods: {},
};
</script>
