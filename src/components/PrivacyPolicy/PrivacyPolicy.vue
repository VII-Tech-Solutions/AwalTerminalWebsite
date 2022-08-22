<template>
<div style="background-color: #fbfaf9;">
  <section class="privacy-policy-banner" style="background-color: #011e41; height: 369px; padding-bottom: unset">
    <div class="container">
      <div class="row ">
        <div class="col-12">
          <div class="banner-content" data-aos-offset="0" data-aos="fade-up" data-aos-duration="2500">
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="privacy-policy-content">
  <div class="privacy-policy-title">
    POLICY STATEMENTS
  </div>

  <div class="privacy-policy-paragraph">
    Bahrain Airport Company is committed to respecting your privacy and protecting your personal data. We recognise our obligation to keep sensitive information secure and have created this statement to share and explain how your personal data is handled and collected while visiting our website(s) and using our mobile application(s).
  </div>

  <div class="privacy-policy-paragraph">
  The legal basis for the processing of your personal data /mobile application is derived from Law No. (30) of 2018 with Respect to Personal Data Protection law.
  </div>

  <div class="privacy-policy-paragraph">
  In this privacy policy statement, the words "we", "our" and "us" refers to Bahrain Airport Company, and “you” and “your” refers to the user of the Website(s) and the mobile application(s).
  </div>

  <div class="privacy-policy-paragraph">
  This Privacy policy applies to Bahrain Airport Company website(s), mobile application(s) and mobile website(s) (collectively referred to as the “Platforms”).
  </div>

  <div class="privacy-policy-paragraph">
  Bahrain Airport Company (BAC) is the controller of processing the personal data collected about you via our platforms.
  </div>

  <div class="privacy-policy-paragraph">
  The company contact information:
  </div>
  <div class="privacy-policy-paragraph">
  Bahrain Airport Company – Building: 124, Road: 2403, Block 224, Muharraq, Kingdom of Bahrain
  </div>
  <div class="privacy-policy-paragraph">
  You can find out more about Bahrain Airport Company here.
  </div>

  <div class="privacy-policy-paragraph">
  The primary point of contact for all issues arising from this Privacy Policy is our Risk and Compliance Manager, who can be contacted on the following communication channels:
  </div>

  <div class="privacy-policy-paragraph">
  Email: information.security@bac.bh
  </div>
  <div class="privacy-policy-paragraph">
  Telephone: +97317353490
  </div>
  <div class="privacy-policy-paragraph">
  Post mail: P.O. Box 24924, Kingdom of Bahrain, referencing “Privacy Policy”, attention to Manager Risk and Compliance.
  </div>
  <div class="privacy-policy-paragraph">
  If you have any questions, concerns, or complaints regarding our compliance with this Privacy Policy, we encourage you to first contact our Risk and Compliance Manager. We will investigate and attempt to resolve complaints and disputes as quickly as possible, and in any event, within the timescales mentioned in the below statements.
  </div>


</section>
  <FooterBanner :HeadingTopText="heading_top_2" :MainHeading="heading_4" name="tour-bg" :service1="service1" :image1="image1" :service2="service2" :image2="image2"
                :service3="service3" :image3="image3" :footerbg="background_image_4" />

</div>
</template>

<script>
import FooterBanner from "../FooterBanner/FooterBanner.vue";
import Banner from '../Banner/Banner.vue'
import axios from "axios";
import configs from "../constants";

