import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Router from './config/router.js'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
