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
            <h2>A walk through history</h2>
            <p>Awal Private Terminal through the decades</p>
          </div>
          <div class="slider-years">
            <ul class="d-flex mb-0">
              <li>
                <span id="span1" class="carousel-item-private" @click="item()">
                  60s</span
                >
              </li>
              <li>
                <span id="span2" class="carousel-item-private" @click="item1()"
                  >70s</span
                >
              </li>
              <li>
                <span id="span3" class="carousel-item-private" @click="item2()"
                  >30s</span
                >
              </li>
              <li>
                <span id="span4" class="carousel-item-private" @click="item3()"
                  >90s</span
                >
              </li>
              <li>
                <span id="span5" class="carousel-item-private" @click="item4()"
                  >2000s</span
                >
              </li>
              <li>
                <span id="span6" class="carousel-item-private" @click="item5()"
                  >2010s</span
                >
              </li>
              <li>
                <span id="span7" class="carousel-item-private" @click="item6()"
                  >2020s</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-wrapper">
      <div class="carousel__slide" id="60s">
        <div class="carousel__item">
          <div class="carousal-style">
            <figure>
              <img
                src="../../../assets/images/history-slider.jpg"
                class="img-fluid"
              />
            </figure>
            <span class="slider-description"
              >Laying of Foundation for Old Terminal Building in 1960</span
            >
            <strong class="slider-date">1960s</strong>
          </div>
        </div>
      </div>
      <div class="carousel__slide" id="70s">
        <div class="carousel__item">
          <div class="carousal-style">
            <figure>
              <img
                src="../../../assets/images/history-slider.jpg"
                class="img-fluid"
              />
            </figure>
            <span class="slider-description"
              >Laying of Foundation for Old Terminal Building in 1970</span
            >
            <strong class="slider-date">1970s</strong>
          </div>
        </div>
      </div>
      <div class="carousel__slide" id="30s">
        <div class="carousel__item">
          <div class="carousal-style">
            <figure>
              <img
                src="../../../assets/images/history-slider.jpg"
                class="img-fluid"
              />
            </figure>
            <span class="slider-description"
              >Laying of Foundation for Old Terminal Building in 1930</span
            >
            <strong class="slider-date">1930s</strong>
          </div>
        </div>
      </div>
      <div class="carousel__slide" id="90s">
        <div class="carousel__item">
          <div class="carousal-style">
            <figure>
              <img
                src="../../../assets/images/history-slider.jpg"
                class="img-fluid"
              />
            </figure>
            <span class="slider-description"
              >Laying of Foundation for Old Terminal Building in 1990</span
            >
            <strong class="slider-date">1990s</strong>
          </div>
        </div>
      </div>
      <div class="carousel__slide" id="2000s">
        <div class="carousel__item">
          <div class="carousal-style">
            <figure>
              <img
                src="../../../assets/images/history-slider.jpg"
                class="img-fluid"
              />
            </figure>
            <span class="slider-description"
              >Laying of Foundation for Old Terminal Building in 2000</span
            >
            <strong class="slider-date">2000s</strong>
          </div>
        </div>
      </div>
      <div class="carousel__slide" id="2010s">
        <div class="carousel__item">
          <div class="carousal-style">
            <figure>
              <img
                src="../../../assets/images/history-slider.jpg"
                class="img-fluid"
              />
            </figure>
            <span class="slider-description"
              >Laying of Foundation for Old Terminal Building in 2010</span
            >
            <strong class="slider-date">2010s</strong>
          </div>
        </div>
      </div>
      <div class="carousel__slide" id="2020s">
        <div class="carousel__item">
          <div class="carousal-style">
            <figure>
              <img
                src="../../../assets/images/history-slider.jpg"
                class="img-fluid"
              />
            </figure>
            <span class="slider-description"
              >Laying of Foundation for Old Terminal Building in 2020</span
            >
            <strong class="slider-date">2020s</strong>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
<script>
// import { Carousel, Navigation, Slide,Pagination } from "vue3-carousel";
// import vuescroll from 'vue-scroll'
// import "vue3-carousel/dist/carousel.css";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    // this.scrollAnimation();
  },

  methods: {
    // scrollAnimation() {
    //   gsap
    //     .timeline({
    //       scrollTrigger: {
    //         trigger: ".slider-wrapper",
    //         start: "center center",
    //         end: "bottom top",
    //         markers: false,
    //         scrub: true,
    //         pin: true,
    //       },
    //     })
    //     .to(".slider-wrapper", { x: "-470%", duration: 50 });
    // },
    item() {
      // window.scrollTo(0, 20);
      gsap.to(".slider-wrapper", { x: "0%" });
      this.ressetClassesFunction(1);
    },
    item1() {
      gsap.to(".slider-wrapper", { x: "-80%" });
      this.ressetClassesFunction(2);
    },
    item2() {
      gsap.to(".slider-wrapper", { x: "-158%" });
      this.ressetClassesFunction(3);
    },
    item3() {
      gsap.to(".slider-wrapper", { x: "-238%" });
      this.ressetClassesFunction(4);
    },
    item4() {
      gsap.to(".slider-wrapper", { x: "-318%" });
      this.ressetClassesFunction(5);
    },
    item5() {
      gsap.to(".slider-wrapper", { x: "-398%" });
      this.ressetClassesFunction(6);
    },
    item6() {
      gsap.to(".slider-wrapper", { x: "-470%" });
      this.ressetClassesFunction(7);
    },
    ressetClassesFunction(num) {
      let items = document.getElementsByClassName("carousel-item-private");
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }

      let element = document.getElementById("span" + num);
      element.classList.add("active");
    },
  },
  components: {},
};
</script>


<style>
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

.history-carousel .carousel__slide {
  padding: 0 130px;
}
.slider-years {
  margin-bottom: 50px;
}
.slider-years ul {
  list-style: none;
  justify-content: center;
}
.slider-years ul li span {
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
.slider-years ul li span:hover::before,.slider-years ul li span.active::before {
  opacity: 1;
}
.slider-years ul li span:hover,.slider-years ul li span.active {
  opacity: 1;
}
/* .history-carousel .carousel__track{transform: translateX(-142%) !important} */
.history-carousel .carousel__prev,
.history-carousel .carousel__next {
  display: none;
}
.history-carousel .carousel__slide {
  position: relative;
  transition: all ease-in-out 0.3s;
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
  width: 80%;
}
.history-carousel .slider-wrapper .carousel__slide .slider-date {
  position: relative;
  top: -130px;
  left: -160px;
  opacity: 1;
  bottom: auto;
}
.history-carousel .slider-wrapper .carousel__slide .slider-description {
  opacity: 1;
}
@media (max-width: 1199px) {
  .history-carousel {
    padding: 120px 0 0 0;
  }
  .history-carousel .carousel__slide {
    padding: 0 100px;
  }
  .history-carousel .carousel__slide .slider-description {
    right: -85px;
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
    font-size: 150px;
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
    font-size: 110px;
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
  .history-carousel .carousel__slide .slider-date {
    font-size: 80px;
    bottom: -45px;
    left: -30px;
  }
  .history-carousel .slider-wrapper .carousel__slide .slider-date {
    top: -45px;
    left: -30px;
  }
  .history-carousel {
    padding: 50px 0 0;
  }
  .slider-years ul li span {
    font-size: 20px;
  }
}
</style>