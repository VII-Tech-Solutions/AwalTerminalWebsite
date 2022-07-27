
<template>
    <Banner :backgroundImage1="background_image_1_url" :headingTop1="heading_top_1" :heading1="heading_1" :subheading1="subheading_1" />

    <div class="tour" data-aos="fade-up" data-aos-duration="2500">
        <figure class="mb-0">
            <img :src="image_1_url" class="img-fluid w-100" alt="5-Start Hospitality services" />
        </figure>
    </div>
    <Trivial :heading2="heading_2" :paragraph1="paragraph_1" :ourPhotoGallery="our_photo_gallery" />

    <WlakThroughTerminal v-if="visible_1 === 1" :heading3="heading_3" :paragraph2="paragraph_2" :video1="video_1" />

    <FooterBanner :HeadingTopText="heading_top_2" :MainHeading="heading_5" name="tour-bg"
        service1="Meet & Greet" image1="tour-service-3" service2="Luxurious Lounges" image2="tour-service-2"
        service3="Flawless Departure" image3="tour-service-1" :footerbg="background_image_2_url" />
</template>                          
<script>
import Trivial from "./Trivial.vue";
import WlakThroughTerminal from "./WlakThroughTerminal.vue";
import PrivateLounges from "./PrivateLounges.vue";
import Banner from "./Banner.vue";
import FooterBanner from "../FooterBanner/FooterBanner.vue";
import axios from 'axios';

export default {


    data() {
        return {
            "heading_top_1": null,
            "heading_1": null,
            "subheading_1": null,
            "paragraph_1": null,
            "heading_top_2": null,
            "heading_2": null,
            "heading_3": null,
            "heading_4": null,
            "heading_5": null,
            "paragraph_2": null,
            "paragraph_3": null,
            "background_image_1_url": null,
            "background_image_2_url": null,
            "image_1_url": null,
            "our_photo_gallery":[],
            "private_and_personal_gallery":[],
            video_1:null,
            visible_1:0
        }
    },

    methods: {

        getTourContent() {
            axios.get('https://awal.viitech.net/api/tour-the-terminal-content')
                .then((response) => {

                    let data = response.data.data.tour_the_terminal_content;
                    console.log(data.our_photo_gallery,"galleryyyyyyyyyyy");
                    this.heading_top_1 = data.heading_top_1,
                    this.heading_1 = data.heading_1,
                    this.subheading_1 = data.subheading_1,
                    this.paragraph_1 = data.paragraph_1,
                    this.heading_top_2 = data.heading_top_2,
                    this.heading_2 = data.heading_2,
                    this.heading_3 = data.heading_3,
                    this.heading_4 = data.heading_4,
                    this.heading_5 = data.heading_5,
                    this.paragraph_2 = data.paragraph_2,
                    this.paragraph_3 = data.paragraph_3,
                    this.background_image_1_url = data.background_image_1_url,
                    this.background_image_2_url = data.background_image_2_url,
                    this.image_1_url = data.image_1_url;
                    this.our_photo_gallery = data.our_photo_gallery;
                    this.private_and_personal_gallery = data.private_and_personal_gallery;
                    this.video_1 = data.video_1;
                    this.visible_1 = data.visible_1;
                    
                })
                .catch(function (error) {
                    console.log(error.response)
                   
                })
        }
    },

    // created() {
        
    // },


    mounted() {
        this.getTourContent();
        window.scrollTo(0, 0)
    },
    components: {
        Trivial,
        WlakThroughTerminal,
        PrivateLounges,
        Banner,
        FooterBanner,
    },
};
</script>

                                   

<style>
</style>
