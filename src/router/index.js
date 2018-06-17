import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMAll from '@/components/pages/shoppingMAll'
import Register from '@/components/pages/register'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ShoppingMAll',component: ShoppingMAll},
    {path:'/register',name:'Register',component: Register}
  ]
})
