import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import config from '@/config'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.config.productionTip = false

Vue.prototype.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
