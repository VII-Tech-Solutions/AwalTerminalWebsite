<template>
    <section class="two-fold support-service" v-bind:style="{ backgroundImage: 'url(' + big_image_1_url + ')' }" >
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-10 col-12">
                    <div class="two-fold-content">
                        <h2 data-aos="fade-up" data-aos-duration="2500">{{heading2}}</h2>
                        <div class="two-fold-inner">
                            <div class="two-fold-inner-text" data-aos="fade-up" data-aos-duration="2500">
                                <p>{{paragraph1}}</p>
                            </div>
                            <div class="sublime-luxury-img" data-aos="fade-up" data-aos-duration="2500">
                                <img class="img-fluid" :src="squareImage1"
                                    alt="sublime-luxury">
                            </div>
                            <router-link to="/general-aviation-form1" @click="clearStorage()" class="visit-terminal-btn"
                                data-aos="fade-bottom" data-aos-duration="2500">Book General Aviation</router-link>
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
        heading2: String,
        paragraph1: String,
        squareImage1: String,
        big_image_1_url: String
    },
    methods: {
        clearStorage() {
            localStorage.removeItem("data");
            localStorage.removeItem("textboxdata");
        },
    },
}
</script>
<style>
.support-service.two-fold {
    background-image: url("../../assets/images/support-twofold.png");
}
</style>