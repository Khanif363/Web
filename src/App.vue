
<template>
            <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top" data-scrollto-offset="0">
      <div class="container-fluid d-flex align-items-center justify-content-between">
  
        <a href="index.html" class="logo d-flex align-items-center scrollto me-auto me-lg-0 ms-3">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="/assets/img/logo.png" alt=""> -->
          <!-- <h1>HeroBiz<span>.</span></h1> -->
          <img src="/assets/img/logo-per-removebg-preview.png" alt="">
        </a>
  
        <nav id="navbar" class="navbar">
          <ul>
            <li class="active"><a class="nav-link scrollto " href="index.html">{{ $t("navbar.home") }}</a></li>
            <li><a class="nav-link  scrollto" href="index.html#about">{{ $t("navbar.tentang") }}</a></li>
            <li><a class="nav-link scrollto" href="index.html#produk">{{ $t("navbar.produk") }}</a></li>
            <li><a class="nav-link scrollto" href="index.html#contact">{{ $t("navbar.kontak") }}</a></li>
            <div class="nav-link scrollto">
              <select v-model="language" @change="changeLanguage" class="custome-select" style="border-radius:20px;">
                <option value="id">Indonesia</option>
                <option value="en">English</option>
                <option value="man">中文</option>
              </select>
            </div>
          </ul>
          <i class="bi bi-list mobile-nav-toggle d-none"></i>
        </nav>
        <!-- .navbar -->
  
        <!-- <a class="btn-getstarted scrollto" href="index.html#about">Get Started</a> -->
  
      </div>
    </header><!-- End Header -->

    <section id="hero-animated" class="hero-animated d-flex align-items-center">
      <div class="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
        <img src="/assets/img/design-awal.png" class="img-fluid animated">
        <h2>{{ $t("home.judul") }} <span>{{ $t("home.judulSpan") }}</span></h2>
        <p>{{ $t("home.slogan") }}</p>
        <div class="d-flex">
          <!-- <a href="#about" class="btn-get-started scrollto">Get Started</a> -->
          <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox text-decoration-none btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>{{ $t("home.tonton") }}</span></a>
        </div>
      </div>
    </section>
  
    <main id="main">
  

      <!-- ======= About Section ======= -->
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
  
          <div class="section-header">
            <h2>{{ $t("tentang.tentang") }}</h2>
            <p>{{ $t("tentang.desc") }}</p>
          </div>
  
          <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
  
            <div class="col-lg-5">
              <div class="">
                <img src="/assets/img/vsi.png" style="border-radius: 1%;" class="img-fluid" alt="">
              </div>
            </div>
  
            <div class="col-lg-7 ">
              <p class="text-center text-muted">{{ $t("tentang.keterangan") }}</p>
              <h3 class="pt-0 pt-lg-5 text-center">{{ $t("tentang.judulvisi") }}</h3>
  
              <!-- Tabs -->
              <ul class="nav ms-4 mb-3">
                <li><a class="nav-link active " data-bs-toggle="pill" href="#tab1">{{ $t("tentang.visi") }}</a></li>
                <li><a class="nav-link ms-5" data-bs-toggle="pill" href="#tab2">{{ $t("tentang.misi") }}</a></li>
                <li><a class="nav-link ms-5" data-bs-toggle="pill" href="#tab3">{{ $t("tentang.tujuan") }}</a></li>
              </ul><!-- End Tabs -->
  
              <!-- Tab Content -->
              <div class="tab-content ms-4 mr-4">
  
                <div class="tab-pane fade show active" id="tab1">
  
                  <!-- <p class="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p> -->
  
                  <!-- <div class="d-flex align-items-center mt-4">
                    <i class="bi bi-check2"></i>
                    <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                  </div> -->
                  <p class="mt-5">{{ $t("tentang.descVisi") }}</p>
  
  
                </div><!-- End Tab 1 Content -->
  
                <div class="tab-pane fade show" id="tab2">
                  <p class="mt-5"><ol>
                    <li>{{ $t("tentang.descMisi1") }}</li>
                    <li>{{ $t("tentang.decsMisi2") }}</li>
                  </ol></p>
                </div><!-- End Tab 2 Content -->
  
                <div class="tab-pane fade show" id="tab3">
                  <p class="mt-5">
                    <ol>
                      <li>{{ $t("tentang.desctujuan1") }}</li>
                      <li>{{ $t("tentang.desctujuan2") }}</li>
                    </ol>
                  </p>
                </div><!-- End Tab 2 Content -->
                
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section><!-- End About Section -->

