import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMAll from '@/components/pages/shoppingMAll'
import Register from '@/components/pages/register'
import Login from '@/components/pages/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ShoppingMAll',component: ShoppingMAll},
    {path:'/register',name:'Register',component: Register},
    { path: '/login', name: 'Login', component: Login }
  ]
})
