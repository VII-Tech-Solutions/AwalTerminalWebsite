
<template>
  <Banner />

  <div class="tour" data-aos="fade-up" data-aos-duration="2500" >
    <figure class="mb-0">
      <img
        src="../../assets/images/map-img.png"
        class="img-fluid w-100"
        alt="5-Start Hospitality services"
      />
    </figure>
  </div>
  <Trivial />
  <WlakThroughTerminal />
  <PrivateLounges />
  <FooterBanner
    HeadingTopText="5-star hospitality services"
    MainHeading="Tailored to you"
    name="tour-bg"
    service1="Meet & Greet"
    image1="tour-service-3"
    service2="Luxurious Lounges"
    image2="tour-service-2"
    service3="Flawless Departure"
    image3="tour-service-1"
  />
</template>                          
<script>
import Trivial from "./Trivial.vue";
import WlakThroughTerminal from "./WlakThroughTerminal.vue";
import PrivateLounges from "./PrivateLounges.vue";
import Banner from "./Banner.vue";
import FooterBanner from "../FooterBanner/FooterBanner.vue";

export default {
  mounted () {
  window.scrollTo(0, 0)
},
  components: {
    Trivial,
    WlakThroughTerminal,
    PrivateLounges,
    Banner,
    FooterBanner,
  },
};
</script>

                                   

<style>
</style>
