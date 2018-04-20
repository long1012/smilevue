<template>
  <div class="hello">
   <van-button type="primary">按钮</van-button>
   <hr>
   <p>{{$store.state.count}}</p>
   <br>
   <button @click="$store.commit('add')">+++</button>
   <button @click="$store.commit('reduce')">---</button>
  </div>
</template>

<script>
import store from '@/vuex/store.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
