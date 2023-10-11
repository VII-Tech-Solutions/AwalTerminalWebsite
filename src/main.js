import {createApp} from 'vue'
import App from './App.vue'
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap"
import './App.css'
import 'aos/dist/aos.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueAnalytics from 'vue3-analytics'

const app = createApp({});
app.component("v-select", vSelect);
app.use(VueToast);
app.use(VueAnalytics, {
    id: 'G-J9ZFZTYK9Z',
    router
});
app.mount('#app');
createApp(App).use(router).mount('#app')
