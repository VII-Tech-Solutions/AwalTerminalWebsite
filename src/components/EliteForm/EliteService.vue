<template>
   <div class="aviation-form bg-white">
      <div class="container">
         <div class="form-header">
         </div>
         <div class="form-body">
            <div class="form-page-title">
               <div class="d-flex flex-md-row flex-column align-items-center justify-content-between">
                  <h3 class="form-h3 text-capitalize">Elite Service</h3>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-8 col-md-10">
                  <form @submit.prevent="paynow" class="general-form form-details">
                     <fieldset class="mb-3">
                        <legend class="form-title sub-title">Review & Submit</legend>
                        <p class="fw-semi-bold form-p mb-lg-3 mb-2">Here is an overview of all the details you
                           have submitted</p>
                     </fieldset>
                     <div class="accordion detail-section pb-lg-4 pb-3" id="accordionExample">
                        <div class="accordion-item">
                           <div class="detail-section-header w-100">
                              <p class="-capitalize detail-section-title accordion-header" id="headingOne">
                                 <button class="accordion-button text-capitalize detail-section-title" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Your Service
                                 </button>
                              </p>
                           </div>
                           <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body elite-form">
                                 <div class="elite-offer-services d-flex flex-column">
                                    <div class="d-flex flex-column flex-md-row">
                                       <div v-if="elite_services.service_id == 1" class="elite-offer-service d-flex">
                                          <label class="custom-radio">
                                             <div class="checkmark">
                                                <strong class="service-name d-block mb-lg-3 mb-2">Common
                                                   Lounge</strong>
                                                <strong class="service-price d-block mb-3">BHD
                                                   100<sub>/adult</sub></strong>
                                                <ul class="list-unstyled service-features">
                                                   <li class="position-relative">50% of the adult rate
                                                      for children aged 2 to 12</li>
                                                   <li class="position-relative">Free entry for infants
                                                      ( 0 to 2 years old)</li>
                                                   <li class="position-relative">10% group discount (5
                                                      PAX and above)</li>
                                                </ul>
                                                <span class="tax-text">* 10% VAT on the total
                                                   amount</span>
                                             </div>
                                          </label>
                                       </div>
                                       <div  v-if="elite_services.service_id == 2" class="elite-offer-service">
                                          <label class="custom-radio">
                                             <div class="checkmark">
                                                <strong class="service-name d-block mb-lg-3 mb-2">Private
                                                   Lounge</strong>
                                                <strong class="service-price d-block mb-3">BHD
                                                   150<sub>/adult</sub></strong>
                                                <ul class="list-unstyled service-features">
                                                   <li class="position-relative">Minimum of 2 adults
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
                                                      passengers per lounge</li>
                                                </ul>
                                                <span class="tax-text">* 10% VAT on the total
                                                   amount</span>
                                             </div>
                                          </label>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="accordion-item">
                           <p class="text-capitalize detail-section-title accordion-header" id="headingTwo">
                              <button class="accordion-button text-capitalize detail-section-title" type="button"
                                 data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
                                 aria-controls="collapseTwo">
                                 Your Journey
                              </button>
                           </p>
                           <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                 <div class="accordian-ul">
                                    <ul class="ul_css">
                                       <li>
                                          <div class="d-flex mobile-col">
                                             <p class="extra-small-text w-p text-capitalize">Flight
                                                Details</p>
                                             <div class="details-list">
                                                <ul class="ul_css">
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            Flight Status<span class="asterik">*</span></p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{elite_services.Is_arrival_flight == 0?'Depature':'Arrival'}}</p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            Arriving From<span class="asterik">*</span></p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{elite_services.Date}} </p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            date<span class="asterik">*</span></p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{elite_services.date}} </p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            time<span class="asterik">*</span></p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{elite_services.time}}</p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            Flight number<span class="asterik">*</span></p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{elite_services.flight_number}} </p>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div class="d-flex mobile-col">
                                             <p class="extra-small-text w-p">No. of Passengers</p>
                                             <div class="details-list">
                                                <ul class="ul_css">
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            adults<span class="asterik">*</span></p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{elite_services.number_of_adults}} </p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            children<span class="asterik">*</span>
                                                         </p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{elite_services.number_of_children}} </p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            infants<span class="asterik">*</span>
                                                         </p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{elite_services.number_of_infants}}</p>
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
                           <p class="text-capitalize detail-section-title accordion-header" id="headingThree">
                              <button class="accordion-button text-capitalize detail-section-title" type="button"
                                 data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true"
                                 aria-controls="collapseThree">
                                 Passenger Details
                              </button>
                           </p>
                           <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                 <div class="accordian-ul">
                                    <ul class="ul_css">
                                       <!-- <li v-for="(passenger, index) in passengers" :key="passenger"> -->
                                       <li v-for="(passenger, index) in passengers" :key="passenger">
                                          <div class="d-flex mobile-col">
                                             <p class="extra-small-text w-p text-capitalize">Passenger {{index+1}}
                                             </p>
                                             <div class="details-list">
                                                <ul class="ul_css">
                                                  
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            First Name*<span class="asterik">*</span></p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{passenger.first_name}} </p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            Last Name<span class="asterik">*</span>
                                                         </p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{passenger.last_name}} </p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p">Date of
                                                            Birth<span class="asterik">*</span></p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{passenger.birth_date}}</p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            Nationality<span class="asterik">*</span></p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{passenger.nationality_id}}</p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="d-flex align-items-baseline">
                                                         <p class="extra-small-text w-p text-capitalize">
                                                            Class<span class="asterik">*</span></p>
                                                         <p class="extra-small-text text-capitalize fw-normal">
                                                            {{passenger.flight_class}}</p>
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
                           <p class="text-capitalize detail-section-title accordion-header" id="headingFour">
                              <button class="accordion-button text-capitalize detail-section-title" type="button"
                                 data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true"
                                 aria-controls="collapseFour">
                                 Booker’s Details
                              </button>
                           </p>
                           <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                 <div class="details-list">
                                    <ul class="ul_css">
                                       <li>
                                          <div class="d-flex align-items-baseline">
                                             <p class="extra-small-text w-p text-capitalize">first
                                                name<span class="asterik">*</span></p>
                                             <p class="extra-small-text text-capitalize fw-normal">{{booker.first_name}}
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <div class="d-flex align-items-baseline">
                                             <p class="extra-small-text w-p text-capitalize">last
                                                name<span class="asterik">*</span></p>
                                             <p class="extra-small-text text-capitalize fw-normal"> {{booker.last_name}} 
                                             </p>
                                          </div>
                                       </li>
                                       <li>
                                          <div class="d-flex align-items-baseline">
                                             <p class="extra-small-text w-p text-capitalize">email
                                                address<span class="asterik">*</span></p>
                                             <p class="extra-small-text fw-normal"> {{booker.email}}</p>
                                          </div>
                                       </li>
                                       <li>
                                          <div class="d-flex align-items-baseline">
                                             <p class="extra-small-text w-p text-capitalize">mobile
                                                number<span class="asterik">*</span></p>
                                             <p class="extra-small-text text-capitalize fw-normal">
                                               {{booker.mobile_number}} </p>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="payement-method">
                                <div class="payement-header">
                                    <p class="text-capitalize detail-section-title fw-semi-bold form-p accordion-header mb-md-3 mb-2">select Payment Method</p>
                                   <div class="details-list">
                                        <div class="row">
                                            <div class="col-md-5 mb-md-0 mb-2">
                                                <div class="credit-box">
                                                    <div class="form-check px-0">
                                                        <label class="radio-container text-capitalize">credit card 
                                                            <input type="radio"  value="1" @change="isCredit"   v-model="is_credit"   name="radio"><span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <figure class="mb-0">
                                                        <img class="img-fluid" src="../../assets/images/icons/credit-card.svg"/>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div class="col-md-5 mb-md-0 mb-2">
                                                <div class="credit-box">
                                                    <div class="form-check px-0">
                                                        <label class="radio-container text-capitalize">debit card 
                                                            <input type="radio" value="2" @change="isCredit"   v-model="is_credit"   name="radio"><span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <figure class="mb-0">
                                                        <img class="img-fluid" src="../../assets/images/icons/debit-card.svg"/>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="amount-box">
                                    <div class="amount-header">
                                        <ul class="ul_css">
                                            <li>
                                                <div class="d-flex justify-content-between">
                                                    <p class="extra-small-text text-capitalize fw-normal">total</p>
                                                    <p class="extra-small-text text-capitalize fw-normal">BHD {{elite_services.total}}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex justify-content-between">
                                                    <p class="extra-small-text text-capitalize fw-normal">VAT (10%)</p>
                                                    <p class="extra-small-text text-capitalize fw-normal">BHD 27.050</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="amount-footer">
                                        <div class="d-flex justify-content-between">
                                                <p class="text-capitalize">Total Amount Due:</p>
                                                <p class="text-capitalize"> BHD {{elite_services.total}}</p>
                                        </div>
                                    </div>
                                </div>
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
                  <router-link to="" class="cancel-link d-inline-block text-decoration-none">Back
                  </router-link>
               </div>
               <div class="d-flex align-items-center">
                  <p class="fw-semi-bold form-p mb-0 me-lg-3 me-2 sans">Total Amount:<span>BHD {{elite_services.total}}</span></p>
                  <div class="d-block">
                       <a :href="paymentlink" class="btn-next d-inline-block align-top transition text-capitalize">
                  pay now</a>
                    
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>  

