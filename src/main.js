// import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import i18n from './locales/i18n'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import ProdukAloe from './pages/Produk-aloe.vue'
import ProdukBetel from './pages/Produk-betel.vue'
import ProdukClove from './pages/Produk-clove.vue'
import ProdukCoffee from './pages/Produk-coffee.vue'



const router = createRouter({
    scrollBehavior (to, from, savedPosition) {
        return{top: 0}
    },
    history: createWebHistory(),
    routes:[
         {path: '/produk-aloe', name: "produk-aloe", component: ProdukAloe}, // path "/" diberi name "home" dan dia akan menampilkan konten dari "pages/Home.vue"
         {path: '/', name: "home", component: Home},
         {path: '/produk-betel', name: "produk-betel", component: ProdukBetel},
         {path: '/produk-clove', name: "produk-clove", component: ProdukClove},
         {path: '/produk-coffee', name: "produk-coffee", component: ProdukCoffee},
    ]
})

createApp(App)
.use(router)
.use(i18n)
.mount('#app')
// import "bootstrap/dist/js/bootstrap.js"