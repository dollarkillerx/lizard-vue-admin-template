import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import naive from 'naive-ui'

import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)

import './index.css'
import './assets/font.css'

app.use(createPinia())
app.use(router)
app.use(naive)
app.use(VueApexCharts)

app.mount('#app')
