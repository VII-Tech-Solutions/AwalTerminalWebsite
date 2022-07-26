<template>
    <Section class="LuxuryView">
        <div class="luxury-view-img" data-aos="zoom-in" data-aos-duration="2500">
            <img class="img-fluid w-100" :src="sectionImage1" alt="luxury view">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="main-page-title " >
                        <div class="horizon" data-aos="fade-up" data-aos-duration="2500"><span class="page-subtitle text-uppercase">experiences tailored to you</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>
<script>
export default {
    props:{
        sectionImage1: String
    },
    components: {
        name: "LuxuryView"
    }
}
</script>
<style>
/* .LuxuryView {
    padding-bottom: 120px
} */
.luxury-view-img {
    margin-bottom: 120px;
}
@media (max-width:1199px) {
    .luxury-view-img {margin-bottom: 100px;}
}
@media (max-width:91px) {
    .luxury-view-img {margin-bottom: 80px;}
}
@media (max-width:767px) {
    .luxury-view-img {margin-bottom: 65px;}
}
@media (max-width:575px) {
    .luxury-view-img {margin-bottom: 50px;}
}
</style>