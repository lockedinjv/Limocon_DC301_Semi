import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../views/Homepage.vue'
import Appointment from '../views/Appointment.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/homepage'
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

