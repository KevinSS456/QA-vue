import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OqView  from '../views/OqView.vue'
import DescView  from '../views/DescView.vue'
import DicasView  from '../views/DicasView.vue'
import RecView  from '../views/RecView.vue'
import VantView  from '../views/VantView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Oq',
    name: 'Oq',
    component: () => import( '../views/OqView.vue')
  },
  {
    path: '/Desc',
    name: 'Desc',
    component: () => import( '../views/DescView.vue')
  },
  {
    path: '/Rec',
    name: 'Rec',
    component: () => import( '../views/RecView.vue')
  },
  {
    path: '/Vant',
    name: 'Vant',
    component: () => import( '../views/VantView.vue')
  },
  {
    path: '/Dicas',
    name: 'Dicas',
    component: () => import( '../views/DicasView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
