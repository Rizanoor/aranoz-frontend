import './assets/css/style.css'
import 'vue-toast-notification/dist/theme-default.css';
import Toast from 'vue-toast-notification';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast)


app.mount('#app')
