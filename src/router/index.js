import { createRouter, createWebHistory } from 'vue-router'
import CustomersView from '../views/CustomersView.vue'
import AboutView from "@/views/AboutView.vue";
import OrdersView from "@/views/OrdersView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'customers',
      component: CustomersView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router