export default {
  name: "PrivacyPolicy.vue",
    mounted () {
    console.log("before",this.$router.options.history.state.back);
      window.scrollTo(0, 0)
    },
    components: {
      FooterBanner,
      Banner,
    },
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
      bullet_point_5: null,
      prevRoute: null,
      route: null,
      dataRequest: null,
      image1: "",
      image2: "",
      image3: "",
      service1: "",
      service2: "",
      service3: "",
      footerBackground:null,
    }
  },

  methods: {
    getHomeContent() {
      if(this.$router.options.history.state.back === "/" || "/contact"){
        this.route = "homepage-content";
        this.dataRequest = "response.data.data.homepage-content";
        this.image1 = "home-service-1";
        this.image2 = "home-service-2";
        this.image3 = "home-service-3";
        this.service1 ="Expert Handling";
        this.service2 ="Luxury Transport";
        this.service3 ="Perfect Departure";
      }
      else if (this.$router.options.history.state.back === "/tour"){
        this.route = "tour-the-terminal-content";
        this.dataRequest = "response.data.data.tour-the-terminal-content";
        this.image1 = "tour-service-1";
        this.image2 = "tour-service-2";
        this.image3 = "tour-service-3";
        this.service1 ="Friendly Meet & Greet";
        this.service2 ="Luxurious Lounges";
        this.service3 ="Flawless Departure";
      }
      else if (this.$router.options.history.state.back ==="/story"){
        this.route = "our-story-content";
        this.dataRequest = "response.data.data.our-story-content";
        this.image1 = "tour-service-1";
        this.image2 = "tour-service-2";
        this.image3 = "tour-service-3";
        this.service1 ="Tailored Meet & Greet";
        this.service2 ="Luxurious Lounges";
        this.service3 ="Flawless Departure";
      }
      else if (this.$router.options.history.state.back ==="/services"){
        this.route = "services-content";
        this.dataRequest = "response.data.data.services-content";
        this.image1 = "services-service-1";
        this.image2 = "services-service-2";
        this.image3 = "services-service-3";
        this.service1 ="Excellent Service";
        this.service2 ="Private Lounges";
        this.service3 ="Personal Assistant";
      }
      else if (this.$router.options.history.state.back ==="/general-aviation"){
        this.route = "general-aviation-content";
        this.dataRequest = "response.data.data.general-aviation-content";
        this.image1 = "home-service-1";
        this.image2 = "home-service-2";
        this.image3 = "home-service-3";
        this.service1 ="Expert Handling";
        this.service2 ="Luxury Transport";
        this.service3 ="Perfect Departure";
      }
      else if (this.$router.options.history.state.back ==="/elite-services"){
        this.route = "elite-services-content";
        this.dataRequest = "response.data.data.elite-services-content";
        this.image1 = "elite-service-1";
        this.image2 = "elite-service-2";
        this.image3 = "elite-service-3";
        this.service1 ="Detailed Interiors";
        this.service2 ="Absolute Comfort";
        this.service3 ="Relaxing Atmosphere";
      }
      console.log("after",this.route);


      axios.get(configs.base_url + '/api/'+this.route)
          .then((response) => {
            console.log("data",this.dataRequest);
            let data = response.data.data.homepage_content;

            if (this.$router.options.history.state.back === "/"){
              data = response.data.data.homepage_content;
            }
            else if (this.$router.options.history.state.back === "/tour"){
              data = response.data.data.tour_the_terminal_content;
            }
            else if (this.$router.options.history.state.back ==="/story"){
              data = response.data.data.our_story_content;
            }
            else if (this.$router.options.history.state.back ==="/services"){
              data = response.data.data.services_content;
            }
            else if (this.$router.options.history.state.back ==="/general-aviation"){
              data = response.data.data.general_aviation_content;
            }
            else if (this.$router.options.history.state.back ==="/elite-services"){
              data = response.data.data.elite_services_content;
            }

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
            if (this.$router.options.history.state.back === "/"){
              this.background_image_4 = data.background_image_4_url;
            }
            else if (this.$router.options.history.state.back === "/tour"){
              this.background_image_4 = data.background_image_2_url;
            }
            else if (this.$router.options.history.state.back ==="/story"){
              this.background_image_4 = data.background_image_3_url;
            }
            else if (this.$router.options.history.state.back ==="/services"){
              this.background_image_4 = data.background_image_3_url;
            }
            else if (this.$router.options.history.state.back ==="/general-aviation"){
              this.background_image_4 = data.background_image_2_url;
            }
            else if (this.$router.options.history.state.back ==="/elite-services"){
              this.background_image_4 = data.background_image_3_url;
            }
            else if (this.$router.options.history.state.back ==="/contact"){
              this.background_image_4 = data.background_image_4_url;
            }

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

            console.log("data",this.background_image_1);
          })
          .catch(function (error) {
            console.log(error.response)
            this.state_loading = false;
          })
    }
  },

  created() {
    window.scrollTo(0, 0);
    this.getHomeContent();
  },


}
</script>

<style scoped>
.privacy-policy-banner{
  color: #fff;
  padding-top: 240px
}
.privacy-policy-content {
  background-color: #fbfaf9 !important;
  color: #011e41;
  max-width: 1120px;
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin: 60px auto 50px;
  font-size: 20px;
  line-height: 40px;
}
  .privacy-policy-title{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }

.privacy-policy-content:after{
  background-color: #fbfaf9;
}
.privacy-policy-paragraph{
  margin-bottom: 40px;
}

</style>