<template>
	<Banner :image="background_image_1" :HeadingTopText="heading_top_1" :MainHeading="heading_1" :SubHeading="subheading_1" />
	<TwoFoldModuleVue :heading2="heading_2" :paragraph1="paragraph_1" :squareImage="square_image_1_url"  :backgroundImage2="background_image_2"  />
	<OurStory :heading4="heading_4" :paragraph2="paragraph_2" :image1="image_1" />
	<LuxuryView :sectionImage1="section_image_1" />
	<TwoFoldModuleVue2 :heading3="heading_3" :paragraph3="paragraph_3" :bulletPoint1="bullet_point_1" :bulletPoint2="bullet_point_2" :bulletPoint3="bullet_point_3" :bulletPoint4="bullet_point_4" :bulletPoint5="bullet_point_5" />
	<TourTerminal :image2="image_2" :paragraph4="paragraph_4" />
	<FooterBanner :HeadingTopText="heading_top_2" :MainHeading="heading_4" name="home-bg"
		service1="Expert Handling" image1="home-service-1" service2="Luxury Transport" image2="home-service-2"
		service3="Perfect Departure" image3="home-service-3" :backgroundImage4="background_image_4" />
</template>

<script>
import Banner from '../Banner/Banner.vue'
import TwoFoldModuleVue from './TwoFoldModule/TwoFoldModule.vue'
import TwoFoldModuleVue2 from './TwoFoldModule2/TwoFoldModule2.vue'
import OurStory from './OurStory/OurStory.vue'
import LuxuryView from './LuxuryView/LuxuryView.vue'
import TourTerminal from './TourTerminal/TourTerminal.vue'
import FooterBanner from '../FooterBanner/FooterBanner.vue'
import axios from 'axios'
export default {
	data() {
		return {
			background_image_1: "",
			heading_top_1: null,
			heading_1: null,
			subheading_1: null,
			paragraph_1: null,
			square_image_1_url: null,
			image_1: null,
			section_image_1: null,
			background_image_2: null,
			background_image_3: null,
			background_image_4: null,
			heading_top_2: null,
			heading_2: null,
			heading_3: null,
			heading_4: null,
			paragraph_2: null,
			paragraph_3: null,
			paragraph_4: null,
			image_2: null,
			bullet_point_1: null,
			bullet_point_2: null,
			bullet_point_3: null,
			bullet_point_4: null,
			bullet_point_5: null
		}
	},

	methods: {

		getHomeContent() {
			axios.get('https://awal.viitech.net/api/homepage-content')
				.then((response) => {

					let data = response.data.data.homepage_content;

					this.background_image_1 = data.background_image_1_url;
						this.heading_top_1 = data.heading_top_1;
						this.heading_1 = data.heading_1;
						this.subheading_1 = data.subheading_1;
						this.paragraph_1 = data.paragraph_1;
						this.square_image_1_url = data.square_image_1_url;
						this.image_1 = data.image_1_url;
						this.image_2 = data.image_2_url;
						this.section_image_1 = data.section_image_1_url;
						this.background_image_2 = data.background_image_2_url;
						this.background_image_3 = data.background_image_3_url;
						this.background_image_4 = data.background_image_4_url;
						this.heading_top_2 = data.heading_top_2;
						this.heading_2 = data.heading_2;
						this.heading_3 = data.heading_3;
						this.heading_4 = data.heading_4;
						this.paragraph_2 = data.paragraph_2;
						this.paragraph_3 = data.paragraph_3;
						this.paragraph_4 = data.paragraph_4;
						
						this.bullet_point_1 = data.bullet_point_1;
						this.bullet_point_2 = data.bullet_point_2;
						this.bullet_point_3 = data.bullet_point_3;
						this.bullet_point_4 = data.bullet_point_4;
						this.bullet_point_5 = data.bullet_point_5;
					
				})
				.catch(function (error) {
					console.log(error.response)
					that.state_loading = false
				})
		}
	},

	created() {
		this.getHomeContent();
	},

	mounted() {

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