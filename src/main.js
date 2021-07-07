import { createApp} from 'vue'
import Site from './Site.vue'
import router from './router'
import store from './store'
import naive from 'naive-ui'
import '@/permission' // permission control
import './mock/mock.js'
import '@/styles/index.scss' // global css
import VueApexCharts from "vue3-apexcharts";
const app = createApp(Site)
import request from '@/utils/request';
app.config.globalProperties.$http = request
app.use(store).use(router).use(naive).use(VueApexCharts).mount('#app')
