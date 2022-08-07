<template>
  <div id="app">
    <Header v-if="currentRouteName" />
    <router-view />
    <Footer v-if="currentRouteName" />
  </div>
</template>


<script >
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import AOS from "aos";

export default {
  // state
  data() {
    return {
      showHeader: true,
    };
  },
  // created() {
  //   console.log("this.$route")
  //   console.log(this.$route.meta)
  //   console.log(this.$route.meta.requiresAuth)
  // },

  mounted() {
    AOS.init();
    window.scrollTo(0, 0)

  },
  components: {
    Header,
    Footer,
  },
  computed: {
    currentRouteName() {
      return this.$route.name == 'Home' || this.$route.name == 'About'|| this.$route.name == 'PrivacyPolicy'|| this.$route.name == 'TermsConditions' || this.$route.name == 'Tour' || this.$route.name == 'Service' || this.$route.name == 'OurStory' || this.$route.name == 'AllService'|| this.$route.name == 'GeneralAviation' || this.$route.name == 'Contact' ? true : false ;
    },
  },
};
</script>


<style>
</style>
