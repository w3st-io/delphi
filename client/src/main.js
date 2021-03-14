/**
 * %%%%%%%%%%%% *
 * %%% MAIN %%% *
 * %%%%%%%%%%%% *
*/
// [IMPORT] //
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// [IMPORT] Personal //
import App from './App.vue'
import router from './router'
import './assets/styles/bootstrap-override.scss'
import './assets/styles/style.scss'


// [VUE-USE] //
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
