import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

//以App.vue为根组件创建应用
const app = createApp(App)
//将路由注册到应用中
app.use(router)
//挂载应用到id为app的div上
app.mount('#app')
