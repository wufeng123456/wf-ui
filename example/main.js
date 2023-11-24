import Vue from 'vue'
import App from './App.vue'
// 按需引入方式
// import Button from 'ui/packages/button'
// import Badge from 'ui/packages/badge'
// import 'ui/css/button.scss'
// import 'ui/css/badge.scss'
// Vue.use(Button)
// Vue.use(Badge)
import '../dist/css/index.css'

// 全量导入方式 (npm包方式 | script标签方式配合externals)
import WfUI from 'WfUI'
Vue.use(WfUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
