import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Videos from '../views/Videos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lang/:lang',
    name: 'Videos',
    component: Videos
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
