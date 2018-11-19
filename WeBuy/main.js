import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//内部公共处理的请求
import request from './common/request.js'
Vue.use(request);

//内部公共路由处理
import router from './common/router.js'
Vue.use(router);

const app = new Vue({
    ...App
})
app.$mount()
