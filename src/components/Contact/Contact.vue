<template>
  <Banner :headingTop1="heading_top_1" :heading1="heading_1" :subheading1="subheading_1"  :backgroundImage1="background_image_1_url" />
  <Form :heading2="heading_2" />

</template>                           
<script>
import Banner from "./Banner.vue";
import Form from "./Form.vue";
import axios from 'axios'
import AOS from "aos";
import configs from "../constants";

export default {


  data() {
    return {
      heading_top_1: null,
      heading_1: null,
      subheading_1: null,
      heading_2: null,
      background_image_1_url: null,
    }
  },

  methods: {

    getContactContent() {
      axios.get('https://admin.awalvip.bh/api/contact-us-content')
        .then((response) => {

          let data = response.data.data.contact_us_content;

          this.heading_top_1 = data.heading_top_1;
          this.heading_1 = data.heading_1;
          this.subheading_1 = data.subheading_1;
          this.heading_2 = data.heading_2;
          this.background_image_1_url = data.background_image_1_url;
        })
        .catch(function (error) {
          console.log(error.response)
        })
    }
  },

  created() {
    this.getContactContent();
  },



  mounted() {
    window.scrollTo(0, 0);
    AOS.init();

  },
  components: {
    Banner,Form,
  },

};
</script>
<style>
/* .services{position: relative; padding-top:600px; } */
.service-img {
  position: relative;
  z-index: -1;
  margin-top: -395px;
  min-height: 100vh;
}

.service-img img {
  height: 100%;
  width: 100%;
}

/* .service-fixed{position: absolute;z-index: 99;left: 10%;right: 10%; margin: auto;top:0;} */
.service-fixed {
  padding: 100px 95px 95px 95px;
}

.service-card-style {
  padding: 60px 40px;
  border-radius: 0%;
  border: 1px solid #011e41;
  height: 100%;
}

.service-card-body {
  padding-bottom: 60px;
}

.service-card-body .title-content {
  padding-bottom: 40px;
}

.service-card-body .title-content .icon {
  margin-right: 20px;
}

.service-card-body .title-content .service-title {
  font-family: "Lora";
  font-size: 36px;
  font-weight: 500;
  line-height: 40px;
  color: #011e41;
}

.service-card-body p {
  font-size: 20px;
  line-height: 40px;
}

/* MEDIA QUERY */
@media (max-width: 1199px) {

  /* .services{padding-top:500px; } */
  .service-fixed {
    padding: 80px 75px 75px 75px;
  }

  .service-card-style {
    padding: 45px 30px;
  }

  .service-card-body .title-content .service-title {
    font-size: 25px;
    line-height: 30px;
  }

  .service-card-body .title-content {
    padding-bottom: 30px;
  }

  .service-card-body {
    padding-bottom: 50px;
  }

  .service-card-body .title-content .icon {
    margin-right: 15px;
  }

  .service-card-body p {
    font-size: 18px;
    line-height: 35px;
  }
}

@media (max-width: 992px) {

  /* .services{padding-top:800px;} */
  .service-img {
    height: 600px;
  }
}

@media (max-width: 767px) {
  .service-card-body .title-content {
    padding-bottom: 25px;
  }

  /* .services{padding-top:600px;} */
  .service-fixed {
    padding: 70px 50px 50px 50px;
  }

  .service-card-style {
    padding: 40px 25px;
  }

  .service-card-body p {
    font-size: 16px;
    line-height: 30px;
  }

  .service-card-body {
    padding-bottom: 40px;
  }
}

@media (max-width: 567px) {
  .service-fixed {
    left: 5%;
    right: 5%;
  }

  .service-card-body .title-content .service-title {
    font-size: 22px;
    line-height: 26px;
  }

  .service-card-body .title-content {
    padding-bottom: 15px;
  }

  /* .services{padding-top:410px;} */
  .service-img {
    height: 450px;
  }

  .service-card-body {
    padding-bottom: 25px;
  }

  .service-card-style {
    padding: 30px 25px;
  }

  .service-fixed {
    padding: 35px 20px 20px 20px;
  }
}

@media (max-width: 467px) {
  .service-img {
    display: none
  }

  /* .services{padding-top:0px;} */
  .service-fixed {
    position: inherit;
  }
}
</style>
