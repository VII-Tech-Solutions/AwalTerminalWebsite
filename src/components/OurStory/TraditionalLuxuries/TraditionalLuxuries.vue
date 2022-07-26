<template>
    <section class="two-fold our-story" v-bind:style="{ backgroundImage: 'url(' + image1 + ')' }" >
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-10 col-12">
                    <div class="two-fold-content">
                        <h2 data-aos="fade-up" data-aos-duration="2500">{{ heading2 }}</h2>
                        <div class="two-fold-inner">
                            <div class="two-fold-inner-text" data-aos="fade-up" data-aos-duration="2500">
                                <p>{{paragraph1}}</p>
                            </div>
                        </div>
                        <div class="quote" data-aos="fade-up" data-aos-duration="2500">{{quote1}}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script >
export default {
    props: {
        heading2: String,
        paragraph1: String,
        quote1: String,
        image1: String
    },
    name: "TraditionalLuxuries",
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
/* .our-story.two-fold {
    background-image: url('../../../assets/images/tradional-luxuries.jpg');
} */

.our-story .two-fold-content {
    padding: 150px 87px;
}

.our-story .two-fold-inner {
    padding: 0;
}

.our-story .two-fold-inner::before {
    display: none;
}

.our-story .two-fold-inner-text p:nth-child(1) {
    margin-bottom: 40px;
}

.our-story .two-fold-inner-text {
    margin-bottom: 80px;
}

.our-story .quote {
    font-family: "Lora";
    font-size: 40px;
    line-height: 1.5;
    font-weight: 500;
    color: #caa17b;
}

@media (max-width:1199px) {
    .our-story .two-fold-content {
        padding: 130px 60px 130px 80px;
        background: #fff;
    }

    .our-story .two-fold-inner-text {
        margin-bottom: 60px
    }

    .our-story .quote {
        font-size: 35px;
    }
}

@media (max-width:991px) {
    .our-story .two-fold-content {
        padding: 100px 40px 100px 60px;
        background: #fff;
    }

    .our-story .quote {
        font-size: 30px;
    }
}

@media (max-width:767px) {
    .our-story .two-fold-content {
        padding: 80px 40px 80px 60px;
        background: #fff;
    }

    .our-story .two-fold-inner-text p:nth-child(1) {
        margin-bottom: 30px;
    }

    .our-story .two-fold-inner-text {
        margin-bottom: 50px
    }

    .our-story .quote {
        font-size: 28px;
    }
}

@media (max-width: 575px) {
    .our-story .two-fold-content {
        padding: 70px 40px 70px 60px;
    }

    .our-story .two-fold-inner-text p:nth-child(1) {
        margin-bottom: 20px;
    }

    .our-story .two-fold-inner-text {
        margin-bottom: 30px
    }

    .our-story .quote {
        font-size: 25px;
    }
}
</style>