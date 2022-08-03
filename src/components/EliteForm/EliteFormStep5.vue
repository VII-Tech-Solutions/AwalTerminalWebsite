<template>
  <div class="aviation-form bg-white">
    <div class="container">
      <div class="form-header">
        <router-link to="/">
          <figure class="mb-0 form-logo">
            <img
              class="img-fluid"
              src="../../assets/images/forms-header-logo.png"
            />
          </figure>
        </router-link>
      </div>
      <div class="form-body">
        <div class="form-page-title">
          <div
            class="
              d-flex
              flex-md-row flex-column
              align-items-center
              justify-content-between
            "
          >
            <h3 class="form-h3 text-capitalize">elite service</h3>
            <p class="form-p lora-semi m-0">
              Step <span>5</span> of <span>5</span>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 col-md-10">
            <form class="general-form form-details">
              <fieldset class="mb-3">
                <legend class="form-title sub-title">Review & Submit</legend>
                <p class="fw-semi-bold form-p mb-lg-3 mb-2">
                  Here is an overview of all the details you have submitted
                </p>
              </fieldset>
              <div class="accordion detail-section" id="accordionExample">
                <div class="accordion-item">
                  <div class="detail-section-header w-100">
                    <p
                      class="-capitalize detail-section-title accordion-header"
                      id="headingOne"
                    >
                      <button
                        class="
                          accordion-button
                          text-capitalize
                          detail-section-title
                        "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Your Service
                      </button>
                    </p>
                  </div>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body elite-form">
                      <div class="elite-offer-services d-flex flex-column">
                        <div class="d-flex flex-column flex-md-row">
                          <div
                            v-if="service_id == true"
                            class="elite-offer-service d-flex"
                          >
                            <label class="custom-radio">
                              <div class="checkmark">
                                <strong
                                  class="service-name d-block mb-lg-3 mb-2"
                                  >Common Lounge</strong
                                >
                                <strong class="service-price d-block mb-3"
                                  >BHD 100<sub>/adult</sub></strong
                                >
                                <ul class="list-unstyled service-features">
                                  <li
                                    class="position-relative"
                                    v-for="item in commontype"
                                    :key="item.id"
                                  >
                                    {{ item.feature_details }}
                                  </li>
                                  <!-- <li class="position-relative">50% of the adult rate
                                                                        for children aged 2 to 12</li>
                                                                    <li class="position-relative">Free entry for infants
                                                                        ( 0 to 2 years old)</li>
                                                                    <li class="position-relative">10% group discount (5
                                                                        PAX and above)</li> -->
                                </ul>
                                <span class="tax-text"
                                  >* 10% VAT on the total amount</span
                                >
                              </div>
                            </label>
                          </div>
                          <div v-else class="elite-offer-service">
                            <label class="custom-radio">
                              <div class="checkmark">
                                <strong
                                  class="service-name d-block mb-lg-3 mb-2"
                                  >Private Lounge</strong
                                >
                                <strong class="service-price d-block mb-3"
                                  >BHD 150<sub>/adult</sub></strong
                                >
                                <ul class="list-unstyled service-features">
                                  <li
                                    class="position-relative"
                                    v-for="item in privatetype"
                                    :key="item.id"
                                  >
                                    {{ item.feature_details }}
                                  </li>
                                  <!-- <li class="position-relative">Minimum of 2 adults
                                                                        full fares required to access a Private Lounge
                                                                    </li>
                                                                    <li class="position-relative">50% of the adult rate
                                                                        for children aged 2 to 12</li>
                                                                    <li class="position-relative">Free entry for infants
                                                                        ( 0 to 2 years old)</li>
                                                                    <li class="position-relative">Rates are per
                                                                        passenger capped at a total BHD 600.000 per
                                                                        lounge</li>
                                                                    <li class="position-relative">Rates apply to
                                                                        standard lounge size with a maximum of 6
                                                                        passengers per lounge</li> -->
                                </ul>
                                <span class="tax-text"
                                  >* 10% VAT on the total amount</span
                                >
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <p
                    class="
                      text-capitalize
                      detail-section-title
                      accordion-header
                    "
                    id="headingTwo"
                  >
                    <button
                      class="
                        accordion-button
                        text-capitalize
                        detail-section-title
                      "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Your Journey
                    </button>
                  </p>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="accordian-ul">
                        <ul class="ul_css">
                          <li>
                            <div class="d-flex mobile-col">
                              <p class="extra-small-text w-p text-capitalize">
                                Flight Details
                              </p>
                              <div class="details-list">
                                <ul class="ul_css">
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Flight Status<span class="asterik"
                                          >*</span
                                        >
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        Arrival
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Arriving From<span class="asterik"
                                          >*</span
                                        >
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ airport_name }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        date<span class="asterik">*</span>
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ date }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        time<span class="asterik">*</span>
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ time }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Flight number<span class="asterik"
                                          >*</span
                                        >
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ flight_number }}
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex mobile-col">
                              <p class="extra-small-text w-p">
                                No. of Passengers
                              </p>
                              <div class="details-list">
                                <ul class="ul_css">
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        adults<span class="asterik">*</span>
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ number_of_adults }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        children<span class="asterik">*</span>
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ number_of_children }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        infants<span class="asterik">*</span>
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ number_of_infants }}
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <p
                    class="
                      text-capitalize
                      detail-section-title
                      accordion-header
                    "
                    id="headingThree"
                  >
                    <button
                      class="
                        accordion-button
                        text-capitalize
                        detail-section-title
                      "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      Passenger Details
                    </button>
                  </p>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="accordian-ul">
                        <ul
                          class="ul_css"
                          v-for="(passenger, index) in passengers"
                          :key="passenger"
                        >
                          <li>
                            <div class="d-flex mobile-col">
                              <p class="extra-small-text w-p text-capitalize">
                                Passenger
                                {{ index + 1 }}
                              </p>
                              <div class="details-list">
                                <ul class="ul_css">
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Title<span class="asterik">*</span>
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ passenger.title }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        First Name*<span class="asterik"
                                          >*</span
                                        >
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ passenger.first_name }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Last Name<span class="asterik">*</span>
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ passenger.last_name }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p class="extra-small-text w-p">
                                        Date of Birth<span class="asterik"
                                          >*</span
                                        >
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ passenger.birth_date }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Nationality<span class="asterik"
                                          >*</span
                                        >
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ passenger.nationality_title }}
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="d-flex align-items-baseline">
                                      <p
                                        class="
                                          extra-small-text
                                          w-p
                                          text-capitalize
                                        "
                                      >
                                        Class<span class="asterik">*</span>
                                      </p>
                                      <p
                                        class="
                                          extra-small-text
                                          text-capitalize
                                          fw-normal
                                        "
                                      >
                                        {{ passenger.flight_class }}
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <p
                    class="
                      text-capitalize
                      detail-section-title
                      accordion-header
                    "
                    id="headingFour"
                  >
                    <button
                      class="
                        accordion-button
                        text-capitalize
                        detail-section-title
                      "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      Booker’s Details
                    </button>
                  </p>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="details-list">
                        <ul class="ul_css">
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p class="extra-small-text w-p text-capitalize">
                                first name<span class="asterik">*</span>
                              </p>
                              <p
                                class="
                                  extra-small-text
                                  text-capitalize
                                  fw-normal
                                "
                              >
                                {{ booker.first_name }}
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p class="extra-small-text w-p text-capitalize">
                                last name<span class="asterik">*</span>
                              </p>
                              <p
                                class="
                                  extra-small-text
                                  text-capitalize
                                  fw-normal
                                "
                              >
                                {{ booker.last_name }}
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p class="extra-small-text w-p text-capitalize">
                                email address<span class="asterik">*</span>
                              </p>
                              <p class="extra-small-text fw-normal">
                                {{ booker.email }}
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex align-items-baseline">
                              <p class="extra-small-text w-p text-capitalize">
                                mobile number<span class="asterik">*</span>
                              </p>
                              <p
                                class="
                                  extra-small-text
                                  text-capitalize
                                  fw-normal
                                "
                              >
                                +97{{ booker.mobile_number }}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-check terms">
                <label class="checked-container text-capitalize"
                  >By submitting this form, you are agreeing to our
                  <router-link to="">Terms and Conditions</router-link>
                  <input
                    type="checkbox"
                    value="1"
                    name="radio"
                    @change="check($event)"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <div class="elite-forrm-footer">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-block">
            <router-link
              to="/elite-form4"
              class="cancel-link d-inline-block text-decoration-none"
              >Back
            </router-link>
          </div>
          <div class="d-flex align-items-center">
            <p class="fw-semi-bold form-p mb-0 me-lg-3 me-2 text-green sans">
              Total Amount: <span>BHD {{ amount }}</span>
            </p>
            <div class="d-block">
              <!-- <router-link @click="setData()"
                                class="btn-next d-inline-block align-top transition text-capitalize">
                            </router-link> -->

              <button
                @click="setData()"
                class="
                  btn-next
                  d-inline-block
                  align-top
                  transition
                  text-capitalize
                "
                type="button"
                :disabled="disabled ? false : true"
              >
                Submit Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";

