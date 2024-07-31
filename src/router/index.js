import { createRouter, createWebHistory } from 'vue-router'
import MembersView  from '@/views/MembersView.vue'
import HomeView from '@/views/HomeView.vue'
 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/members',
      name: 'members',
      component: MembersView
    }
  ]
})

export default router
