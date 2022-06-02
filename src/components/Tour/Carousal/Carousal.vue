
<template>
    <Carousel :itemsToShow="2" :wrapAround="true" class="tour-carousal">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <div class="carousal-style">
            <figure>
              <img src="../../assets/images/slider-img1.png" class="img-fluid"/>
            </figure>
            <p class="text-center slider-title">‘Manama’ Private Lounge, can seat up to 10 people</p>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
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
.tour-carousal .carousal-style {
  padding-bottom: 20px;
}
.tour-carousal .carousal-style .slider-title {
  color: #011e41;
}
.tour-carousal .carousel__prev, .carousel__next {
  width: 55px;
  height: 55px;
  border: 1px solid #011e41;
  color: #011e41;
  border-radius: 0%;
  background-color: #fff;
}
.tour-carousal .carousel__prev {
  right: 18%;
  left: auto;
  bottom: 20px;
  top: auto;
}
.tour-carousal .carousel__next {
  right: 22%;
  bottom: 80px;
  top: auto;
}
.tour-carousal .carousel__slide--active {
  margin-right: 40px;
  margin-left: 40px;
}
.tour-carousal .carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.tour-carousal .carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.tour-carousal .carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.tour-carousal .carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.tour-carousal .carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>