<section id="produk" class="about">
    <div class="container" data-aos="fade-up">

        <div class="section-header">
            <h2>{{ $t("produk.judul") }}</h2>
            <p>{{ $t("produk.produkdesc") }}</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">

          <div class="container">

              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                  <div class="col">
                      <div class="card shadow-sm">
                          <!-- <img v-on:click="toogle1 = !toogle1 | toogle1 != toogle2 | toogle1 != toogle3 | toogle1 != toogle4" v-bind:class="{besar: !toogle1}" src="/assets/img/aloe.png" alt=""
                              class="bd-placeholder-img card-img-top zoom" width="100%" height="225"> -->
                          <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->

                          <img src="/assets/img/aloe.png" type="button" data-bs-toggle="modal" data-bs-target="#nomor1">

                          <div class="card-body">
                              <h5><strong>{{ $t("produk.aloe") }}</strong></h5>
                              <p class="card-text">{{ $t("produk.descaloe") }}</p>
                              <div class="d-flex justify-content-between align-items-center">
                              </div>
                          </div>
                      </div>
                  </div>

                          <!-- <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <img src="/assets/img/aloe.png" alt="">
                              </div>
                            </div>
                          </div> -->
                  <div class="col">
                      <div class="card shadow-sm">
                          <!-- <img  v-on:click="toogle2 = !toogle2 | toogle2 != toogle1 | toogle2 != toogle3 | toogle2 != toogle4" v-bind:class="{besar: !toogle2}"  src="/assets/img/betel-nut.png" alt=""
                              class="bd-placeholder-img card-img-top" width="100%" height="225"> -->
                          <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                          <img src="/assets/img/betel-nut.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                          <div class="card-body">
                              <h5><strong>{{ $t("produk.betel") }}</strong></h5>
                              <p class="card-text">{{ $t("produk.descbetel") }}</p>
                              <div class="d-flex justify-content-between align-items-center">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card shadow-sm">
                          <!-- <img  v-on:click="toogle3 = !toogle3 | toogle3 != toogle1 | toogle3 != toogle2 | toogle3 != toogle4" v-bind:class="{besar: !toogle3}"  src="/assets/img/lalpari-crove.png" alt=""
                              class="bd-placeholder-img card-img-top" width="100%" height="225"> -->
                          <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                            <img  src="/assets/img/lalpari-crove.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                          <div class="card-body">
                              <h5><strong>{{ $t("produk.lalpari") }}</strong></h5>
                              <p class="card-text">{{ $t("produk.desclalpari1") }}<br>
                              {{ $t("produk.desclalpari2") }}<br>
                              {{ $t("produk.desclalpari3") }}<br>
                              {{ $t("produk.desclalpari4") }}</p>
                              <div class="d-flex justify-content-between align-items-center">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card shadow-sm">
                          <!-- <img v-on:click="toogle4 = !toogle4 | toogle4 != toogle1 | toogle4 != toogle3 | toogle4 != toogle2" v-bind:class="{besar: !toogle4}" src="/assets/img/coofe-beans.png" alt=""
                              class="bd-placeholder-img card-img-top" width="100%" height="225"> -->
                          <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                            <img src="/assets/img/coofe-beans.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                          <div class="card-body">
                              <h5><strong>{{ $t("produk.coffe") }}</strong></h5>
                              <p class="card-text">{{ $t("produk.desccoffe") }}</p>
                              <div class="d-flex justify-content-between align-items-center">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card shadow-sm">
                          <!-- <img v-on:click="toogle4 = !toogle4 | toogle4 != toogle1 | toogle4 != toogle3 | toogle4 != toogle2" v-bind:class="{besar: !toogle4}" src="/assets/img/coofe-beans.png" alt=""
                              class="bd-placeholder-img card-img-top" width="100%" height="225"> -->
                          <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                            <img src="/assets/img/kopi-bubuk-kemasan.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                          <div class="card-body">
                              <h5><strong>{{ $t("produk.coffebubuk") }}</strong></h5>
                              <p class="card-text">{{ $t("produk.coffebubukdesc") }}</p>
                              <div class="d-flex justify-content-between align-items-center">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card shadow-sm">
                          <!-- <img v-on:click="toogle4 = !toogle4 | toogle4 != toogle1 | toogle4 != toogle3 | toogle4 != toogle2" v-bind:class="{besar: !toogle4}" src="/assets/img/coofe-beans.png" alt=""
                              class="bd-placeholder-img card-img-top" width="100%" height="225"> -->
                          <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                            <img src="/assets/img/biji-kopi-kemasan.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                          <div class="card-body">
                              <h5><strong>{{ $t("produk.coffebiji") }}</strong></h5>
                              <p class="card-text">{{ $t("produk.coffebijidesc") }}</p>
                              <div class="d-flex justify-content-between align-items-center">
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </div>

          </div>

        </div>

    </div>
