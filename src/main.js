// import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import i18n from './locales/i18n'
import App from './App.vue'

createApp(App)
.use(i18n)
.mount('#app')
// import "bootstrap/dist/js/bootstrap.js"