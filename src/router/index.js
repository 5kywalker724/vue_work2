import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'products',
    component: function () {
      return import('../views/ProductsView.vue')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import('../views/CartView.vue')
    }
  },
  {
    path: '/order',
    name: 'order',
    component: function () {
      return import('../views/OrderView.vue')
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: function (){
      return import('../views/RegistrationView.vue')
    }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
