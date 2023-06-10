import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueAwesomeSidebar from 'vue-awesome-sidebar';

const app = createApp(App)

app.use(router)
app.use(vueAwesomeSidebar)

app.mount('#app')
