
<template>
    <div class="footer-service" v-bind:class="name" v-bind:style="{ backgroundImage: 'url(' + footerbg + ')' }" >
              <div class="container">
                  <div class="footer-content">
                  <div class="footer-booking" data-aos="fade-up" data-aos-duration="2500">
                      <p class="text-uppercase text-white mx-0">{{HeadingTopText}}</p>
                      <h2 class="text-white mx-0">{{MainHeading}}</h2>
                  </div>


                  <router-link :to="''+ booknow +''" class="white-btn text-uppercase" data-aos="fade-bottom" data-aos-duration="2500">book now</router-link>
                  <div class="service-list">
                      <ul>
                          <li data-aos="fade-up" data-aos-duration="2500">
                              <div class="footer-list-element">
                                  <figure>
                                    <img :src="'/images/' + image1 + '.jpg'" class="img-fluid" alt="Meet & Greet" />
                                </figure>
                                <p class="text-capitalize mb-0">{{service1}}</p>
                              </div>
                          </li>
                          <li data-aos="fade-up" data-aos-duration="2500">
                              <div class="footer-list-element">
                                  <figure>
                                    <img :src="'/images/' + image2 + '.jpg'" class="img-fluid" alt="Meet & Greet" />
                                </figure>
                                <p class="text-capitalize mb-0">{{service2}}</p>
                              </div>
                          </li>
                          <li data-aos="fade-up" data-aos-duration="2500">
                              <div class="footer-list-element mb-0">
                                  <figure>
                                    <img :src="'/images/' + image3 + '.jpg'" class="img-fluid" alt="Meet & Greet" />
                                </figure>
                                <p class="text-capitalize mb-0">{{service3}}</p>
                              </div>
                          </li>
                      </ul>

                  </div>
              </div>
              </div>
           </div>

</template>


<script>
export default {
 props: {
    HeadingTopText: String,
    MainHeading: String,
    name: String,
    service1: String,
    image1: String,
    service2: String,
    image2: String,
    service3: String,
    image3: String,
    footerbg: String,
    booknow: {
        default: '/services',
        type: String
    }
 }
}

</script>

                                

<style>
</style>