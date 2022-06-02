<template>
    <section class="banner story-banner">
        <div class="container">
            <div class="row ">
                <div class="col-12">
                    <div class="banner-content" data-aos="fade-up" data-aos-duration="2500">
                        <strong class="heading-top">Our Story</strong>
                        <h1>The Awal Private <br/>Terminal</h1>
                        <span class="sub-heading">The building was the Kingdom’s first international airport, operating in the 1960s and 1970s. The terminal serves VIP and business private passengers.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
//      props: {
//     HeadingTopText: String,
//     MainHeading: String,
//     SubHeading: String,
//     image: String,
//   },
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