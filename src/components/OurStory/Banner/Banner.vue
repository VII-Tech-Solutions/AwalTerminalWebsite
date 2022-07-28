<template>
    <section class="banner story-banner"  v-bind:style="{ backgroundImage: 'url(' + backgroundImage1 + ')' }">
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
export default {
    props: {
        headingTop1: String,
        heading1: String,
        subheading1: String,
        backgroundImage1: String
    },
    name: "Banner",
    data() {
        return {
            HeadingTopText: "Welcome to Awal Private Terminal",
            MainHeading: "We’ll take it from here",
            SubHeading: "Awal Private Terminal is setting new standards of luxury for private aircraft users and Elite guests on commercial flights.",
        };
    },
}

</script>
<style>
.banner.story-banner {
    background-image: url("../../../assets/images/service-footer-bg.jpg");
}
</style>