<template>
    <section class="banner elite-banner" v-bind:style="{ backgroundImage: 'url(' + backgroundImage1 + ')' }" >
        <div class="container">
            <div class="row ">
                <div class="col-12">
                    <div class="banner-content" data-aos-offset="0" data-aos="fade-up" data-aos-duration="2500">
                        <strong class="heading-top">{{headingTop1}}</strong>
                        <h1>{{heading1}}</h1>
                        <span class="sub-heading">{{subheading1}}</span>
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
export default {
 props: {
    headingTop1: String,
    heading1: String,
    subheading1: String,
    backgroundImage1: String
  },
}
</script>


<style>
/* .banner.elite-banner {
    background-image: url("../../assets/images/banner-img3.png");
} */
</style>