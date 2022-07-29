<template>
    <section class="two-fold" v-bind:style="{ backgroundImage: 'url(' + backgroundImage2 + ')' }">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-10 col-12">
                    <div class="two-fold-content">
                        <h2 data-aos="fade-up" data-aos-duration="2500">{{heading2}}</h2>
                        <div class="two-fold-inner">
                            <div class="two-fold-inner-text" data-aos="fade-up" data-aos-duration="2500">
                                <p v-html="paragraph1"></p>
                            </div>
                            <div class="sublime-luxury-img" data-aos="fade-up" data-aos-duration="2500">
                                <img class="img-fluid" :src="squareImage"
                                    alt="sublime-luxury">
                            </div>
                            <router-link to="/tour" data-aos="fade-bottom" data-aos-duration="2500" class="visit-terminal-btn">Visit the terminal</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
     props: {
    heading2: String,
    paragraph1: String,
    squareImage: String,
    backgroundImage2: String
  },
    name: "TwoFoldModuleVue",
    // data() {
    //     return {
    //         HeadingTopText: "Welcome to Awal Private Terminal",
    //         MainHeading: "We'll take it from here",
    //         SubHeading: "Awal Private Terminal is setting new standards of luxury for private aircraft users and Elite guests on commercial flights.",
    //     };
    // },
}

</script>
<style>
</style>