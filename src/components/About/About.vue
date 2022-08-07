<template>
    About
  <FooterBanner :HeadingTopText="heading_top_2" :MainHeading="heading_5" name="tour-bg" service1="Friendly Meet & Greet"
                image1="tour-service-1" service2="Luxurious Lounges" image2="tour-service-2" service3="Flawless Departure"
                image3="tour-service-3" :footerbg="background_image_2_url" />
</template>
<script>
import FooterBanner from "../FooterBanner/FooterBanner.vue";

    export default {
        mounted () {
  window.scrollTo(0, 0)
},
      components: {
        FooterBanner,
      },
		
	}
</script>