// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
// Vue.use(Vant)
//全局引用vant
import {Tab,Tabs,Button,Row,Col,SwipeItem,Swipe,Lazyload,List,Field,NavBar} from 'vant'
Vue.use(Button).use(Tab).use(Tabs).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
