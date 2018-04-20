import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
    count:1
}
const mutations={
    add(state){
        state.count++;
    },
    reduce(state) {
        state.count--;
    }
}
export default new Vuex.Store({
    state,
    mutations
})
//在需要使用的.vue文件种写入以下代码,并且在export default中引入store
/* < p > {{ $store.state.count }}</p >
<br>
<button @click="$store.commit('add')">+++</button>
<button @click="$store.commit('reduce')" > ---</button > */