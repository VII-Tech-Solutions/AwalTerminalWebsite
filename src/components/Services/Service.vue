<template>
    <Banner/>
    <div class="services">
        <div class="service-bg">
            <div class="container">
                <div class="bg-white service-fixed">
                        <div class="main-page-title">
                            <div class="page-title" data-aos="fade-up" data-aos-duration="2500">
                                <h2 class="text-capitalize mx-auto text-center">Smooth, seamless service</h2>
                                <p class="mx-auto w-100">A state-of-the-art facility with 5-star hospitality services. The terminal comprises eight private lounges and two common lounges, a meeting room, and Duty-Free offerings designed to meet the needs of VIP passengers.</p>
                            </div>
                        </div>
                        <div class="service-card">
                            <div class="row">
                                <div class="col-lg-6 mb-lg-0 mb-2" data-aos="fade-up" data-aos-duration="2500">
                                    <div class="service-card-style">
                                        <div class="d-flex flex-column justify-content-between h-100">
                                            <div class="service-card-body">
                                                <div class="title-content d-flex align-items-center">
                                                    <span class="icon">
                                                        <img src="../../assets/images/icons/star-purple.svg" alt="couch" class=" img-fluid"/>
                                                    </span>
                                                    <strong class="service-title text-capitalize theme">Elite Services</strong>
                                                </div>
                                                <p>
                                                    Through our Elite Service, we ensure Commercially Important Persons (CIPs) enjoy an exceptionally smooth, comfortable, and pleasant airport experience. Passengers are received by our agents who handle all travel formalities.
                                                </p>
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <a href="#" class="card-blue-btn text-uppercase d-inline">learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-lg-0 mb-2" data-aos="fade-up" data-aos-duration="2500">
                                    <div class="service-card-style">
                                        <div class="d-flex flex-column justify-content-between h-100">
                                            <div class="service-card-body">
                                                <div class="title-content d-flex align-items-center">
                                                    <span class="icon">
                                        			    <img src="../../assets/images/icons/flight.svg" alt="couch" class=" img-fluid"/>
                                                    </span>
                                                    <strong class="service-title text-capitalize theme">General Aviation</strong>
                                                </div>
                                                <p>
                                                    Hala Bahrain's experienced flight coordinators are on hand 24/7 to provide exceptional support services to aircraft crew and prepare the aircraft for the turnaround process.
                                                </p>
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <a href="#" class="card-blue-btn text-uppercase d-inline">learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <figure class="service-img mb-0" data-aos="zoom-in" data-aos-duration="2500">
                <img src="../../assets/images/service-bg.png" class="img-fluid"/>
            </figure>
    </div>
    <Fascilities/>
    <FooterBanner
    HeadingTopText="5-star hospitality services"
    MainHeading="The ultimate experience"
    name="services-bg"
    service1="Excellent Service"
    image1="services-service-1"
    service2="Personal Assistant"
    image2="services-service-2"
    service3="Private Lounges"
    image3="services-service-3"
  />
</template>                           
<script>
import Banner from "./Banner.vue";
import Fascilities from './Fascilities.vue'
import FooterBanner from '../FooterBanner/FooterBanner.vue'

export default {
    mounted () {
  window.scrollTo(0, 0)
},
  components: {
    Banner,Fascilities,FooterBanner,
  },
};
</script>
<style>
/* .services{position: relative; padding-top:600px; } */
.service-img{position: relative;z-index: -1;margin-top: -395px;min-height: 100vh;}
.service-img img{height:100%; width:100%;}
/* .service-fixed{position: absolute;z-index: 99;left: 10%;right: 10%; margin: auto;top:0;} */
.service-fixed{padding: 100px 95px 95px 95px;}
.service-card-style{padding: 60px 40px; border-radius:0%; border:1px solid #011e41; height:100%;transition:all ease-in-out .3s}
/* .service-card-style:hover{background-color:#f3f3f3;} */
.service-card-body{padding-bottom: 60px;}
.service-card-body .title-content{padding-bottom:40px;}
.service-card-body .title-content .icon{margin-right: 20px;}
.service-card-body .title-content .service-title{font-family:"Lora"; font-size:36px; font-weight:500; line-height:30px; color:#011e41;}
.service-card-body p{font-size:20px; line-height:40px;}
/* MEDIA QUERY */
@media (max-width: 1199px) {
/* .services{padding-top:500px; } */
.service-fixed{padding:80px 75px 75px 75px;}
.service-card-style {padding: 45px 30px;}
.service-card-body .title-content .service-title{font-size:25px; line-height:30px;}
.service-card-body .title-content{padding-bottom:30px;}
.service-card-body{padding-bottom:50px;}
.service-card-body .title-content .icon{margin-right: 15px;}
.service-card-body p{font-size:18px; line-height:35px;}
}
@media (max-width: 992px) {
/* .services{padding-top:800px;} */
.service-img{height:600px;}
}
@media (max-width: 767px) {
.service-card-body .title-content{padding-bottom:25px;}
/* .services{padding-top:600px;} */
.service-fixed{padding:70px 50px 50px 50px;}
.service-card-style{padding: 40px 25px;}
.service-card-body p{font-size:16px; line-height:30px;}
.service-card-body{padding-bottom:40px;}
}
@media (max-width: 567px) {
.service-fixed{left:5%; right:5%; }
.service-card-body .title-content .service-title{font-size:22px; line-height:26px;}
.service-card-body .title-content{padding-bottom:15px;}
/* .services{padding-top:410px;} */
.service-img{height:450px;}
.service-card-body{padding-bottom:25px;}
.service-card-style {padding: 30px 25px;}
.service-fixed{padding:35px 20px 20px 20px;}
}
@media (max-width: 467px) {
.service-img{display:none}
/* .services{padding-top:0px;} */
.service-fixed{position: inherit;}
}
</style>
