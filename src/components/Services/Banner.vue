<template>
    <section class="banner service-banner" v-bind:style="{ backgroundImage: 'url(' + backgroundImage1 + ')' }">
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
}

</script>
<style>
/* .banner.service-banner {
    background-image: url("../../assets/images/service-bg.jpg");
} */
/* .banner {
    background: url("../../assets/images/banner-img.jpg");
    background-position: center;
    background-size: cover;
    height: 100vh;
    position: relative;
    z-index: 1;
    color: #fff;
}
.banner-content {
    position: absolute;
    bottom: 0;
    margin-bottom: 60px;
}
.banner-content .heading-top{
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    font-weight: 600;
}
.banner-content .sub-heading{
    font-size: 18px;
    line-height: 21px;
    font-weight: 600;
    width: 65%;
    display: inline-block;
} */
</style>