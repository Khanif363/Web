<template>
<section>
    <div class="container atas" data-aos="fade-up">
        <div class="section-header">
            <h2><strong>{{ $t("produk.betel") }}</strong></h2>
        </div>
        <div class="container">
            <div class="row cols-sm-6 justify-content-center g-5">
                <div class="col-12 col-sm-4">
                    <div class="text-center">
                        <img src="/assets/img/betel.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-12 col-sm-5">
                    <ul>
                        <!-- <li><h5>{{ $t("produk.descbetel") }}</h5></li> -->
                        <li><h5>{{ $t("produk.quality") }}</h5></li>
                        <li><h5>{{ $t("produk.type") }}</h5></li>
                        <li><h5>{{ $t("produk.moisture") }}</h5></li>
                        <li><h5>{{ $t("produk.packaging") }}</h5></li>
                        <li><h5>{{ $t("produk.quantity") }}</h5></li>
                        <li><h5>{{ $t("produk.size") }}</h5></li>
                        <ol>
                            <li><h5>{{ $t("produk.descsize1") }}</h5></li>
                            <li><h5>{{ $t("produk.descsize2") }}</h5></li>
                        </ol>
                        <li><h5>{{ $t("produk.place") }}</h5></li>
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
                    <div class="text-center">
                        <img src="/assets/img/betel.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <img src="/assets/img/betel2.png" class="rounded img-fluid" alt="...">
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
</template>

<style>
.atas {
    margin-top: 100px;
}
</style>