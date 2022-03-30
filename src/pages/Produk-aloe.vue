<template>
<section>
    <div class="container atas" data-aos="fade-up">
        <div class="section-header">
            <h2>{{ $t("produk.aloe") }}</h2>
        </div>
        <div class="container">
            <div class="row cols-sm-6 justify-content-center g-4">
                <div class="col-12 col-sm-4">
                    <div class="text-center">
                        <img src="/assets/img/aloe-vera.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                    <h5>{{ $t("produk.descaloe1") }}<br>
                        {{ $t("produk.descaloe2") }}<br>
                        {{ $t("produk.descaloe3") }}<br>
                        {{ $t("produk.descaloe4") }}<br>
                        {{ $t("produk.descaloe5") }}<br>
                    </h5>
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
                    <div class="text-center">
                        <img src="/assets/img/aloe-vera.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <img src="/assets/img/aloe2.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 justify-content-center mt-5">
                <div class="col">
                    <div class="text-center">
                    <video class="video rounded" controls>
                        <source src="/assets/video/aloe-vera-video.mp4" type="video/mp4">
                    </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>