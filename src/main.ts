import './assets/main.css'

import { createApp } from 'vue'
import Main from './Main.vue'
import Navbar from './components/Navbar.vue'
import Education from './components/Education.vue'
import router from './router'

const mainPage = createApp(Main)
const navbar = createApp(Navbar)
const edu = createApp(Education)

mainPage.use(router)

navbar.mount('#nav')
edu.mount('#education')
