import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Cart from '../views/Cart.vue'
import OrderSuccess from '../views/OrderSuccess.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods,
  },
  {
    path: '/food/:id',
    name: FoodDetail,
    component: FoodDetail
  },
  {
    path: '/cart',
    name: Cart,
    component: Cart
  },
  {
    path: '/order-success',
    name: OrderSuccess,
    component: OrderSuccess
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
