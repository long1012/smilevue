import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMAll from '@/components/pages/shoppingMAll'
import Register from '@/components/pages/register'
import Login from '@/components/pages/Login'
import Goods from '@/components/pages/Goods'
import CategoryList from '@/components/pages/CategoryList'
import Cart from '@/components/pages/Cart'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ShoppingMAll',component: ShoppingMAll},
    {path:'/register',name:'Register',component: Register},
    { path: '/login', name: 'Login', component: Login },
    { path: '/goods', name: 'Goods', component: Goods },
    { path: '/CategoryList', name: 'CategoryList', component: CategoryList },
    { path: '/Cart', name: 'Cart', component: Cart }
  ]
})
