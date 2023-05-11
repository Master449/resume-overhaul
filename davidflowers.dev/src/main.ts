import './assets/main.css'

import { createApp } from 'vue'
import Main from './Main.vue'
import Navbar from './components/Navbar.vue'
import router from './router'

const mainPage = createApp(Main)
const navbar = createApp(Navbar)

mainPage.use(router)

mainPage.mount('#main')
navbar.mount('#nav')
