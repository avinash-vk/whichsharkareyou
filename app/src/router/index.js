import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../pages/Landing.vue'
import Start from '../pages/Start.vue'
import Shark from '../pages/Shark.vue'
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
  {
    path: '/shark',
    name: 'Shark',
    component: Shark
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  data() {
    return {
      
    }
  },
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})
export default router
