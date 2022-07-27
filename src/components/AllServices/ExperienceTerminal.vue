<template>
    <section class="experience-terminal two-fold two-fold-2" v-bind:style="{ backgroundImage: 'url(' + bigImage1 + ')' }">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 offset-lg-5">
                    <div class="two-fold-content"  >
                        <h2 class="mb-lg-3" data-aos="fade-up" data-aos-duration="2500">{{heading5}}</h2>
                        <div>
                            <div class="two-fold-inner-text" data-aos="fade-up" data-aos-duration="2500">
                                <p>{{paragraph4}}</p>
                            </div>
                            <div class="sublime-luxury-img experience-img" data-aos="fade-up" data-aos-duration="2500">
                                <img class="img-fluid" :src="squareImage2"
                                    alt="sublime-luxury">
                            </div>
                            <button class="common-btn" data-aos="fade-bottom" data-aos-duration="2500">take a tour</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

    props: {
        bigImage1: String,
        heading5: String,
        paragraph4: String,
        squareImage2: String
    }
}
</script>
<style>
.experience-terminal.two-fold.two-fold-2{margin:0px 0px 150px 0px;}
.experience-terminal .two-fold-content {padding:95px;}
.sublime-luxury-img.experience-img{width:360px;}
@media (max-width:1199px) {
.experience-terminal.two-fold.two-fold-2{margin:0px 0px 100px 0px;}
.experience-terminal .two-fold-content {padding:60px;}
}
@media (max-width:767px) {
.experience-terminal.two-fold.two-fold-2{margin:0px 0px 80px 0px;}
.experience-terminal .two-fold-content {padding:40px;}
}
@media (max-width:567px) {
.sublime-luxury-img.experience-img {width:auto;}
}
</style>