</section>

  <div class="modal fade" id="nomor1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <img class="rounded" src="/assets/img/aloe.png" alt="">
        </div>
      </div>
  </div>

  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <img class="rounded" src="/assets/img/betel-nut.png" alt="">
        </div>
      </div>
  </div>

  <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <img class="rounded" src="/assets/img/lalpari-crove.png" alt="">
        </div>
      </div>
  </div>

  <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <img class="rounded" src="/assets/img/coofe-beans.png" alt="">
        </div>
      </div>
  </div>

  <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <img class="rounded" src="/assets/img/kopi-bubuk-kemasan.png" alt="">
        </div>
      </div>
  </div>

  <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <img class="rounded" src="/assets/img/biji-kopi-kemasan.png" alt="">
        </div>
      </div>
  </div>

          <section id="cta" class="cta">
            <div class="container" data-aos="zoom-out">
      
              <div class="row g-5">
      
                <div class="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
                  <h3>{{ $t("kerjasama.kerjasama") }} <em>{{ $t("kerjasama.kerjasamaSpan") }}</em> {{ $t("kerjasama.kerjasamaAkhir") }}</h3>
                  <p>{{ $t("kerjasama.decs") }}</p>
                  <a class="cta-btn align-self-start text-decoration-none" href="https://wa.me/6281513110686">{{ $t("kerjasama.hubungi") }}</a>
                </div>
      
                <div class="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
                  <div class="img">
                    <img src="/assets/img/cta.jpg" alt="" class="img-fluid">
                  </div>
                </div>
      
              </div>
      
            </div>
          </section><!-- End Call To Action Section -->

      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact">
        <div class="container">
  
          <div class="section-header">
            <h2>{{ $t("kontak.desckontak") }}</h2>
            <p>{{ $t("kontak.decs") }}</p>
          </div>
  
        </div>
  
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8168746662486!2d109.3153257142695!3d-0.04877493554054083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59653cd55b01%3A0x594939744ddb8482!2sPT.%20Makmur%20Kita%20Perkasa!5e0!3m2!1sid!2sid!4v1647127453547!5m2!1sid!2sid" frameborder="0" allowfullscreen></iframe>
          <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> -->
        </div><!-- End Google Maps -->
  
        <div class="container">
  
          <div class="row">
  
            <div class="col-lg-5">
  
              <div class="info">
                <h3>{{ $t("kontak.hubungi") }}</h3>
                <p>{{ $t("kontak.deschubungi") }}</p>
  
                <div class="info-item d-flex">
                  <i class="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>{{ $t("kontak.lokasi") }}</h4>
                    <p>{{ $t("kontak.desclokasi") }}</p>
                  </div>
                </div><!-- End Info Item -->
  
                <div class="info-item d-flex">
                  <i class="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>{{ $t("kontak.email") }}</h4>
                    <p>Makmurkitaperkasa@gmail.com</p>
                  </div>
                </div><!-- End Info Item -->
  
                <div class="info-item d-flex">
                  <i class="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>{{ $t("kontak.kontak") }}</h4>
                    <p>081513110686</p>
                  </div>
                </div><!-- End Info Item -->
  
              </div>
  
            </div>
  
            <div class="col-lg-3 container">
              <div  style="margin-top:40px" class="text-center">
                  <img src="/assets/img/qr-whatsapp.png" alt="">
                  <p class="container text-muted justify-center">{{ $t("qr.whatsapp") }}</p>
              </div>
            </div>
 
            <div class="col-lg-3 container">
              <div style="margin-top:40px" class="text-center">
                  <img src="/assets/img/qr-ig.png" alt="">
                  <p class="container text-muted" style="text-size:80%">{{ $t("qr.instagram") }}</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section><!-- End Contact Section -->
  
    </main><!-- End #main -->
  
    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
  
      <div class="footer-content">
        <div class="container">
          <div class="row">
  
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>{{ $t("footer.judul") }}</h3>
                <p>{{ $t("footer.alamat") }}<br><br>
                  <strong>{{ $t("footer.telepon") }}</strong> 081513110686<br>
                  <strong>{{ $t("footer.email") }}</strong> Makmurkitaperkasa@gmail.com<br>
                </p>
              </div>
            </div>
  
            <!-- <div class="col-lg-2 col-md-6 footer-links">
              <h4>Link</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i> <a href="index.html">{{ $t("navbar.home") }}</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="#about">{{ $t("navbar.tentang") }}</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="#komitmen">{{ $t("navbar.komitmen") }}</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="#produk">{{ $t("navbar.produk") }}</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="#contact">{{ $t("navbar.kontak") }}</a></li>
              </ul>
            </div> -->
  
            <!-- <div class="col-lg-3 col-md-6 footer-links">
              <h4>Layanan Kami</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
  
      <div class="footer-legal text-center">
        <div class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
  
          <div class="d-flex flex-column align-items-center align-items-lg-start">
            <div class="copyright">
              &copy; Copyright <strong><span>PT. Makmur Kita Perkasa</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
              Didesain oleh <a href="https://bootstrapmade.com/">Khanif</a>
            </div>
          </div>
  
          <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a href="https://wa.me/6281513110686" target="_blank" class="whatsapp"><i class="bi bi-whatsapp"></i></a>
            <a href="https://instagram.com/makmurkitaperkasa?utm_medium=copy_link" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100078992497598" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
          </div>
  
        </div>
      </div>
  
    </footer><!-- End Footer -->
  
    <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    <div id="preloader"></div>


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

<style scope>
.besar{
  transform: scale(2,2);
  transition: transform 2s;
  align-items: center;
  flex-wrap: wrap;
  flex: 50%;
}

</style>
