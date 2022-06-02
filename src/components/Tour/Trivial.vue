
<template>
    <div class="trivial trival-carousel">
       <div class="container">
        <div class="main-page-title">
            <div class="horizon" data-aos="fade-up" data-aos-duration="2500"><span class="page-subtitle text-uppercase">our photo gallery</span></div>
            <div class="page-title" >
                <h2 class="text-capitalize mx-auto text-center" data-aos="fade-up" data-aos-duration="2500">Your Arrival</h2>
                <p class="mx-auto" data-aos="fade-up" data-aos-duration="2500">Getting to Awal Private Terminal is easy. You’re greeted by our friendly and professional staff immediately, as they take care of all your travel needs.</p>
            </div>
        </div>
       </div>
       <div class="custom-carousal" data-aos="fade-up" data-aos-duration="2500">
            <Carousel :itemsToShow="2" :wrapAround="true">
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">
                    <div class="carousal-style">
                        <figure>
                        <img src="../../assets/images/slider-img1.png" class="img-fluid"/>
                        </figure>
                        <p class="text-center slider-title">External view of the terminal after renovation</p>
                    </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
                </Carousel>
        </div>
    </div>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
   data() {
      return {
        settings: {
          arrows: true,
          dots: false,
        },
      }
    },
};
</script>
<style>
.trival-carousel .custom-carousal {padding-bottom: 60px;}
.trival-carousel .carousal-style {padding-bottom: 20px;}
.trival-carousel .carousal-style .slider-title {color: #011e41;margin-bottom: 10px;}
.trival-carousel .carousel__prev,.trival-carousel  .carousel__next {width: 55px;height: 55px;border: 1px solid #011e41;color: #011e41;border-radius: 0%;background-color: #fff;}
.trival-carousel .carousel__prev {right: 16%;left: auto;bottom: 30px;top: auto;}
.trival-carousel .carousel__next {right: 20%;bottom: 90px;top: auto;}
.trival-carousel .carousel__slide--active {margin-right: 40px;margin-left: 40px;}
.trival-carousel .carousel__slide > .carousel__item {transform: scale(1);opacity: 0.5;transition: 0.5s;}
.trival-carousel .carousel__slide--visible > .carousel__item {opacity: 1;transform: rotateY(0);}
.trival-carousel .carousel__slide--next > .carousel__item {transform: scale(0.9) translate(-10px);}
.trival-carousel .carousel__slide--prev > .carousel__item {transform: scale(0.9) translate(10px);}
.trival-carousel .carousel__slide--active > .carousel__item {transform: scale(1.1);}
</style>