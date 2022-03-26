<template>
                <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top" data-scrollto-offset="0">
      <div class="container-fluid d-flex align-items-center justify-content-between">
  
        <a href="/" class="logo d-flex align-items-center scrollto me-auto me-lg-0 ms-3">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="/assets/img/logo.png" alt=""> -->
          <!-- <h1>HeroBiz<span>.</span></h1> -->
          <img src="/assets/img/logo-per-removebg-preview.png" alt="">
        </a>
  
        <nav id="navbar" class="navbar">
          <ul>
            <li class="active"><a class="nav-link scrollto " href="/">{{ $t("navbar.home") }}</a></li>
            <li><a class="nav-link  scrollto" href="index.html#about">{{ $t("navbar.tentang") }}</a></li>
            <li><a class="nav-link scrollto" href="index.html#produk">{{ $t("navbar.produk") }}</a></li>
            <li><a class="nav-link scrollto" href="index.html#contact">{{ $t("navbar.kontak") }}</a></li>
            <div class="nav-link scrollto">
              <select v-model="language" @change="changeLanguage" class="custome-select bg-transparent scrollto text-light" style="border-radius:20px;">
                <option class="bg-dark text-light  scrollto" value="id">Indonesia</option>
                <option class="bg-dark text-light  scrollto" value="en">English</option>
                <option class="bg-dark text-light  scrollto" value="man">中文</option>
              </select>
            </div>
          </ul>
          <i class="bi bi-list mobile-nav-toggle d-none"></i>
        </nav>
        <!-- .navbar -->
  
        <!-- <a class="btn-getstarted scrollto" href="index.html#about">Get Started</a> -->
  
      </div>
    </header><!-- End Header -->
</template>


<script>
export default {
  data() {
    return{
      language: null,

    }
  },
  methods: {
    changeLanguage(){
      localStorage.setItem("lang", this.language)
      window.location.reload()
    }
  },
  created(){
    if(localStorage.getItem("lang") == null) {
      localStorage.setItem("lang", "id")
    }
    this.language = localStorage.getItem("lang")
  }
}
</script>