export default {
  data() {
    var obj = JSON.parse(localStorage.elitedata);
    console.log(obj.passengers, "obj.passengersobj.passengers");
    return {
      number_of_adults: obj.number_of_adults,
      number_of_children: obj.number_of_children,
      number_of_infants: obj.number_of_infants,
      sum: obj.sum,
      notFormValid: true,
      countriesoptions: obj.countriesoptions,
      commontype: obj.commontype,
      privatetype: obj.privatetype,
      service_id: obj.service_id,
      Totle: obj.total,
      airport_id: obj.airport_id,
      airport_name: obj.airport_name,
      date: obj.date,
      time: obj.time,
      flight_number: obj.flight_number,
      is_arrival_flight: obj.is_arrival_flight,
      // passengers info
      passengers: obj.passengers,
      //booker Info
      booker: {
        first_name: obj.booker.first_name,
        last_name: obj.booker.last_name,
        mobile_number: obj.booker.mobile_number,
        comments: obj.booker.comments,
        //optional pram
        email: obj.booker.email,
      },
      amount: 0,
      disabled: false,
    };
  },
  methods: {
    check(e) {
      this.disabled = e.target.checked;
    },
    setData() {
      //toastr.info('Are you sure you want to buy ');

      var obj = {};
      obj.number_of_adults = parseInt(
        this.number_of_adults == null ? 0 : this.number_of_adults
      );
      obj.number_of_children = parseInt(
        this.number_of_children == null ? 0 : this.number_of_children
      );
      obj.number_of_infants = parseInt(
        this.number_of_infants == null ? 0 : this.number_of_infants
      );
      obj.total = parseInt(
        parseInt(this.number_of_adults) +
          parseInt(this.number_of_children) +
          parseInt(this.number_of_infants)
      );
      (obj.service_id = this.service_id),
        (obj.countriesoptions = this.countriesoptions),
        (obj.airport_id = this.airport_id);
      obj.airport_name = this.airport_name;
      obj.date = this.date;
      obj.sum = this.sum;
      obj.privatetype = this.privatetype;
      obj.commontype = this.commontype;
      obj.time = this.time;
      obj.flight_number = this.flight_number;
      obj.is_arrival_flight = this.is_arrival_flight;
      obj.passengers = this.passengers;
      obj.booker = this.booker;
      localStorage.setItem("elitedata", JSON.stringify(obj));

      this.paynow();
    },

    paynow() {
      //debugger;
      const postData = JSON.parse(localStorage.elitedata);
      let axiosConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post(
          "https://awal.viitech.net/api/elite-service",
          postData,
          axiosConfig
        )
        .then((res) => {
          console.log(res, "aaaaaaaaaaaaa");
          localStorage.removeItem("elitedata");

          window.location.href = "/elite-thankyou";
          //   window.location.href =
          //     "/elite-service?uuid=" + res.data.data.elite_services.uuid;
        })
        .catch((err) => {
          debugger;
          console.log("AXIOS ERROR: ", err);
          toastr.error("Server Error Please Try again.. 🙁");
        });
    },

    getPaymentTotal() {
      var obj = JSON.parse(localStorage.elitedata);
      const get_param = {
        params: {
          number_of_adults: obj.number_of_adults,
          number_of_children: obj.number_of_children,
          service_id: obj.service_id,
        },
      };

      axios
        .get("https://awal.viitech.net/api/calculate-price", get_param)
        .then((res) => {
          console.log(res, "aaaaa");
          this.amount = res.data.data.total_price;
          console.log(this.amount, "Price TOtal");
        })
        .catch((err) => {
          toastr.error("Api Error Please Try again.. 🙁");
        });
    },
  },

  created() {
    this.getPaymentTotal();
  },
};
</script>
<style>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  height: 100%;
  width: 12%;
  opacity: 0;
  margin-right: 50px;
  margin-left: -20px;
  z-index: 999999;
  position: absolute;
}

