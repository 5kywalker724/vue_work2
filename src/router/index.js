import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'products',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CartView.vue')
    }
  },
  {
    path: '/order',
    name: 'order',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/OrderView.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
