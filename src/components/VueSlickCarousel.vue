<template>
  <div>
    <VueSlickCarousel  v-bind="settings">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>


<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    data() {
      return {
        settings: {
            "centerMode": true,
            "centerPadding": "20px",
            "focusOnSelect": true,
            "infinite": true,
            "slidesToShow": 3,
            "speed": 500
        },
      }
    },
  }
</script>