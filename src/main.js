import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css' //引入antd全局样式
// import Antd from 'ant-design-vue'  //antd全部组件库
import App from './App.vue'
import router from './router' //引入路由信息
import store from './store'
//#region
//crateApp传入的是根组件，mount手动挂载上dom上
//#endregion

// console.log('create:', createApp(App))
// console.log('App:', App)
const app = createApp(App)
// console.log('antd', Antd)
// console.log('app:',app)
// console.log('store:',store) //Store对象
console.log(app.version) //查看当前应用vue版本信息，可用于插件适配时作判断

app.use(router).use(store).mount('#app')
