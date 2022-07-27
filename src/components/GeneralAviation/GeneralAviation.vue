<template>
    <Banner :headingTop1="heading_top_1" :heading1="heading_1" :subheading1="subheading_1" :backgroundImage1="background_image_1_url" />
    <SupportServiceTwoFold :heading2="heading_2" :paragraph1="paragraph_1" :squareImage1="square_image_1_url" />
    <GeneralAviationBook :heading3="heading_3" :paragraph2="paragraph_2" :bulletPoint1="bullet_point_1" :bulletPoint2="bullet_point_2" :bulletPoint3="bullet_point_3" :bulletPoint4="bullet_point_4" :bulletPoint5="bullet_point_5" :bulletPoint6="bullet_point_6" :text1="text_1" />
    <div class="d-block">
        <figure class="mb-0" data-aos="zoom-in" data-aos-duration="2500">
            <img class="cover-img img-fluid w-100" :src="section_image_1_url" />
        </figure>
    </div>
    <ComfortService :headingTop2="heading_top_2" :heading4="heading_4" :paragraph3="paragraph_3" />
    <TakeTour :heading5="heading_5" :paragraph4="paragraph_4" />
    <FooterBanner HeadingTopText="5-star hospitality services" MainHeading="Premium hospitality"
        name="GeneralAviation-bg" service1="Expert Handling" image1="home-service-1" service2="Luxury Transport"
        image2="home-service-2" service3="Perfect Departure" image3="home-service-3" :footerbg="background_image_2_url" />
</template>  

<script>
import Banner from "./Banner.vue";
import FooterBanner from "../FooterBanner/FooterBanner.vue";
import SupportServiceTwoFold from "./SupportServiceTwoFold.vue";
import GeneralAviationBook from "./GeneralAviationBook.vue";
import ComfortService from './ComfortService.vue';
import TakeTour from './TakeTour.vue';
import axios from 'axios'

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
            background_image_1_url: null,
            background_image_2_url: null,
            square_image_1_url: null,
            square_image_2_url: null,
            section_image_1_url: null
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },

    created() {
        this.getGeneralAviationServiceContent();
    },

    methods: {
        getGeneralAviationServiceContent() {
            axios.get('https://awal.viitech.net/api/general-aviation-content')
                .then((response) => {

                    let data = response.data.data.general_aviation_content;
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
                    this.background_image_1_url = data.background_image_1_url;
                    this.background_image_2_url = data.background_image_2_url;
                    this.square_image_1_url = data.square_image_1_url;
                    this.square_image_2_url = data.square_image_2_url;
                    this.section_image_1_url = data.section_image_1_url;
                })
                .catch(function (error) {
                    console.log(error.response)
                })
        },
    },


    components: {
        Banner,
        FooterBanner,
        SupportServiceTwoFold,
        GeneralAviationBook,
        ComfortService,
        TakeTour,
    },

};
</script>
<style>
</style>
