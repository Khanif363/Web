<template>
<section>
    <div class="container atas" data-aos="fade-up">
        <div class="section-header">
            <h2><strong>{{ $t("produk.coffe") }}</strong></h2>
        </div>
        <div class="container">
            <div class="row cols-sm-6 justify-content-center g-5">
                <div class="col-12 col-sm-4">
                    <div class="text-center">
                        <img src="/assets/img/coffee3.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-12 col-sm-5">
                    <ul>
                        <li><h5>{{ $t("produk.kategori") }}</h5></li>
                        <ol>
                            <li><h5>{{ $t("produk.kategori1") }}</h5></li>
                            <li><h5>{{ $t("produk.kategori2") }}</h5></li>
                            <li><h5>{{ $t("produk.kategori3") }}</h5></li>
                        </ol>
                        <li class="mt-1"><h5>{{ $t("produk.desccoffee1") }}</h5></li>
                        <li class="mt-1"><h5>{{ $t("produk.desccoffee2") }}</h5></li>
                        <li class="mt-1"><h5>{{ $t("produk.desccoffee3") }}</h5></li>
                        <li class="mt-1"><h5>{{ $t("produk.desccoffee4") }}</h5></li>
                        <li class="mt-1"><h5>{{ $t("produk.desccoffee5") }}</h5></li>
                        <li class="mt-1"><h5>{{ $t("produk.desccoffee6") }}</h5></li>
                        <li class="mt-1"><h5>{{ $t("produk.kebutuhancoffee") }}</h5></li>
                    </ul>
                    <!-- <p>{{ $t("produk.desclalpari1") }}<br>
                        {{ $t("produk.desclalpari2") }}<br>
                        {{ $t("produk.desclalpari3") }}<br>
                        {{ $t("produk.desclalpari4") }}
                    </p> -->
                </div>
            </div>
        </div>
    </div>
    <div class="container atas" data-aos="fade-up">
        <div class="section-header">
            <h4>{{ $t("produk.descfotovideo") }}</h4>
        </div>
        <div class="container-fluid">
            <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center g-1">
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        <img src="/assets/img/coffee3.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        <img src="/assets/img/kopi-bubuk-kemasan.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                        <img src="/assets/img/biji-kopi-kemasan.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                        <img src="/assets/img/coffee2.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                        <img src="/assets/img/coffee-beans.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal7">
                        <img src="/assets/img/kopi1.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal8">
                        <img src="/assets/img/kopi2.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                        <img src="/assets/img/coffee4.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
            </div>
            <!-- <div class="row justify-content-center mt-5">
                <div class="col-4">
                    <div class="text-center">
                    <video class="video" controls>
                        <source src="/assets/video/clove-video.mp4" type="video/mp4">
                    </video>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src="/assets/img/coffee-beans.png" class="rounded img-fluid" alt="...">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src="/assets/img/kopi-bubuk-kemasan.png" class="rounded border img-fluid" alt="...">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src="/assets/img/biji-kopi-kemasan.png" class="rounded border img-fluid" alt="...">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src="/assets/img/coffee2.png" class="rounded border img-fluid" alt="...">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src="/assets/img/coffee3.png" class="rounded border img-fluid" alt="...">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src="/assets/img/coffee4.png" class="rounded border img-fluid" alt="...">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src="/assets/img/kopi1.png" class="rounded border img-fluid" alt="...">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src="/assets/img/kopi2.png" class="rounded border img-fluid" alt="...">
                </div>
            </div>
        </div>
</section>
</template>