input[type="time"]::-webkit-inner-spin-button,
input[type="time"]::-webkit-calendar-picker-indicator {
  height: 100%;
  width: 12%;
  opacity: 0;
  margin-right: 50px;
  margin-left: -20px;
  z-index: 999999;
  position: absolute;
}

/*  */
.form-p.text-green {
  color: #00ab8d;
}

.sans {
  font-family: "Source Sans Pro";
}

.detail-section {
  padding-bottom: 50px;
}

.accordian-ul > ul > li:not(:last-child) {
  padding-bottom: 50px;
}

.detail-section .accordion-item {
  border-top: 2px solid #011e41 !important;
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0px !important;
}

.detail-section .accordion-item:last-child {
  border-bottom: 2px solid #011e41 !important;
}

/* .detail-section .detail-section-header{display:flex; justify-content:space-between; margin-bottom:20px;} */
.detail-section .detail-section-title {
  font-family: "Lora";
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  color: #011e41;
}

.details-list ul li {
  margin-bottom: 10px;
}

.detail-section .accordion-button:not(.collapsed) {
  color: #091f40;
  background-color: transparent;
  box-shadow: none;
}

.detail-section .list-width {
  width: 214px;
  margin-right: 51px;
}

/* ELITE-FORM */
.elite-form {
  padding: 60px 0 80px;
}

