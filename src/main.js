import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap"
import './App.css'
import 'aos/dist/aos.css'

createApp(App).use(router).mount('#app')
