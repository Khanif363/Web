
<template>
<Navbar/>

    <router-view></router-view>
  
<Footer/>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
    Navbar,
    Footer
  },
  // data() {
  //   return{
  //     language: null,

  //   }
  // },
  // methods: {
  //   changeLanguage(){
  //     localStorage.setItem("lang", this.language)
  //     window.location.reload()
  //   }
  // },
  // created(){
  //   if(localStorage.getItem("lang") == null) {
  //     localStorage.setItem("lang", "id")
  //   }
  //   this.language = localStorage.getItem("lang")
  // }
}
</script>

<style scope>
.besar{
  transform: scale(2,2);
  transition: transform 2s;
  align-items: center;
  flex-wrap: wrap;
  flex: 50%;
  
}

</style>
