import { createRouter, createWebHashHistory } from 'vue-router'
import ViewMain from '@/views/ViewMain.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewMain,
    },
  ],
})

export default router
