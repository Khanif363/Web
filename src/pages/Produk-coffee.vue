<template>
<section>
    <div class="container atas" data-aos="fade-up">
        <div class="section-header">
            <h2>{{ $t("produk.coffe") }}</h2>
        </div>
        <div class="container">
            <div class="row cols-sm-6 justify-content-center g-5">
                <div class="col-12 col-sm-4">
                    <div class="text-center">
                        <img src="/assets/img/coffee3.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                    <ul>
                        <li><h5>{{ $t("produk.kategori") }}</h5></li>
                        <ol>
                            <li><h5>{{ $t("produk.kategori1") }}</h5></li>
                            <li><h5>{{ $t("produk.kategori2") }}</h5></li>
                            <li><h5>{{ $t("produk.kategori3") }}</h5></li>
                        </ol>
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
                    <div class="text-center">
                        <img src="/assets/img/coffee-beans.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <img src="/assets/img/kopi-bubuk-kemasan.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <img src="/assets/img/biji-kopi-kemasan.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <img src="/assets/img/coffee2.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <img src="/assets/img/coffee3.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
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
</section>
</template>