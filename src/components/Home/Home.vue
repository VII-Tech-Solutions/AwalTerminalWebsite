<template>
   <!-- <Banner HeadingTopText="Welcome to Awal Private Terminal" MainHeading="We’ll take it from here" SubHeading="Awal Private Terminal is setting new standards of luxury for private aircraft users and Elite guests on commercial flights." image="banner-img.jpg"/> -->
   <Banner/>
   <TwoFoldModuleVue />
   <OurStory />
   <LuxuryView />
   <TwoFoldModuleVue2 />
   <TourTerminal />
   <FooterBanner HeadingTopText="5-star hospitality services" MainHeading="Smooth, seamless service" name="home-bg" service1="Expert Handling" image1="home-service-1"  service2="Luxury Transport" image2="home-service-2" service3="Perfect Departure" image3="home-service-3" />
</template>

<script>
	import Banner from '../Banner/Banner.vue'
	import TwoFoldModuleVue from './TwoFoldModule/TwoFoldModule.vue'
	import TwoFoldModuleVue2 from './TwoFoldModule2/TwoFoldModule2.vue'
	import OurStory from './OurStory/OurStory.vue'
	import LuxuryView from './LuxuryView/LuxuryView.vue'
	import TourTerminal from './TourTerminal/TourTerminal.vue'
	import FooterBanner from '../FooterBanner/FooterBanner.vue'
	
    export default {
		mounted () {
  window.scrollTo(0, 0)
},
		components: {
			Banner,
			TwoFoldModuleVue,
			TwoFoldModuleVue2,
			OurStory,
			LuxuryView,
			TourTerminal,
			FooterBanner,
		},
	}
</script>