<template>
    <section class="banner elite-banner">
        <div class="container">
            <div class="row ">
                <div class="col-12">
                    <div class="banner-content" data-aos="fade-up" data-aos-duration="2500">
                        <strong class="heading-top">Elite Services</strong>
                        <h1>Experience<br/> Awal Private Terminal</h1>
                        <span class="sub-heading">The building was the Kingdom’s first international airport, operating in the 1960s and 1970s. The terminal serves VIP and business private passengers.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>
<style>
.banner.elite-banner {
    background-image: url("../../assets/images/banner-img3.png");
}
</style>