import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/requestAnimationFrame',
    name: 'RequestAnimationFrame',
    component: () => import(/* webpackChunkName: "about" */ '../views/requestAnimationFrame.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
