<template>
<section>
    <div class="container atas" data-aos="fade-up">
        <div class="section-header">
            <h2><strong>{{ $t("produk.aloe") }}</strong></h2>
        </div>
        <div class="container">
            <div class="row cols-sm-6 justify-content-center g-5">
                <div class="col-12 col-sm-4">
                    <div class="text-center">
                        <img src="/assets/img/aloe-vera.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-12 col-sm-5">
                    <ul>
                        <li><h5>{{ $t("produk.descaloe1") }}</h5></li>
                        <li><h5>{{ $t("produk.descaloe2") }}</h5></li>
                        <li><h5>{{ $t("produk.descaloe3") }}</h5></li>
                        <li><h5>{{ $t("produk.descaloe4") }}</h5></li>
                        <li><h5>{{ $t("produk.descaloe5") }}</h5></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container atas" data-aos="fade-up">
        <div class="section-header">
            <h4>{{ $t("produk.descfotovideo") }}</h4>
        </div>
        <div class="container">
            <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center g-1">
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        <img src="/assets/img/aloe-vera.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        <img src="/assets/img/aloe2.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 justify-content-center mt-5">
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    <video class="video rounded border" controls>
                        <source src="/assets/video/aloe-update.mp4" type="video/mp4">
                    </video>
                    </div>
                </div>
            </div>
        </div>
<!-- <div class="modal fade" id="nomor1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">

        <div id="carouselExampleControls"  class="carousel slide" data-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
                  <div class="">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/aloe.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
            </div>
            <div class="carousel-item ">
                  <div class="">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/betel-nut.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
            </div>
            <div class="carousel-item ">
                  <div class="">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/lalpari-crove.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
            </div>
            <div class="carousel-item ">
                  <div class="">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/coofe-beans.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
            </div>
                  <div class="">
                    <div class="card">
                      <div class="card-body">
                        <img src="/assets/img/kopi-bubuk-kemasan.png" class="d-block w-100"  alt="">
                      </div>
                    </div>
                  </div>
            </div>
            <div class="carousel-item ">
                <div class="">
                    <div class="card">
                        <div class="card-body">
                        <img src="/assets/img/biji-kopi-kemasan.png" class="d-block w-100"  alt="">
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

    </div>

            <!-- Modal -->
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src="/assets/img/aloe-vera.png" class="rounded img-fluid" alt="...">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src="/assets/img/aloe2.png" class="rounded border img-fluid" alt="...">
                </div>
            </div>
        </div>
        
</section>
</template>