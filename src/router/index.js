import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/pages/HomePage.vue'
import ProductList from '../views/pages/product/ProductList.vue'
import ProductInsert from '../views/pages/product/ProductInsert.vue'
import ProductEdit from '../views/pages/product/ProductEdit.vue'
import Login from '../views/pages/auth/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/products',
    name: 'products',
    component: ProductList
  },
  {
    path: '/product/add',
    name: 'product-add',
    component: ProductInsert
  },
  {
    path: '/product/edit/:id',
    name: 'product-edit',
    component: ProductEdit
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
    path: '/login',
    name: 'login',
    component: Login

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
