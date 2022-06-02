<template>
    <Banner/>
    <SupportServiceTwoFold/>
    <GeneralAviationBook/>
    <div class="d-block">
        <figure class="mb-0" data-aos="zoom-up" data-aos-duration="2500">
            <img class="cover-img img-fluid w-100" src="../../assets/images/cover-img.png"/>
        </figure>
    </div>
    <ComfortService/>
    <TakeTour/>
    <FooterBanner
        HeadingTopText="5-star hospitality services"
        MainHeading="Premium hospitality"
        name="GeneralAviation-bg"
        service1="Expert Handling"
        image1="home-service-1"
        service2="Luxury Transport"
        image2="home-service-2"
        service3="Perfect Departure"
        image3="home-service-3"
    />
</template>  

<script>
import Banner from "./Banner.vue";
import FooterBanner from "../FooterBanner/FooterBanner.vue";
import SupportServiceTwoFold from "./SupportServiceTwoFold.vue";
import GeneralAviationBook from "./GeneralAviationBook.vue";
import ComfortService from './ComfortService.vue';
import TakeTour from './TakeTour.vue';

export default {
     mounted () {
  window.scrollTo(0, 0)
},
  components: {
    Banner,
    FooterBanner,
    SupportServiceTwoFold,
    GeneralAviationBook,
    ComfortService,
    TakeTour,
},
  
};
</script>
<style>
</style>
