import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home/Home.vue";
import About from "../components/About/About.vue";
import Tour from "../components/Tour/Tour.vue";
import EliteForm from "../components/EliteForm/EliteFormStep1.vue";
import EliteForm2 from "../components/EliteForm/EliteFormStep2.vue";
import EliteForm3 from "../components/EliteForm/EliteFormStep3.vue";
import EliteForm4 from "../components/EliteForm/EliteFormStep4.vue";
import EliteForm5 from "../components/EliteForm/EliteFormStep5.vue";
import ElitePayementForm from "../components/EliteForm/ElitePayementForm.vue";
import EliteThankYouPage from "../components/EliteForm/ThankYouPage.vue";
import EliteEliteService from "../components/EliteForm/EliteService.vue";
import PaymentRecevied from "../components/EliteForm/Payment.vue";
import Service from "../components/Services/Service.vue";
import GeneralAviation from "../components/GeneralAviation/GeneralAviation.vue"
import GeneralAviationForm1 from "../components/GeneralAviationForm/FormStep1.vue"
import GeneralAviationForm2 from "../components/GeneralAviationForm/FormStep2.vue"
import GeneralAviationForm3 from "../components/GeneralAviationForm/FormStep3.vue"
import GeneralAviationForm4 from "../components/GeneralAviationForm/FormStep4.vue"
import GeneralAviationForm5 from "../components/GeneralAviationForm/FormStep5.vue"
import GeneralAviationForm6 from "../components/GeneralAviationForm/FormStep6.vue"
import ThankYouPage from "../components/GeneralAviationForm/ThankYouPage.vue"
import OurStory from "../components/OurStory/OurStory.vue"
import AllService from "../components/AllServices/AllService.vue"
import Contact from "../components/Contact/Contact.vue"
import ExpiredPage from "../components/EliteForm/ExpiredPage.vue"
import '@fortawesome/fontawesome-free/js/all.js';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: 'true' }
  },
  {
    path: "/about",
    name: "About",
    meta: { requiresAuth: 'true' },
    component: About,
  },
  {
    path: "/tour",
    name: "Tour",
    component: Tour,
  },
  {
    path: "/elite-form",
    name: "Elite Form",
    component: EliteForm,
  },
  {
    path: "/elite-form2",
    name: "Elite Form 2",
    component: EliteForm2,
  },
  {
    path: "/elite-form3",
    name: "Elite Form 3",
    component: EliteForm3,
  },
  {
    path: "/elite-form4",
    name: "Elite Form 4",
    component: EliteForm4,
  },
  {
    path: "/elite-form5",
    name: "Elite Form 5",
    component: EliteForm5,
  },
  {
    path: "/elite-payement-form",
    name: "Elite Payement Form",
    component: ElitePayementForm,
  },
  {
    path: "/elite-thankyou",
    name: "Elite ThankYouPage",
    component: EliteThankYouPage,
  },
  {
    path: "/elite-service",
    name: "Elite ThankYouPage",
    component: EliteEliteService,
  },
  {
    path: "/payment-recevied",
    name: "Payment Recevied",
    component: PaymentRecevied,
  },
  {
    path: "/story",
    name: "OurStory",
    component: OurStory,
  },
  {
    path: "/services",
    name: "Service",
    component: Service,
  },
  {
    path: "/elite-services",
    name: "AllService",
    component: AllService,
  },
  {
    path: "/general-aviation",
    name: "GeneralAviation",
    component: GeneralAviation,
  },
  {
    path: "/general-aviation-form1",
    name: "GeneralAviationForm1",
    component: GeneralAviationForm1,
  },
  {
    path: "/general-aviation-form2",
    name: "GeneralAviationForm2",
    component: GeneralAviationForm2,
  },
  {
    path: "/general-aviation-form3",
    name: "GeneralAviationForm3",
    component: GeneralAviationForm3,
  },
  {
    path: "/general-aviation-form4",
    name: "GeneralAviationForm4",
    component: GeneralAviationForm4,
  },
  {
    path: "/general-aviation-form5",
    name: "GeneralAviationForm5",
    component: GeneralAviationForm5,
  },
  {
    path: "/general-aviation-form6",
    name: "GeneralAviationForm6",
    component: GeneralAviationForm6,
  },
  {
    path: "/general-aviation-thankyou",
    name: "ThankYouPage",
    component: ThankYouPage,
  },
  
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

  {
    path: "/expired",
    name: "ExpiredPage",
    component: ExpiredPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass: 'active',
  //   linkExactActiveClass: 'active',
});

export default router;