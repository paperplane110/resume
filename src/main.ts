import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Code from "./components/code.vue"
import ColorA from "./components/ColorA/index.vue"

createApp(App)
    .component('ColorA', ColorA)
    .component('Code', Code)
    .mount('#app')
