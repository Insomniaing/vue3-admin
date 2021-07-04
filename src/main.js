import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naive from 'naive-ui'
import '@/permission' // permission control
import './mock/mock.js'
import '@/styles/index.scss' // global css
const app = createApp(App)
import request from '@/utils/request';
app.config.globalProperties.$http = request
app.use(store).use(router).use(naive).mount('#app')
