import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../pages/Landing.vue'
import Start from '../pages/Start.vue'
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})
export default router
