import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'purecss'
import './assets/main.css'

const app = createApp(App)

app.use(router).mount('#app')
