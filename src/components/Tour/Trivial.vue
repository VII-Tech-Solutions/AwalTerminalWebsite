
<template>
  <div class="trivial trival-carousel">
    <div class="container">
      <div class="main-page-title">
        <div class="horizon" data-aos="fade-up" data-aos-duration="2500"><span class="page-subtitle text-uppercase">BROWSE OUR GALLERY</span></div>
        <div class="page-title">
          <h2 class="text-capitalize mx-auto text-center" data-aos="fade-up" data-aos-duration="2500">{{ heading2 }}</h2>
          <p class="mx-auto" data-aos="fade-up" data-aos-duration="2500">{{ paragraph1 }}</p>
        </div>
      </div>
    </div>
    <div class="custom-carousal" data-aos="fade-up" data-aos-duration="2500">
      <Carousel :itemsToShow="2" :wrapAround="true" v-if="ourPhotoGallery && ourPhotoGallery.length > 0">
                <Slide v-for="slide in ourPhotoGallery" :key="slide.id">
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
  </div>
</template>
<script>

import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {

  props: {
    heading2: String,
    paragraph1: String,
    ourPhotoGallery: Array,
    subheading1: String
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
  created() {
    console.log("i am in Trivial", this.ourPhotoGallery);
  }
};
</script>
<style>
.trival-carousel .custom-carousal {
  padding-bottom: 60px;
}

.trival-carousel .carousal-style {
  padding-bottom: 20px;
}

.trival-carousel .carousal-style .slider-title {
  color: #011e41;
  margin-bottom: 10px;
}

.trival-carousel .carousel__prev,
.trival-carousel .carousel__next {
  width: 55px;
  height: 55px;
  border: 1px solid #011e41;
  color: #011e41;
  border-radius: 0%;
  background-color: #fff;
}

.trival-carousel .carousel__prev {
  right: 16%;
  left: auto;
  bottom: 30px;
  top: auto;
}

.trival-carousel .carousel__next {
  right: 20%;
  bottom: 90px;
  top: auto;
}

.trival-carousel .carousel__slide--active {
  margin-right: 40px;
  margin-left: 40px;
}

.trival-carousel .carousel__slide>.carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}

.trival-carousel .carousel__slide--visible>.carousel__item {
  opacity: 1;
  transform: rotateY(0);
}

.trival-carousel .carousel__slide--next>.carousel__item {
  transform: scale(0.9) translate(-10px);
}

.trival-carousel .carousel__slide--prev>.carousel__item {
  transform: scale(0.9) translate(10px);
}

.trival-carousel .carousel__slide--active>.carousel__item {
  transform: scale(1.1);
}

.trival-carousel .custom-carousal .carousel__track {
  margin-left: 20px;
}
</style>