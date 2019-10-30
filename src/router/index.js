import Vue from 'vue'
import VueRouter from 'vue-router'
import MainMenu from '@/views/MainMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainMenu',
    component: MainMenu
  },
  {
    path: '/theGame',
    name: 'theGame',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheGame.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
