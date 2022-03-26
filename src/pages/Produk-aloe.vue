<template>
<section>
    <div class="container atas" data-aos="fade-up">
        <div class="section-header">
            <h2>{{ $t("produk.aloe") }}</h2>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-4">
                    <div class="text-center">
                        <img src="/assets/img/aloe-vera.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-4">
                    <p>{{ $t("produk.descaloe") }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container atas" data-aos="fade-up">
        <div class="section-header">
            <h4>{{ $t("produk.descfotovideo") }}</h4>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-3">
                    <div class="text-center">
                        <img src="/assets/img/aloe-vera.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-3">
                    <div class="text-center">
                        <img src="/assets/img/aloe2.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-4">
                    <div class="text-center">
                    <video class="video" controls>
                        <source src="/assets/video/aloe-vera-video.mp4" type="video/mp4">
                    </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>