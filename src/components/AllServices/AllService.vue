<template>
  <Banner :headingTop1="heading_top_1" :heading1="heading_1" :subheading1="subheading_1" :backgroundImage1="background_image_1_url" />
  <div class="all-services">
    <div class="book-elite-service">
      <div class="container">
        <div class="page-title">
          <div class="d-flex five_star">
            <div class="centered">
              <h2 class="text-lowecase mx-auto" data-aos="fade-up" data-aos-duration="2500">{{heading_top_2}}
              </h2>
              <p data-aos="fade-up" data-aos-duration="2500" v-html="paragraph_1">
              </p>
            </div>
            <figure class="mb-0 agent-img" data-aos="fade-in" data-aos-duration="2500">
              <img class="img-fluid" src="../../assets/images/agentImg.png" alt="Hala Bahrain" />
            </figure>
          </div>
          <div class="d-flex mobile-centered-btn">
            <router-link to="/elite-form" @click="clear" data-aos="fade-bottom" data-aos-duration="2500"
              class="blue-btn text-uppercase d-inline">book elite services</router-link>
          </div>
        </div>
      </div>
    </div>
    <EliteService :heading3="heading_3" :paragraph2="paragraph_2" :backgroundImage2="background_image_2_url" />
    <PlanForComfort :text_1="text_1" :heading4="heading_4" :paragraph3="paragraph_3" :bulletPoint1="bullet_point_1" :bulletPoint2="bullet_point_2" :bulletPoint3="bullet_point_3" :bulletPoint4="bullet_point_4" :bulletPoint5="bullet_point_5" :bulletPoint6="bullet_point_6" :bulletPoint7="bullet_point_7" :squareImage1="square_image_1_url" />
    <ExperienceTerminal :bigImage1="big_image_1_url" :heading5="heading_5" :paragraph4="paragraph_4" :squareImage2="square_image_2_url" />
    <FooterBanner HeadingTopText="5-star hospitality services" MainHeading="The VIP service" name="elite-story-bg"
      service1="Detailed Interiors" image1="elite-service-1" service2="Absolute Comfort" image2="elite-service-2"
      service3="Relaxing Atmosphere" image3="elite-service-3" :footerbg="background_image_3_url"  />
  </div>
</template>  

<script>
//gsdfgsdfsdffg
import Banner from "./Banner.vue";
import EliteService from "./EliteService.vue";
import PlanForComfort from "./PlanForComfort.vue";
import ExperienceTerminal from "./ExperienceTerminal.vue";
import FooterBanner from "../FooterBanner/FooterBanner.vue";
import './service.css'
import axios from 'axios'
import configs from "../constants";

export default {

  data() {
    return {
      heading_top_1: null,
      heading_1: null,
      subheading_1: null,
      paragraph_1: null,
      text_1: null,
      heading_top_2: null,
      heading_2: null,
      heading_3: null,
      heading_4: null,
      heading_5: null,
      heading_6: null,
      paragraph_2: null,
      paragraph_3: null,
      paragraph_4: null,
      bullet_point_1: null,
      bullet_point_2: null,
      bullet_point_3: null,
      bullet_point_4: null,
      bullet_point_5: null,
      bullet_point_6: null,
      bullet_point_7: null,
      background_image_1_url: null,
      background_image_2_url: null,
      background_image_3_url: null,
      square_image_1_url: null,
      square_image_2_url: null,
      big_image_1_url: null,
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },

  created(){
    this.getEliteServcContent();
  },
  components: {
    Banner, EliteService, PlanForComfort, ExperienceTerminal, FooterBanner
  },
  methods: {

    getEliteServcContent() {
      axios.get('https://admin.awalvip.bh/api/elite-services-content')
        .then((response) => {

          let data = response.data.data.elite_services_content;
          console.log(data);
          this.heading_top_1 = data.heading_top_1;
          this.heading_1 = data.heading_1;
          this.subheading_1 = data.subheading_1;
          this.paragraph_1 = data.paragraph_1;
          this.text_1 = data.text_1;
          this.heading_top_2 = data.heading_top_2;
          this.heading_2 = data.heading_2;
          this.heading_3 = data.heading_3;
          this.heading_4 = data.heading_4;
          this.heading_5 = data.heading_5;
          this.heading_6 = data.heading_6;
          this.paragraph_2 = data.paragraph_2;
          this.paragraph_3 = data.paragraph_3;
          this.paragraph_4 = data.paragraph_4;
          this.bullet_point_1 = data.bullet_point_1;
          this.bullet_point_2 = data.bullet_point_2;
          this.bullet_point_3 = data.bullet_point_3;
          this.bullet_point_4 = data.bullet_point_4;
          this.bullet_point_5 = data.bullet_point_5;
          this.bullet_point_6 = data.bullet_point_6;
          this.bullet_point_7 = data.bullet_point_7;
          this.background_image_1_url = data.background_image_1_url;
          this.background_image_2_url = data.background_image_2_url;
          this.background_image_3_url = data.background_image_3_url;
          this.square_image_1_url = data.square_image_1_url;
          this.square_image_2_url = data.square_image_2_url;
          this.big_image_1_url = data.big_image_1_url;
        })
        .catch(function (error) {
          console.log(error.response)
        })
    },


    clear() {
      localStorage.removeItem("elitedata");
    },
  }
};
</script>
<style>
.service-card-style.book-service-card {
  padding: 40px 30px;
}

.book-elite-service {
  padding: 100px 0px;
}

.book-elite-service .five_star {
  padding-bottom: 40px;
  justify-content: space-between;
}

.book-elite-service .five_star h2 {
  margin-bottom: 40px;
  padding-bottom: 0px;
}

.book-elite-service .five_star p {
  text-align: start;
}

.agent-img {
  width: 185px;
}

.gold-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  position: relative;
  top: -3px
}

.service-checklist ul li:not(:last-child) {
  margin-bottom: 20px;
}

.service-checklist ul li .checklist-points {
  display: flex;
  align-items: center;
}

.service-checklist ul li .checklist-points .icon {
  margin-right: 10px;
  width: 20px;
}

.service-checklist ul li .checklist-points p {
  font-size: 18px;
  line-height: 22px;
  color: #011e41;
}

.card-small-text {
  font-size: 12px;
  line-height: 16px;
  color: #011e41;
}

@media (max-width:1199px) {

  /* .book-elite-service{padding:100px 0px;} */
  .book-elite-service .five_star h2 {
    margin-bottom: 30px;
  }
}

@media (max-width:992px) {
  .book-elite-service .five_star {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .agent-img {
    margin: 10px auto;
  }

  .centered {
    text-align: center;
  }

  .mobile-centered-btn {
    justify-content: center;
  }

  .book-elite-service .five_star p {
    text-align: center;
    margin: auto;
  }
}

@media (max-width:767px) {
  .book-elite-service .five_star p {
    width: 100%;
  }

  .book-elite-service .five_star h2 {
    margin-bottom: 25px;
  }
}
</style>
