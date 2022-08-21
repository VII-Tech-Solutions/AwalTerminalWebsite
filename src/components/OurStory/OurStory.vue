
<template>
  <Banner :headingTop1="heading_top_1" :heading1="heading_1" :subheading1="subheading_1" :backgroundImage1="background_image_1_url" />
  <TraditionalLuxuries :heading2="heading_2" :paragraph1="paragraph_1" :quote1="quote_1" :image1="image_1_url" />
  <HistoryCarousel :heading3="heading_3" :subheading2="subheading_2" />
  <MapLocation :heading4="heading_4" :paragraph2="paragraph_2" />
  <AllServices :image2="image_2_url" :paragraph4="paragraph_3" />
  <Service :backgroundImage2="background_image_2_url" :heading5="heading_5" :paragraph_4="paragraph_4" :column1heading1="column_1_heading_1" :column1paragraph1="column_1_paragraph_1" :column2heading1="column_2_heading_1" :column2paragraph1="column_2_paragraph_1" />
  <FooterBanner :HeadingTopText="heading_top_2" :MainHeading="heading_6" name="story-bg"
    service1="Tailored Meet & Greet" image1="tour-service-1" service2="Luxurious Lounges" image2="tour-service-2"
    service3="Flawless Departure" image3="tour-service-3" :footerbg="background_image_3_url" />
</template>                          
<script>
import Banner from "./Banner/Banner.vue";
import TraditionalLuxuries from './TraditionalLuxuries/TraditionalLuxuries.vue'
import MapLocation from './MapLocation/MapLocation.vue'
import HistoryCarousel from './HistoryCarousel/HistoryCarousel.vue'
import AllServices from './AllServices/AllServices.vue'
import Service from './Services/Service.vue'
import FooterBanner from '../FooterBanner/FooterBanner.vue'
import axios from 'axios'


export default {
  data() {
    return {
      heading_top_1: null,
      heading_1: null,
      subheading_1: null,
      paragraph_1: null,
      column_1_heading_1: null,
      column_1_paragraph_1: null,
      column_2_heading_1: null,
      column_2_paragraph_1: null,
      heading_top_2: null,
      heading_2: null,
      heading_3: null,
      heading_4: null,
      heading_5: null,
      heading_6: null,
      subheading_2: null,
      paragraph_2: null,
      paragraph_3: null,
      paragraph_4: null,
      quote_1: null,
      background_image_1_url: null,
      background_image_2_url: null,
      background_image_3_url: null,
      image_1_url: null,
      image_2_url: null
    }
  },

  methods: {

    getHomeContent() {
      axios.get('https://admin-dev.awalvip.bh/api/our-story-content')
        .then((response) => {

          let data = response.data.data.our_story_content;
          this.heading_top_1 = data.heading_top_1,
            this.heading_1 = data.heading_1,
            this.subheading_1 = data.subheading_1,
            this.paragraph_1 = data.paragraph_1,
            this.column_1_heading_1 = data.column_1_heading_1,
            this.column_1_paragraph_1 = data.column_1_paragraph_1,
            this.column_2_heading_1 = data.column_2_heading_1,
            this.column_2_paragraph_1 = data.column_2_paragraph_1,
            this.heading_top_2 = data.heading_top_2,
            this.heading_2 = data.heading_2,
            this.heading_3 = data.heading_3,
            this.heading_4 = data.heading_4,
            this.heading_5 = data.heading_5,
            this.heading_6 = data.heading_6,
            this.subheading_2 = data.subheading_2,
            this.paragraph_2 = data.paragraph_2,
            this.paragraph_3 = data.paragraph_3,
            this.paragraph_4 = data.paragraph_4,
            this.quote_1 = data.quote_1,
            this.background_image_1_url = data.background_image_1_url,
            this.background_image_2_url = data.background_image_2_url,
            this.background_image_3_url = data.background_image_3_url,
            this.image_1_url = data.image_1_url,
            this.image_2_url = data.image_2_url

        })
        .catch(function (error) {
          console.log(error.response)
         
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
