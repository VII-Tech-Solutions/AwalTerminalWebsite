<template>
    <Banner/>
    <div class="all-services">
        <div class="book-elite-service">
            <div class="container">
              <div class="page-title">
                <div class="d-flex five_star">
                  <div class="centered">
                      <h2 class="text-lowecase mx-auto" data-aos="fade-up" data-aos-duration="2500">5-star hospitality services</h2>
                      <p data-aos="fade-up" data-aos-duration="2500">Whether you are arriving at or departing from the Kingdom, <strong class="theme-color">Hala Bahrain</strong> agents will assist you with all travel formalities while you relax in one of our luxurious lounges and enjoy our warm hospitality.</p>
                  </div>
                  <figure class="mb-0 agent-img" data-aos="fade-in" data-aos-duration="2500">
                    <img class="img-fluid" src="../../assets/images/agentImg.png" alt="Hala Bahrain"/>
                  </figure>
                </div>
                <div class="d-flex mobile-centered-btn"><router-link to="/elite-form" data-aos="fade-bottom" data-aos-duration="2500" class="blue-btn text-uppercase d-inline">book elite services</router-link></div>
              </div>
            </div>
        </div>
        <EliteService/>
        <PlanForComfort/>
        <ExperienceTerminal/>
        <FooterBanner
          HeadingTopText="5-star hospitality services"
          MainHeading="The VIP service"
          name="elite-story-bg"
          service1="Detailed Interiors"
          image1="elite-service-1"
          service2="Absolute Comfort"
          image2="elite-service-2"
          service3="Relaxing Atmosphere"
          image3="elite-service-3"
        />
    </div>
</template>  

<script>
import Banner from "./Banner.vue";
import EliteService from "./EliteService.vue";
import PlanForComfort from "./PlanForComfort.vue";
import ExperienceTerminal from "./ExperienceTerminal.vue";
import FooterBanner from "../FooterBanner/FooterBanner.vue";
import './service.css'

export default {
   mounted () {
  window.scrollTo(0, 0)
},
  components: {
    Banner,EliteService,PlanForComfort,ExperienceTerminal,FooterBanner
  },
  
};
</script>
<style>
.service-card-style.book-service-card{padding:40px 30px;}
.book-elite-service{padding:100px 0px;}
.book-elite-service .five_star{padding-bottom:40px;justify-content:space-between;}
.book-elite-service .five_star h2{margin-bottom:40px; padding-bottom:0px;}
.book-elite-service .five_star p{text-align:start;}
.agent-img{width:185px;}
.gold-text{font-size:16px; font-weight:600; line-height:20px;}
.service-checklist ul li:not(:last-child){margin-bottom:20px;}
.service-checklist ul li .checklist-points{display:flex; align-items:center;}
.service-checklist ul li .checklist-points .icon{margin-right:10px; width:20px;}
.service-checklist ul li .checklist-points p{font-size:18px; line-height:22px; color: #011e41;}
.card-small-text{font-size:12px; line-height:16px; color: #011e41;}
@media (max-width:1199px) {
/* .book-elite-service{padding:100px 0px;} */
.book-elite-service .five_star h2{margin-bottom:30px;}
}
@media (max-width:992px) {
.book-elite-service .five_star{flex-direction:column; align-items:center; justify-content:center;}
.agent-img{margin:10px auto;}
.centered{text-align:center;}
.mobile-centered-btn{justify-content: center;}
.book-elite-service .five_star p{text-align:center; margin:auto;}
}
@media (max-width:767px) {
.book-elite-service .five_star p{width:100%;}
.book-elite-service .five_star h2{margin-bottom:25px;}
}
</style>
