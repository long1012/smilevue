import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMAll from '@/components/pages/shoppingMAll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMAll',
      component: ShoppingMAll
    }
  ]
})
