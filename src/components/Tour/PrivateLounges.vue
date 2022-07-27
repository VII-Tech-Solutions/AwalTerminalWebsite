
<template>
    <div class="private-lounge trival-carousel section-bottom">
        <div class="container">
            <div class="main-page-title">
                <div class="page-title" >
                    <h2 class="text-capitalize mx-auto text-center" data-aos="fade-up" data-aos-duration="2500">{{heading4}}</h2>
                    <p class="mx-auto" data-aos="fade-up" data-aos-duration="2500">{{paragraph3}}</p>
                </div>
            </div>
        </div>
        <div class="custom-carousal" data-aos="fade-up" data-aos-duration="2500" >
            <Carousel :itemsToShow="2" :wrapAround="true" v-if="privateGallery && privateGallery.length > 0">
                <Slide v-for="slide in privateGallery" :key="slide.id">
                    <div class="carousel__item">
                      <div class="carousal-style">
                          <figure>
                            <img :src="slide.image_url" class="img-fluid"/>
                          </figure>
                          <p class="text-center slider-title">{{slide.caption}}</p>
                      </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
              </Carousel>
        </div>
        <div class="container">
            <div class="mx-auto text-center">
                
                    <a href="#" data-aos="fade-bottom" data-aos-duration="2500" class="text-uppercase blue-btn text-center">book a private lounge</a>
                
            </div>
        </div>  
    </div>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  props: {
        heading4: String,
        paragraph3: String,
        privateGallery:Array
    },

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
.trival-carousel .carousel__prev {right: 19%; left: auto; bottom: 75px; top: auto; transform: inherit;}
.trival-carousel .carousel__next {right: 19%; bottom: 135px; top: auto; transform: inherit;}
.trival-carousel .custom-carousal{ padding-bottom: 60px; }
.trival-carousel .carousal-style{ padding-bottom: 20px;}
.trival-carousel .carousal-style .slider-title { color: #011e41; }
.trival-carousel .carousel__prev, .trival-carousel .carousel__next {width: 55px;height: 55px;border: 1px solid #011e41;color: #011e41;border-radius: 0%;background-color: #fff;}
.trival-carousel .carousel__slide > .carousel__item {transform: scale(1);opacity: 0.5;transition: 0.5s;}
.trival-carousel .carousel__slide--visible > .carousel__item {opacity: 1;transform: rotateY(0);}
.trival-carousel .carousel__slide--next > .carousel__item {transform: scale(0.9) translate(-10px);}
.trival-carousel .carousel__slide--prev > .carousel__item {transform: scale(0.9) translate(10px);}
.trival-carousel .carousel__slide--active > .carousel__item {transform: scale(1.1);}
.trival-carousel .custom-carousal .carousel__track {    margin-left: 20px;}
/* MEDIA QUERY */
@media (max-width: 1399px) {
.trival-carousel .carousel__prev {right:18%; bottom: 80px;}
.trival-carousel .carousel__next {right:18%; bottom: 140px;}
.trival-carousel .carousel__slide--active {margin-right: 45px;margin-left: 45px;}
}
@media (max-width: 1199px) {
.trival-carousel .carousel__prev, .trival-carousel .carousel__next {width:48px; height:48px;}
.trival-carousel .carousel__next {right:17%; bottom: 80px;}
.trival-carousel .carousel__prev {right:17%; bottom: 140px;}
.trival-carousel .carousal-style {padding-bottom:15px;}
}
@media (max-width: 991px) {
.trival-carousel .carousel__next {right:15%;}
.trival-carousel .carousel__prev {right:15%;}
}
@media (max-width: 767px) {
.trival-carousel .carousel__slide--active {margin-right: 35px;margin-left: 35px;}
.trival-carousel .carousel__prev, .trival-carousel .carousel__next {width:40px; height:40px;}
.trival-carousel .carousel__next {right:16%; bottom:85px;}
.trival-carousel .carousel__prev {right:16%; bottom:133px;}
}
@media (max-width: 700px) {
.trival-carousel .carousel__next {right:15%; bottom:150px;}
.trival-carousel .carousel__prev {right:15%; bottom:100px;}
}
@media (max-width: 567px) {
.trival-carousel .carousel__prev, .trival-carousel .carousel__next {width:30px; height:30px;}
.trival-carousel .carousel__slide--active {margin-right: 28px;margin-left: 28px;}
.trival-carousel .carousel__next {right:16%; bottom: 135px;}
.trival-carousel .carousel__prev {right:16%;}
}
@media (max-width: 467px) {
.trival-carousel .carousel__prev, .trival-carousel .carousel__next {width:25px; height:25px;}
.trival-carousel .carousel__prev > svg, .trival-carousel .carousel__next > svg {font-size:15px;}
.trival-carousel .carousel__next {right:13%; bottom:130px;}
.trival-carousel .carousel__prev {right:13%;}
}
</style>