<template>
<section>
    <div class="container atas" data-aos="fade-up">
        <div class="section-header">
            <h2>{{ $t("produk.lalpari") }}</h2>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-4">
                    <div class="text-center">
                        <img src="/assets/img/clove.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-4">
                    <p>{{ $t("produk.desclalpari1") }}<br>
                        {{ $t("produk.desclalpari2") }}<br>
                        {{ $t("produk.desclalpari3") }}<br>
                        {{ $t("produk.desclalpari4") }}
                    </p>
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
                        <img src="/assets/img/clove.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-3">
                    <div class="text-center">
                        <img src="/assets/img/clove2.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-3">
                    <div class="text-center">
                        <img src="/assets/img/clove3.png" class="rounded border img-fluid" alt="...">
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-4">
                    <div class="text-center">
                    <video class="video" controls>
                        <source src="/assets/video/clove-video.mp4" type="video/mp4">
                    </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style>
.video {
    width: 100%;
    height: 80%;
    max-height: 400px;
}
</style>