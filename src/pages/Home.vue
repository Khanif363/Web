<template>
        <section id="hero" class="hero-animated d-flex align-items-center">
      <div class="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out" style="margin-top:200px">
        <!-- <img src="/assets/img/logo-per-removebg-preview.png" class="img-fluid animated"> -->
        <h2 class="text-white"><strong>{{ $t("home.judul") }}</strong><br><span class="text-info"><strong>{{ $t("home.judulSpan") }}</strong></span></h2>
        <p class="text-light"><strong>{{ $t("home.slogan") }}</strong></p>
        <div class="d-flex">
          <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox text-decoration-none btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span class="text-light">{{ $t("home.tonton") }}</span></a>
        </div>
      </div>
    </section>
  
    <main id="main">
  

      <!-- ======= About Section ======= -->
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
  
          <div class="section-header">
            <h2>{{ $t("tentang.tentang") }}</h2>
            <!-- <p>{{ $t("tentang.desc") }}</p> -->
            <p class="text-center text-muted mt-5">{{ $t("tentang.keterangan") }}</p>
          </div>
  
          <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
  
            <div class="col-lg-5">
              <div class="">
                <img src="/assets/img/logo-per-removebg-preview.png" style="border-radius: 1%;" class="img-fluid" alt="">
              </div>
            </div>
  
            <div class="col-lg-7 ">
              <!-- <p class="text-center text-muted">{{ $t("tentang.keterangan") }}</p> -->
              <h3 class="pt-0 text-center">{{ $t("tentang.judulvisi") }}</h3>
  
              <!-- Tabs -->
              <ul class="nav ms-4 mb-2 ">
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
                  <p class="mt-4">{{ $t("tentang.descVisi") }}</p>
  
  
                </div><!-- End Tab 1 Content -->
  
                <div class="tab-pane fade show" id="tab2">
                  <p class="mt-4"><ol>
                    <li>{{ $t("tentang.descMisi1") }}</li>
                    <li>{{ $t("tentang.decsMisi2") }}</li>
                  </ol></p>
                </div><!-- End Tab 2 Content -->
  
                <div class="tab-pane fade show" id="tab3">
                  <p class="mt-4">
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
            <!-- <p>{{ $t("produk.produkdesc") }}</p> -->
        </div>

        <div data-aos="fade-up" data-aos-delay="200">

          <div class="container">

              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                  <div class="col">
                      <router-link to="/produk-aloe">
                      <div class="card shadow-sm">
                          <!-- <img v-on:click="toogle1 = !toogle1 | toogle1 != toogle2 | toogle1 != toogle3 | toogle1 != toogle4" v-bind:class="{besar: !toogle1}" src="/assets/img/aloe.png" alt=""
                              class="bd-placeholder-img card-img-top zoom" width="100%" height="225"> -->
                          <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->

                          <img src="/assets/img/aloe.png" type="button" data-bs-toggle="modal" data-bs-target="#nomor1">

                          <div class="card-body">
                              <h5><strong>{{ $t("produk.aloe") }}</strong></h5>
                              <div class="d-flex justify-content-between align-items-center">
                              </div>
                          </div>
                      </div>
                      </router-link>
                  </div>
                  <div class="col">
                      <router-link to="/produk-betel">
                      <div class="card shadow-sm">
                          <img src="/assets/img/betel-nut.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                          <div class="card-body">
                              <h5><strong>{{ $t("produk.betel") }}</strong></h5>
                          </div>
                      </div>
                      </router-link>
                  </div>
                  <div class="col">
                      <router-link to="/produk-clove">
                      <div class="card shadow-sm">
                            <img  src="/assets/img/lalpari-crove.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                              <div class="card-body">
                                <h5><strong>{{ $t("produk.lalpari") }}</strong></h5>
                              </div>
                      </div>
                      </router-link>
                  </div>
                  <div class="col">
                      <router-link to="/produk-coffee">
                      <div class="card shadow-sm">
                            <img src="/assets/img/coofe-beans.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                            <div class="card-body">
                              <h5><strong>{{ $t("produk.coffe") }}</strong></h5>
                            </div>
                      </div>
                      </router-link>
                  </div>
                  <!-- <div class="col">
                      <div class="card shadow-sm">
                           <img src="/assets/img/kopi-bubuk-kemasan.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                            <div class="card-body">
                              <h5><strong>{{ $t("produk.coffebubuk") }}</strong></h5>
                          </div>
                      </div>
                  </div> -->
                  <!-- <div class="col">
                      <div class="card shadow-sm">
                            <img src="/assets/img/biji-kopi-kemasan.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                          <div class="card-body">
                              <h5><strong>{{ $t("produk.coffebiji") }}</strong></h5>
                          </div>
                      </div>
                  </div> -->
                  
              </div>

          </div>

        </div>

    </div>