<script>
import '@fortawesome/fontawesome-free/js/all.js';
import axios from 'axios';
export default {
   mounted() {
      debugger;
      window.scrollTo(0, 0);
      this.getDropdownData();
   },
   data() {
         debugger;
      return {
         elite_services:'',
         passengers:'',
         booker:'',
         is_credit:1,
         paymentlink :this.paymentlink + '?payment_method='+this.is_credit
      
      }
   },
   methods: {
      getDropdownData()
			{
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    }
                };
                axios.get('https://awal.viitech.net/api/elite-service/' + this.$route.query.uuid, axiosConfig)
                .then((res) => {
                    debugger;
                    this.elite_services = res.data.data.elite_services.length>0? res.data.data.elite_services[0]:res.data.data.elite_services;
                    this.passengers = res.data.data.passengers;
                    this.booker = res.data.data.booker[0];
                    this.paymentlink = res.data.data.elite_services[0].payment_link + '?payment_method='+this.is_credit ;
                })
                .catch((err) => {
                    toastr.error('Server Error Please Try again.. 🙁');
                })
			},
         isCredit()
         {
            debugger;
            this.paymentlink = this.paymentlink.split("?payment_method")[0] + '?payment_method='+this.is_credit

         },
   }
}
</script>
<style>
/*  */
.sans {
   font-family: 'Source Sans Pro';
}

