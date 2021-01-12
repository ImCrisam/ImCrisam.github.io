<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <card-title-text title="Perfil">
          <v-form class="mt-12">
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" sm="5">
                  <v-text-field
                    dense
                    label="First Name"
                    outlined
                    disabled
                    class="headline font-weight-blod"
                    :value="profile.firstName"
                  />
                </v-col>

                <v-col cols="10" sm="5">
                  <v-text-field
                    dense
                    outlined
                    label="Last Name"
                    disabled
                    class="headline font-weight-blod"
                    :value="profile.lastName"
                  />
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    dense
                    outlined
                    label="Edad"
                    disabled
                    class="headline font-weight-blod"
                    :value="edad"
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    dense
                    outlined
                    label="Pais"
                    disabled
                    class="headline font-weight-blod"
                    :value="profile.country"
                  />
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    dense
                    outlined
                    label="Ciudad"
                    disabled
                    class="headline font-weight-blod"
                    :value="profile.city"
                  />
                </v-col>
              </v-row>
              <v-row v-for="(item, index) in profile.redes" :key="index">
                <v-col cols="8">
                  <v-text-field
                    dense
                    outlined
                    class="headline font-weight-blod"
                    disabled
                    :label="item.name"
                    :value="item.link"
                  />
                </v-col>
                <v-col cols="4">
                  <v-btn tile block color="success">
                    <v-icon left>{{ item.icon }} </v-icon>
                    {{ item.name }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </card-title-text>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="v-card-profile mt-16 text-center">
          <v-avatar size="128" class="mt-n16 elevation-6 text-center">
            <v-img :src="profile.photo" />
          </v-avatar>
          <v-card-text class="text-center">
            <h1 class="font-weight-light mb-3 black--text">
              {{ profile.firstName }} {{ profile.lastName }}
            </h1>
            <h3 class="mb-1 grey--text">{{ profile.title }}</h3>
            <p class="font-weight-light grey--text">
              {{ profile.description }}
            </p>
            <v-row>
              <v-alert
                color="primary"
                border="left"
                elevation="2"
                colored-border
                icon="mdi-code-tags-check"
              >
                <v-chip class="ma-2" color="success" outlined>
                  <v-icon left> mdi-language-csharp </v-icon>
                  Server Status
                </v-chip>
              </v-alert>
            </v-row>
            <v-row>
              <v-alert
                color="cyan"
                border="left"
                elevation="2"
                colored-border
                icon="mdi-tools"
              >
              </v-alert>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardTitleText from "@/components/CardTitleText.vue";

export default {
  components: { CardTitleText },

  computed: {
    edad() {
      var hoy = new Date();
      var cumpleanos = new Date("1994,12,20");
      var edad = hoy.getFullYear() - cumpleanos.getFullYear();
      var m = hoy.getMonth() - cumpleanos.getMonth();

      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
      }
      return edad;
    },
  },
  data() {
    return {
      profile: {
        photo:
          "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        firstName: "Cristian Maurico",
        fecha: "2020,12,20",
        description: "Irure incididunt aliqua eiusmod incididunt dolor.",
        lastName: "Arias Mayorga",
        city: "Bucaramanga",
        country: "Colombia",
        title: "Programador Junior",
        redes: [
          { name: "gitHub", link: "", icon: "" },
          { name: "gitHub", link: "", icon: "" },
        ],
        languages: [
          {
            name: "Java",
            nivel: "Avanzado",
          },
          {
            name: "C#",
            nivel: "Intermedio",
          },
          {
            name: "C++",
            nivel: "Intermedio",
          },
          {
            name: "C",
            nivel: "basico",
          },
          {
            name: "Python3",
            nivel: "Basico",
          },
          {
            name: "PHP",
            nivel: "Basico",
          },
          {
            name: "javascript",
            nivel: "Basico",
          },
          {
            name: "HTML - CSS",
            nivel: "Intermedio",
          },
          {
            name: "SQL",
            nivel: "Intermedio",
          },
        ],
        tools: [
          {
            name: "Unity",
            nivel: "Intermedio",
          },
          {
            name: "Git",
            nivel: "Intermedio",
          },
          {
            name: "AndroidStudio (Java)",
            nivel: "Intermedio",
          },
          {
            name: "Scrum",
            nivel: "Basico",
          },
        ],
      },
    };
  },
};
</script>