</section>

<!-- Test Fitur -->
<!-- Modal -->
  <!-- <div class="modal fade" id="nomor1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">

        <div id="carouselExampleControls"  class="carousel slide" data-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/aloe.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card border-0">
                      <div class="card-body">
                          <h4><strong>{{ $t("produk.aloe") }}</strong></h4>
                          <p class="card-text">{{ $t("produk.descaloe") }}</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row">
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/betel-nut.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card border-0">
                      <div class="card-body">
                          <h4><strong>{{ $t("produk.betel") }}</strong></h4>
                          <p class="card-text">{{ $t("produk.descbetel") }}</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row">
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/lalpari-crove.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card border-0">
                      <div class="card-body">
                        <h4><strong>{{ $t("produk.lalpari") }}</strong></h4>
                        <p class="card-text">{{ $t("produk.desclalpari1") }}<br>
                        {{ $t("produk.desclalpari2") }}<br>
                        {{ $t("produk.desclalpari3") }}<br>
                        {{ $t("produk.desclalpari4") }}</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row">
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/coofe-beans.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card border-0">
                      <div class="card-body">
                        <h4><strong>{{ $t("produk.coffe") }}</strong></h4>
                        <p class="card-text">{{ $t("produk.desccoffe") }}</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row">
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/kopi-bubuk-kemasan.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card border-0">
                      <div class="card-body">
                          <h4><strong>{{ $t("produk.coffebubuk") }}</strong></h4>
                          <p class="card-text">{{ $t("produk.coffebubukdesc") }}</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row">
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/biji-kopi-kemasan.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card border-0">
                      <div class="card-body">
                        <h4><strong>{{ $t("produk.coffebiji") }}</strong></h4>
                        <p class="card-text">{{ $t("produk.coffebijidesc") }}</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div> -->

<!-- End Test Fitur -->
  <!-- <div class="modal fade" id="nomor1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container px-4">
                <div class="row overflow-hidden gx-5">
                  <div class="col-6">
                  <div class="p-3 border bg-light">
                    <img class="rounded" src="/assets/img/aloe.png" alt="">
                  </div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light">Custom column padding</div>
                  </div>
                </div>
              </div>
            </div>         
          
        </div>
      </div>
  </div> -->

          <!-- <section id="cta" class="cta">
            <div class="container" data-aos="zoom-out">
      
              <div class="row g-5">
      
                <div class="col-lg-12 col-md-12 content d-flex flex-column justify-content-center order-last order-md-first ms-auto mr-auto">
                  <h3>{{ $t("kerjasama.kerjasama") }} <em>{{ $t("kerjasama.kerjasamaSpan") }}</em> {{ $t("kerjasama.kerjasamaAkhir") }}</h3>
                  <p>{{ $t("kerjasama.decs") }}</p>
                  <a class="cta-btn align-self-start text-decoration-none" href="https://wa.me/6281513110686">{{ $t("kerjasama.hubungi") }}</a>
                </div>   
              </div>
            </div>
          </section> -->
          <!-- End Call To Action Section -->

      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact">
        <div class="container">
  
          <div class="section-header">
            <h2>{{ $t("kontak.desckontak") }}</h2>
            <!-- <p>{{ $t("kontak.decs") }}</p> -->
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
                <!-- <p>{{ $t("kontak.deschubungi") }}</p> -->
  
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
                  <p class="container text-muted mx-auto">{{ $t("qr.whatsapp") }}</p>
              </div>
            </div>
 
            <div class="col-lg-3 container">
              <div style="margin-top:40px" class="text-center">
                  <img src="/assets/img/qr-ig.png" alt="">
                  <p class="container text-muted mx-auto" style="text-size:80%">{{ $t("qr.instagram") }}</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section><!-- End Contact Section -->
  
    </main><!-- End #main -->
 
</template>
