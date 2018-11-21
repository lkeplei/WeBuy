import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//国际化初始
import localization from './localization/localization.js'
Vue.use(localization);

//全局静态变量初始
import staticVar from './common/static-var.js'
Vue.use(staticVar);

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