.elite-form .step-text-block p {
  font-size: 18px;
  line-height: 27px;
}

.elite-form .step-heading {
  font-size: 50px;
  line-height: 54px;
}

.elite-form h3 {
  font-size: 20px;
  line-height: 24px;
}

.elite-form .logo-holder {
  margin: 0 0 50px;
}

.elite-form .elit-form-logo {
  width: 120px;
}

.elite-offer-services .elite-offer-service {
  width: 360px;
  margin: 0 20px 20px 0;
}

.elite-form .custom-radio {
  width: 100%;
  position: relative;
  padding-left: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.elite-form .custom-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.elite-form .custom-radio .checkmark {
  border: 1px solid #011e41;
  padding: 30px 30px 35px;
  min-height: 424px;
}

.elite-form .custom-radio input:checked ~ .checkmark {
  background-color: #f3f3f3;
}

.elite-form .custom-radio .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.elite-form .radio-circle span {
  width: 20px;
  height: 20px;
  display: block;
  border: 1px solid #011e41;
  border-radius: 100%;
}

.elite-form .radio-circle span:after {
  content: "";
  width: 14px;
  height: 14px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 100%;
  background: #011e41;
  display: none;
}

.elite-form .custom-radio input:checked ~ .checkmark .radio-circle span:after {
  display: block;
}

.elite-offer-services .service-name {
  font-size: 28px;
  line-height: 32px;
  font-weight: 500;
  font-family: "Lora";
  color: #011e41;
}

.elite-offer-services .service-price {
  font-size: 20px;
  line-height: 23px;
  font-family: "Source Sans Pro";
  color: #caa17b;
}

.elite-offer-services .service-price sub {
  font-size: 12px;
  line-height: 15px;
  font-weight: normal;
}

.elite-offer-services .service-features {
  font-size: 14px;
  line-height: 21px;
  color: #011e41;
}

.elite-offer-services .service-features li {
  margin: 0 0 10px;
  padding: 0 0 0 15px;
}

.elite-offer-services .service-features li:before {
  content: "";
  width: 5px;
  height: 10px;
  border: solid #011e41;
  position: absolute;
  left: 0;
  top: 1px;
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.elite-offer-services .tax-text {
  font-size: 10px;
  line-height: 12px;
  position: absolute;
  left: 30px;
  bottom: 20px;
}

@media (max-width: 567px) {
  .w-p {
    width: 110px;
  }

  .detail-section .detail-section-title {
    font-size: 16px;
    line-height: 20px;
  }

  .extra-small-text {
    font-size: 14px;
    line-height: 20px;
  }
}

/* @media (max-width:467px) {
.details-list ul li > div {flex-direction:column;}
} */
</style>
