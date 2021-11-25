import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ApiService from '@/core/services/ApiService'
import '@/assets/sass/tailwind.scss'
const app = createApp(App)
app.use(store)
app.use(router)
ApiService.init(app);
app.mount('#app')