.payement-header .form-p {
   font-family: "Lora";
}

/* .x-line{border-bottom:1px solid #011e41; margin-bottom: 20px;} */
.payement-method {
   margin-bottom: 80px;
}

.payement-header {
   padding: 20px;
   border-bottom: 1px solid #011e41;
   margin-bottom: 20px;
}

.amount-box {
   padding: 20px 20px 0px 20px;
   background-color: #f3f3f3;
}

.amount-box .amount-header {
   border-bottom: 1px solid #979797;
}

.amount-box .amount-header ul li {
   margin-bottom: 13px;
}

.amount-box .amount-footer {
   padding: 20px 0px;
}

.amount-box .amount-footer p {
   font-size: 18px;
   line-height: 27px;
   font-weight: 600;
   color: #011e41
}

.credit-box {
   border: 1px solid #011e41;
   display: flex;
   align-items: baseline;
   justify-content: space-between;
   padding: 15px;
   height: 60px;
}

.detail-section {
   padding-bottom: 50px;
}

.accordian-ul>ul>li:not(:last-child) {
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

.elite-form .custom-radio input:checked~.checkmark {
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

.elite-form .custom-radio input:checked~.checkmark .radio-circle span:after {
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
   font-family: 'Source Sans Pro';
   color: #caa17b;
}

.elite-offer-services .service-price sub {
   font-size: 12px;
   line-height: 15px;
   font-weight: normal;
}

.elite-offer-services .service-features {
   font-size: 14px;
   line-height: 17px;
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

@media (max-width:567px) {
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

   .credit-box {
      height: 50px;
      padding: 8px;
   }
}

@media (max-width:467px) {
   .mobile-col {
      flex-direction: column;
   }
}
</style>
