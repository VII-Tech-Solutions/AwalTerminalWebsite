<template>
    <Section class="Short-Description text-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="description-content ">
                        <div class="description-img" data-aos="fade-up" data-aos-duration="2500">
                            <img class="img-fluid" :src="image2" alt="Story Iamge">
                        </div>
                        <p data-aos="fade-up" data-aos-duration="2500" class="description">{{paragraph4}}</p>
                        <router-link to="/tour" data-aos="fade-bottom" data-aos-duration="2500" class="common-btn">Tour the Terminal</router-link>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>
<script >





</script>


<script>
export default {
     props: ['image2','paragraph4'],
    
    name: "TourTerminal",
    // data() {
    //     return {
    //         HeadingTopText: "Welcome to Awal Private Terminal",
    //         MainHeading: "We'll take it from here",
    //         SubHeading: "Awal Private Terminal is setting new standards of luxury for private aircraft users and Elite guests on commercial flights.",
    //     };
    // },
}


</script>