import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/request-animation-frame',
    name: 'RequestAnimationFrame',
    component: () => import(/* webpackChunkName: "about" */ '../views/requestAnimationFrame.vue')
  },
  {
    path: '/visibility-change',
    name: 'VisibilityChange',
    component: () => import(/* webpackChunkName: "about" */ '../views/visibilityChange.vue')
  },
  {
    path: '/debounce-throttle',
    name: 'DebounceThrottle',
    component: () => import(/* webpackChunkName: "about" */ '../views/debounceThrottle.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
