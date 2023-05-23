import './assets/main.css'

import { createApp } from 'vue'
import Main from './Main.vue'
import Navbar from './components/Navbar.vue'
import Index from './components/Index.vue'
import router from './router'

const mainPage = createApp(Main)
const navbar = createApp(Navbar)
const index = createApp(Index)

mainPage.use(router)

navbar.mount('#nav')
index.mount('#main')
