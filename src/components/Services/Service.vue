<template>
    <Banner :backgroundImage1="background_image_1_url" :headingTop1="heading_top_1" :heading1="heading_1" :subheading1="subheading_1" />
    <div class="services">
        <div class="service-bg">
            <div class="container">
                <div class="bg-white service-fixed">
                    <div class="main-page-title">
                        <div class="page-title" data-aos="fade-up" data-aos-duration="2500">
                            <h2 class=" mx-auto text-center">{{heading_2}}</h2>
                            <p class="mx-auto w-100">{{paragraph_1}}</p>
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
                                                    <img src="../../assets/images/icons/star-purple.svg" alt="couch"
                                                        class=" img-fluid" />
                                                </span>
                                                <strong class="service-title text-capitalize theme">{{column_1_heading_1}}</strong>
                                            </div>
                                            <p>
                                                {{column_1_paragraph_1}}
                                            </p>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <router-link to="/elite-services"
                                                class="card-blue-btn text-uppercase d-inline">learn more</router-link>
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
                                                    <img src="../../assets/images/icons/flight.svg" alt="couch"
                                                        class=" img-fluid" />
                                                </span>
                                                <strong class="service-title text-capitalize theme">{{column_2_heading_1}}</strong>
                                            </div>
                                            <p>
                                                {{column_2_paragraph_1}}
                                            </p>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <router-link to="/general-aviation"
                                                class="card-blue-btn text-uppercase d-inline">learn more</router-link>
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
            <img :src="background_image_2_url" class="img-fluid" />
        </figure>
    </div>
    <Fascilities :heading3="heading_3" :bulletPoint1="bullet_point_1" :bulletPoint2="bullet_point_2" :bulletPoint3="bullet_point_3" :bulletPoint4="bullet_point_4" :bulletPoint5="bullet_point_5" :bulletPoint6="bullet_point_6" :bulletPoint7="bullet_point_7" :bulletPoint8="bullet_point_8" />
    <FooterBanner :HeadingTopText="heading_top_2" :MainHeading="heading_4" name="services-bg"
        service1="Excellent Service" image1="services-service-1" service2="Private Lounges"
        image2="services-service-2" service3="Personal Assistant" image3="services-service-3" :footerbg="background_image_3_url"  booknow="/elite-services" />
</template>                           
<script>
import Banner from "./Banner.vue";
import Fascilities from './Fascilities.vue'
import FooterBanner from '../FooterBanner/FooterBanner.vue'
import axios from 'axios'
import configs from "../constants";

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
            bullet_point_1: null,
            bullet_point_2: null,
            bullet_point_3: null,
            bullet_point_4: null,
            bullet_point_5: null,
            bullet_point_6: null,
            bullet_point_7: null,
            bullet_point_8: null,
            background_image_1_url: null,
            background_image_2_url: null,
            background_image_3_url: null
        }
    },

    methods: {

        getHomeContent() {
            axios.get(configs.base_url + '/api/services-content')
                .then((response) => {

                    let data = response.data.data.services_content;

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
                        this.bullet_point_1 = data.bullet_point_1,
                        this.bullet_point_2 = data.bullet_point_2,
                        this.bullet_point_3 = data.bullet_point_3,
                        this.bullet_point_4 = data.bullet_point_4,
                        this.bullet_point_5 = data.bullet_point_5,
                        this.bullet_point_6 = data.bullet_point_6,
                        this.bullet_point_7 = data.bullet_point_7,
                        this.bullet_point_8 = data.bullet_point_8,
                        this.background_image_1_url = data.background_image_1_url,
                        this.background_image_2_url = data.background_image_2_url,
                        this.background_image_3_url = data.background_image_3_url
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
        Banner, Fascilities, FooterBanner,
    },
};
</script>
<style>
/* .services{position: relative; padding-top:600px; } */
.service-img {
    position: relative;
    z-index: -1;
    margin-top: -395px;
    min-height: 100vh;
}

.service-img img {
    height: 100%;
    width: 100%;
}

/* .service-fixed{position: absolute;z-index: 99;left: 10%;right: 10%; margin: auto;top:0;} */
.service-fixed {
    padding: 100px 95px 95px 95px;
}

.service-card-style {
    padding: 60px 40px;
    border-radius: 0%;
    border: 1px solid #011e41;
    height: 100%;
    transition: all ease-in-out .3s
}

/* .service-card-style:hover{background-color:#f3f3f3;} */
.service-card-body {
    padding-bottom: 60px;
}

.service-card-body .title-content {
    padding-bottom: 40px;
}

.service-card-body .title-content .icon {
    margin-right: 20px;
}

.service-card-body .title-content .service-title {
    font-family: "Lora";
    font-size: 36px;
    font-weight: 500;
    line-height: 30px;
    color: #011e41;
}

.service-card-body p {
    font-size: 20px;
    line-height: 40px;
}

/* MEDIA QUERY */
@media (max-width: 1199px) {

    /* .services{padding-top:500px; } */
    .service-fixed {
        padding: 80px 75px 75px 75px;
    }

    .service-card-style {
        padding: 45px 30px;
    }

    .service-card-body .title-content .service-title {
        font-size: 25px;
        line-height: 30px;
    }

    .service-card-body .title-content {
        padding-bottom: 30px;
    }

    .service-card-body {
        padding-bottom: 50px;
    }

    .service-card-body .title-content .icon {
        margin-right: 15px;
    }

    .service-card-body p {
        font-size: 18px;
        line-height: 35px;
    }
}

@media (max-width: 992px) {

    /* .services{padding-top:800px;} */
    .service-img {
        height: 600px;
    }
}

@media (max-width: 767px) {
    .service-card-body .title-content {
        padding-bottom: 25px;
    }

    /* .services{padding-top:600px;} */
    .service-fixed {
        padding: 70px 50px 50px 50px;
    }

    .service-card-style {
        padding: 40px 25px;
    }

    .service-card-body p {
        font-size: 16px;
        line-height: 30px;
    }

    .service-card-body {
        padding-bottom: 40px;
    }
}

@media (max-width: 567px) {
    .service-fixed {
        left: 5%;
        right: 5%;
    }

    .service-card-body .title-content .service-title {
        font-size: 22px;
        line-height: 26px;
    }

    .service-card-body .title-content {
        padding-bottom: 15px;
    }

    /* .services{padding-top:410px;} */
    .service-img {
        height: 450px;
    }

    .service-card-body {
        padding-bottom: 25px;
    }

    .service-card-style {
        padding: 30px 25px;
    }

    .service-fixed {
        padding: 35px 20px 20px 20px;
    }
}

@media (max-width: 467px) {
    .service-img {
        display: none
    }

    /* .services{padding-top:0px;} */
    .service-fixed {
        position: inherit;
    }
}
</style>
