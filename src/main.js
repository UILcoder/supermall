import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
//创建事件总线属性
Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
