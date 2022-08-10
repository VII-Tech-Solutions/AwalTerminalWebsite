<template>
  <Section class="history-carousel">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="horizon">
            <span class="page-subtitle text-uppercase"
              >our memorable journey</span
            >
          </div>
          <div class="history-carousel-header text-center">
            <h2>{{ heading3 }}</h2>
            <p>{{ subheading2 }}</p>
          </div>

          <div class="slider-years">
            <ul class="d-flex mb-0">
              <li>
                <span
                  id="span1"
                  class="carousel-item-private active"
                  @click="item()"
                >
                  60s</span
                >
              </li>
              <li>
                <span id="span2" class="carousel-item-private" @click="item1()"
                  >2022s</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-wrapper">
      <div v-if="slider1" class="history-sliders active" id="60s">
        <carousel
          :settings="settings"
          :breakpoints="breakpoints"
          :wrap-around="true"
        >
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/old-history-1.png"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">1960s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/old-history-2.png"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">1960s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/old-history-3.png"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">1960s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/old-history-4.png"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">1960s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/old-history-5.png"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">1960s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/old-history-6.png"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">1960s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/old-history-7.png"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">1960s</strong>
          </slide>
         
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
      <div v-if="slider2" class="history-sliders active" id="2022s">
        <carousel  :settings="settings2" :breakpoints="breakpoints" :wrap-around="true">
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/new-history-1.jpg"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">2022s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/new-history-2.jpg"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">2022s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/new-history-3.jpg"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">2022s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/new-history-4.jpg"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">2022s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/new-history-5.jpg"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">2022s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/new-history-6.jpg"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">2022s</strong>
          </slide>
          <slide :key="slide">
            <figure>
              <img
                src="../../../assets/images/new-history-7.jpg"
                class="img-fluid"
              />
            </figure>
            <strong class="slider-date">2022s</strong>
          </slide>
          <template #addons>
            <navigation />
            <!-- <pagination /> -->
          </template>
        </carousel>
      </div>
    </div>
  </Section>
</template>
<script>
// import { Carousel, Navigation, Slide,Pagination } from "vue3-carousel";
// import vuescroll from 'vue-scroll'
// import "vue3-carousel/dist/carousel.css";

// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  data() {
    return {
      slider1: true,
      slider2: false,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        autoplay:"2000"
      },
       settings2: {
        itemsToShow: 1,
        snapAlign: "center",
        autoplay:"2000"
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 1.5,
          snapAlign: "start",
        },
      },
    };
  },
  props: {
    heading3: String,
    subheading2: String,
    quote1: String,
    image1: String,
  },
  name: "HistoryCarousel",

  mounted() {
    // this.scrollAnimation();
  },

  methods: {
    
    item() {
       this.slider1=true;
      this.slider2= false;
      $("#60s").addClass("active");
      $("#2022s").removeClass("active");
      $("#span1").addClass("active");
      $("#span2").removeClass("active");
    },
    item1() {
       this.slider1=false;
      this.slider2= true;
      $("#2022s").addClass("active");
      $("#60s").removeClass("active");
      $("#span2").addClass("active");
      $("#span1").removeClass("active");
    },
    
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  // components: {},
};
</script>


<style>
/* .slider-wrapper .carousel__track{transform: translateX(13%) !important;}   */
/* .slider-wrapper .carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
} */
.slider-wrapper .carousel__icon {
  margin-top: -5px;
}

.slider-wrapper .carousel__prev,
.slider-wrapper .carousel__next {
  width: 55px;
    height: 55px;
    border: 1px solid #011e41 !important;
    color: #011e41;
    border-radius: 0%;
    background-color: #fff;
}

.slider-wrapper .carousel__prev,
.slider-wrapper .carousel__next {
  display: block !important;
  box-sizing: content-box;
  border: 5px solid white;
}

.slider-wrapper .carousal-style {
  padding: 0 12px;
}

.slider-wrapper .history-sliders {
  display: none;
}

.slider-wrapper .history-sliders.active {
  display: block;
  padding: 0 130px;
  overflow: hidden;
}

.history-carousel {
  padding: 150px 0 0 0;
  overflow: hidden;
}

.history-carousel-header h2 {
  margin-bottom: 23px;
}

.history-carousel-header p {
  margin-bottom: 10px;
}

/* .history-carousel .carousel__slide {
  padding: 0 130px;
} */

.slider-years {
  margin-bottom: 50px;
}

.slider-years ul {
  list-style: none;
  justify-content: center;
}

.slider-years ul li span,
.story-slider-tab span {
  font-size: 30px;
  text-decoration: none;
  line-height: 1.3;
  color: #011e41;
  opacity: 0.4;
  position: relative;
  margin-right: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
}

.slider-years ul li span::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  bottom: 0;
  background: #011e41;
  opacity: 0;
  transition: all ease-in-out 0.3s;
}

.slider-years ul li span:hover::before,
.slider-years ul li span.active::before {
  opacity: 1;
}

.slider-years ul li span:hover,
.slider-years ul li span.active {
  opacity: 1;
}

