
<template>
    <Banner/>
    <TraditionalLuxuries />
    <HistoryCarousel />
    <MapLocation />
    <AllServices />
    <Service />
    <FooterBanner
    HeadingTopText="5-star hospitality services"
    MainHeading="A luxurious journey"
    name="story-bg"
    service1="Meet & Greet"
    image1="tour-service-3"
    service2="Luxurious Lounges"
    image2="tour-service-2"
    service3="Flawless Departure"
    image3="tour-service-1"
  />
</template>                          
<script>
import Banner from "./Banner/Banner.vue";
import TraditionalLuxuries from './TraditionalLuxuries/TraditionalLuxuries.vue'
import MapLocation from './MapLocation/MapLocation.vue'
import HistoryCarousel from './HistoryCarousel/HistoryCarousel.vue'
import AllServices from './AllServices/AllServices.vue'
import Service from './Services/Service.vue'
import FooterBanner from '../FooterBanner/FooterBanner.vue'
export default {
  mounted () {
  window.scrollTo(0, 0)
},
  components: {
    Banner,
    TraditionalLuxuries,
    HistoryCarousel,
    MapLocation,
    AllServices,
    Service,
    FooterBanner,
  },
};
</script>

<style>
</style>
