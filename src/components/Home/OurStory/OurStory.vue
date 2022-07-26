<template>
    <Section class="Short-Description text-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="horizon" data-aos="fade-up" data-aos-duration="2500">
                        <span class="page-subtitle text-uppercase">{{heading4}}</span>
                    </div>
                    <div class="description-content ">
                        <div class="description-img" data-aos="fade-up" data-aos-duration="2500">
                            <img class="img-fluid" :src="image1" alt="Story Iamge">
                        </div>
                        <p data-aos="fade-up" data-aos-duration="2500" class="description">{{paragraph2}}</p>
                        <router-link to="/story" data-aos="fade-bottom" data-aos-duration="2500" class="common-btn">Our story</router-link>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>
<script>
export default {
     props: ['heading4','paragraph2','image1'],
    
    name: "OurStory",
    // data() {
    //     return {
    //         HeadingTopText: "Welcome to Awal Private Terminal",
    //         MainHeading: "We'll take it from here",
    //         SubHeading: "Awal Private Terminal is setting new standards of luxury for private aircraft users and Elite guests on commercial flights.",
    //     };
    // },
}


</script>