.history-carousel .carousel__track {
  margin-bottom: 80px;
}

.history-carousel .carousel__prev,
.history-carousel .carousel__next {
  display: none;
}

.history-carousel .carousel__slide {
  position: relative;
  /* transition: all ease-in-out 0.3s; */
}

.history-carousel .carousel__slide .slider-description {
  position: absolute;
  top: 34px;
  right: -60px;
  max-width: 170px;
  font-size: 16px;
  line-height: 1.69;
  color: #011e41;
  text-align: left;
  opacity: 0;
  transition: all ease-in-out 0.3s;
}

.history-carousel .carousel__slide--active .slider-description {
  opacity: 1;
}

.history-carousel .carousel__slide .slider-date {
  position: absolute;
  bottom: -130px;
  left: -70px;
  font-size: 200px;
  line-height: 1;
  color: #011e41;
  font-family: "Lora";
  opacity: 0;
  transition: all ease-in-out 0.3s;
}

.history-carousel .carousel__slide--active .slider-date {
  opacity: 0.3;
}

.history-carousel .carousel__slide .slider-date-text {
  font-size: 150px;
  line-height: 1;
}

.history-carousel .carousel__viewport {
  overflow: initial !important;
  overflow-x: hidden;
}

.slider-wrapper {
  display: flex;
  /* overflow: hidden;
    overflow-x: auto; */
}

.history-carousel .slider-wrapper .carousel__slide {
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.history-carousel .slider-wrapper .carousel__slide .slider-date {
  position: relative;
  top: -80px;
  left: -160px;
  opacity: 1;
  bottom: auto;
  opacity: 0.3;
}

.history-carousel .slider-wrapper .carousel__slide .slider-description {
  opacity: 1;
}
/* @media (max-width: 1199px) {
} */
@media (max-width: 1199px) {
  .history-carousel {
    padding: 120px 0 0 0;
  }

  .history-carousel .carousel__slide .slider-description {
    right: -85px;
  }

  .history-carousel .slider-wrapper .carousel__slide {
    padding: 0 50px;
  }
  .history-carousel .carousel__track{
    margin-bottom: 50px;
  }
 .history-carousel  .carousel__slide .slider-date{
    font-size: 150px;
    left: -150px;
    top: -100px
  }
}

@media (max-width: 991px) {
  .history-carousel {
    padding: 100px 0 0;
  }

  .history-carousel .carousel__slide .slider-description {
    top: 14px;
  }

  .history-carousel .carousel__slide .slider-date {
    font-size: 120px;
    bottom: -90px;
    left: -50px;
  }

  .history-carousel .slider-wrapper .carousel__slide .slider-date {
    top: -90px;
    left: -50px;
  }

  .history-carousel .carousel__slide .slider-date-text {
    font-size: 110px;
  }

  .history-carousel-header h2 {
    margin-bottom: 10px;
  }

  .slider-years {
    margin-bottom: 30px;
  }

  .slider-years ul li span {
    font-size: 25px;
  }

  .history-carousel .slider-wrapper .carousel__slide {
    padding: 0 20px;
  }

  .slider-wrapper .history-sliders.active {
    padding: 0 80px;
  }
}

@media (max-width: 767px) {
  .history-carousel .carousel__slide .slider-description {
    width: 150px;
    right: -65px;
  }

  .history-carousel .carousel__slide {
    padding: 0 90px;
  }

  .history-carousel .carousel__slide .slider-date {
    font-size: 80px;
    bottom: -65px;
    left: -10px;
  }

  .history-carousel .slider-wrapper .carousel__slide .slider-date {
    top: -65px;
    left: -10px;
  }

  .history-carousel {
    padding: 70px 0 0;
  }

  .slider-years ul li span {
    margin-right: 30px;
  }

  .slider-years ul {
    flex-wrap: wrap;
  }

  .slider-years ul li span {
    font-size: 22px;
  }
  .history-carousel .slider-wrapper .carousel__slide {
    padding: 0 10px;
    /* width: 117% !important; */
  }
  .history-carousel .carousel__track{
  margin-bottom: 30px;
}
.slider-wrapper .carousel__prev,
.slider-wrapper .carousel__next {
  width: 40px;
  height: 40px;
  font-size: 20px;
}
}

@media (max-width: 575px) {
  .history-carousel .carousel__slide .slider-description {
    display: none;
  }

  .history-carousel .carousel__slide {
    padding: 0px 40px;
  }

  .slider-years ul li span {
    margin-right: 20px;
  }
.history-carousel .carousel__track{
  margin-bottom: 30px;
}
  .history-carousel .carousel__slide .slider-date {
    font-size: 50px;
    bottom: -45px;
    left: -30px;
  }

  .history-carousel .slider-wrapper .carousel__slide .slider-date {
    top: -45px;
    left: 0px;
  }

  .history-carousel {
    padding: 50px 0 0;
  }

  .slider-years ul li span {
    font-size: 20px;
  }
  .slider-wrapper .history-sliders.active{
    padding: 0 40px;

  }
}
</style>