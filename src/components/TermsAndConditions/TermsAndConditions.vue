<template>
<div style="background-color: #fbfaf9;">
  <section class="privacy-policy-banner" style="background-color: #011e41; height: 369px; padding-bottom: unset">
    <div class="container">
      <div class="row ">
        <div class="col-12">
          <div class="banner-content" data-aos-offset="0" data-aos="fade-up" data-aos-duration="2500">
            <h1>Terms & Conditions</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="privacy-policy-content">
    <div class="privacy-policy-title">
      PURPOSE
    </div>

    <div class="privacy-policy-paragraph">
      The purpose of this website is to publicize the various operations, facilities and services provided to all customers of Awal Private Terminal.
    </div>

    <div class="privacy-policy-title">
      SCOPE
    </div>

    <div class="privacy-policy-paragraph">
      These terms and conditions govern your viewing and use of this website, which is operated by Hala Bahrain Hospitality. These terms refer only to your viewing of this website where separate conditions may apply to promotions which may be run from time to time as well as to services booked through this website.
    </div>

    <div class="privacy-policy-title">
      TERMS AND CONDITIONS
    </div>

    <div class="privacy-policy-subtitle">
      Booking of Service
    </div>

    <div class="privacy-policy-paragraph">
      Hala Bahrain Hospitality services are subject to availability at the time of booking.
      Bookings must be made at least twenty-four (24) hours in advance. Online bookings made less than 24 hours prior to your scheduled arrival/departure time will not be accepted.
      Amendments to flight schedules are subject to reconfirmation and Awal Private Terminal’s service availability with a minimum of 8 hours of service availing time
      Hala Bahrain will not be responsible for incorrect information including but not limited to name, flight number, flight time, arrival date, departure date, handover remarks and any other information provided by the customer. Bookings will be considered void if inaccurate information has been submitted.
      Upon the successful booking and payment through the booking system, you will receive a booking summary voucher sent from the system to the email address provided during your booking period.
      Animals & Pets are not allowed.
      Smoking in the lounge is illegal unless it is in the smoking lounge.
      Customers can amend their booking free of charge up to eight (8) hours ahead of the flight.
      By registering for Awal Private Terminal Service you agree that you have read, understood and accepted these terms and conditions.
    </div>


    <div class="privacy-policy-subtitle">
      Payment & Refund Terms
    </div>
    <div class="privacy-policy-paragraph">
      "Hala Bahrain accepts most types (Visa, Master Card, American Express, Diner Club, JCB, Benefit Cards) of credit cards through this portal, and if the customer is willing to pay through off-line payment methods, both cash and credit cards are acceptable.
      To get the booking confirmation, the payment must be made within 72 hours of the confirmation. In the case where you have failed to arrive, the amount will be charged in full if the booking was not canceled 8 hours in advance.
      In the case of a service cancellation, the payment shall be refunded to the same credit card that was used during the booking period.
      No charges will be applied on service cancellation if the cancellation was made eight (8) hours ahead of the flight.
      The refund may take time depending on the payment gateway procedure."
    </div>

    <div class="privacy-policy-subtitle">
      Disputes
    </div>
    <div class="privacy-policy-paragraph">
      "Any dispute relating in any way to your visit to Hala Bahrain online booking portal or to services you purchase through Hala Bahrain online booking portal shall be submitted to confidential arbitration in the Kingdom of Bahrain. The arbitrators award shall be binding and may be entered as a judgement in any court of competent jurisdiction.
      Awal Private Terminal and Hala Bahrain Hospitality are not responsible for any damages resulting from the use of Awal Private Terminal’s service including but not limited to theft, personal injury, or lost items unless it was caused by its employees.
      Complaints should be emailed to xxxxxx no later than 48 hours from the booking date of Awal Private Terminal’s Services."
    </div>




  </section>


  <FooterBanner :HeadingTopText="heading_top_2" :MainHeading="heading_4" name="tour-bg" :service1="service1" :image1="image1" :service2="service2" :image2="image2"
                :service3="service3" :image3="image3" :footerbg="background_image_4" />
</div>
</template>

<script>
import FooterBanner from "../FooterBanner/FooterBanner.vue";
import Banner from "../Banner/Banner.vue";
import axios from "axios";

export default {
  name: "TermsAndConditions.vue",
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


      axios.get('https://admin-dev.awalvip.bh/api/'+this.route)
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

.privacy-policy-subtitle{
  font-size: 24px;
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