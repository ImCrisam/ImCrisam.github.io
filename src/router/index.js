import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: "Inicio",
    component: Home,
    props: {
      priority: {
        "desarrollo": [],
        "lenguajes": [],
        "programacion": [],
        "db": [],
        "web": [],
      }
    },

  },
  {
    path: '/web',
    name: "web",
    component: Home,
    props: {
      priority: {
        "web": [],
        "desarrollo": [],
        "db": [],
        "programacion": [],
        "lenguajes": [],
      }
    }

  },
  {
    path: '/vg',
    name: "vg",
    component: Home,
    props: {
      priority: {
        "videojuegos": [],
        "desarrollo": [],
        "ciencias": [],
        "programacion": [],
      }
    }
  },
  {
    path: '/py',
    name: "python",
    component: Home,
    props: {
      priority: {
        "python": [],
        "desarrollo": [],
        "web": [],
        "db": [],
        "programacion": [],
        "lenguajes": [],
      }
    }
  },
  {
    path: '*',
    component: Home,
    props: {
      priority: {
        "desarrollo": [],
        "lenguajes": [],
        "programacion": [],
        "db": [],
        "web": [],
      }
    },

  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router