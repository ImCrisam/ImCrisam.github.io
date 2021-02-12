import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Inicio",
    component: Home,
    props: {
      priority: ""
    },

  },
  {
    path: '/web',
    name: "web",
    component: Home,
    props: {
      priority: "web"
    },

  },
  {
    path: '/vg',
    name: "vg",
    component: Home,
    props: {
      priority: "videojuegos"
    },

  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router