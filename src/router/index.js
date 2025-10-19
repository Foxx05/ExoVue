// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import PrizeList from '../components/PrizeList.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/PrizeList.vue', name: 'PrizeList', component: PrizeList },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
