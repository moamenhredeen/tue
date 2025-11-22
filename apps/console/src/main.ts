import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import router from './router.js'
import App from './App.vue'

const app = createApp(App).use(router)

app.use(createPinia())
app.use(router)

app.mount('#app')
