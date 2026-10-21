import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalDemo from './experiments/03-register/GlobalDemo.vue'

const app = createApp(App)
app.component('GlobalDemo', GlobalDemo)
app.mount('#app')
