import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 初始化环境配置
const Init = () => {
  return Promise.resolve()
}

Init().then(() => {
  const App = require('./App').default
  const Store = require('$store').default
  const Route = require('./Route').default

  require('./style/reset.scss')

  const Router = new VueRouter({
    routes: Route,
  })

  new Vue({
    router: Router,
    store: Store,
    render: h => h(App),
  }).$mount('#app')
})
