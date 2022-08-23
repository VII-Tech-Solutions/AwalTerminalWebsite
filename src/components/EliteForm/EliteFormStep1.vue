<template>
  <section class="elite-form pt-0 bg-wgite">
    <div class="container">
      <div class="form-header">
        <strong class="elit-form-logo d-block">
          <router-link to="/" class="d-block form-logo">
            <img
              class="w-100 img-fluid"
              src="../../assets/images/forms-header-logo.png"
              alt="AWAL Logo"
            />
          </router-link>
        </strong>
      </div>
      <div class="step-one-block">
        <div
          class="
            d-flex
            flex-md-row flex-column
            align-items-center
            justify-content-between
          "
        >
          <h2 class="form-h3 text-capitalize">Elite Service</h2>
          <span class="step-number lora-semi">Step 1 of 5</span>
        </div>
        <div class="row">
          <div class="col-md-7">
            <div class="step-text-block mb-3">
              <p class="fw-semi-bold">
                To reserve and book an elite service, please fill in the
                following form.
                <span class="fw-normal"
                  >If <br />you would like to book a general aviation service,
                  please
                  <router-link class="click-link" to="/general-aviation-form1"
                    >click here.</router-link
                  ></span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="elite-offer-services d-flex flex-column">
          <h3 class="mb-3 form-title">Choose Your Service</h3>
          <div class="d-flex flex-column flex-md-row">
            <div class="elite-offer-service d-flex">
              <label class="custom-radio">
                <input
                  type="radio"
                  v-model="service_id"
                  value="1"
                  name="radio"
                />
                <div class="checkmark">
                  <div class="radio-circle mb-4">
                    <span class="cirle position-relative">&nbsp;</span>
                  </div>
                  <strong class="service-name d-block mb-lg-3 mb-2">{{
                    eliteserviceoptions != undefined
                      ? eliteserviceoptions[0].name
                      : ""
                  }}</strong>
                  <strong class="service-price d-block mb-3"
                    >{{
                      eliteserviceoptions != undefined
                        ? eliteserviceoptions[0].price_per_adult
                        : ""
                    }}<sub>/adult</sub></strong
                  >
                  <ul class="list-unstyled service-features">
                    <li
                      class="position-relative"
                      v-for="item in commontype"
                      :key="item.id"
                    >
                      {{ item.feature_details }}
                    </li>
                    <!-- 50% of the adult rate for children aged 2 to 12
										<li class="position-relative">Free entry for infants ( 0 to 2 years old)</li>
										<li class="position-relative">10% group discount (5 PAX and above)</li> -->
                  </ul>
                  <span class="tax-text">* 10% VAT on the total amount</span>
                </div>
              </label>
            </div>
            <div class="elite-offer-service">
              <label class="custom-radio">
                <input
                  type="radio"
                  v-model="service_id"
                  value="2"
                  name="radio"
                />
                <div class="checkmark">
                  <div class="radio-circle mb-4">
                    <span class="cirle position-relative">&nbsp;</span>
                  </div>
                  <strong class="service-name d-block mb-lg-3 mb-2">{{
                    eliteserviceoptions != undefined
                      ? eliteserviceoptions[1].name
                      : ""
                  }}</strong>
                  <strong class="service-price d-block mb-3"
                    >{{
                      eliteserviceoptions != undefined
                        ? eliteserviceoptions[1].price_per_adult
                        : ""
                    }}<sub>/adult</sub></strong
                  >
                  <ul class="list-unstyled service-features">
                    <li
                      class="position-relative"
                      v-for="item in privatetype"
                      :key="item.id"
                    >
                      {{ item.feature_details }}
                    </li>
                    <!-- Minimum of 2 adults full fares required to access a Private
											Lounge
										<li class="position-relative">50% of the adult rate for children aged 2 to 12</li>
										<li class="position-relative">Free entry for infants ( 0 to 2 years old)</li>
										<li class="position-relative">Rates are per passenger capped at a total BHD 600.000 per
											lounge</li>
										<li class="position-relative">Rates apply to standard lounge size with a maximum of 6
											passengers per lounge</li> -->
                  </ul>
                  <span class="tax-text">* 10% VAT on the total amount</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="elite-forrm-footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6">
            <router-link
              to="/elite-services"
              class="cancel-link d-inline-block text-decoration-none"
              >Cancel</router-link
            >
          </div>
          <div class="col-6 text-end">
            <router-link
              to="/elite-form2"
              @click="setData()"
              class="btn-next d-inline-block align-top transition"
              >Next</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EliteFormFooter from './EliteFormFooter.vue';
import axios from 'axios';
	export default {
    mounted () {
     window.scrollTo(0, 0);
    this.getDropdownData();
    },
		components: {
			EliteFormFooter
		},
		data (){
			//debugger;
			   var obj= localStorage.elitedata != undefined ?  JSON.parse(localStorage.elitedata):undefined;
			return {
			   airportoptions:this.airportoptions,
				countriesoptions:this.countriesoptions,
				servicefeatureoptions:this.servicefeatureoptions,
				eliteserviceoptions:this.eliteserviceoptions,
				commontype:this.commontype,
				privatetype:this.privatetype,
				service_id: obj == undefined ? 1 : obj.service_id,
				number_of_adults:obj==undefined ?0:obj.number_of_adults,
				number_of_children:obj==undefined ?0:obj.number_of_children,
				number_of_infants:obj==undefined ?0:obj.number_of_infants,
				Totle: obj==undefined ?0:obj.total,
				countriesoptions: obj==undefined ?'':obj.countriesoptions,
				notFormValid: true,
				airport_id: obj==undefined ?0:obj.airport_id,
				airport_name:obj==undefined ?0:obj.airport_name,
				date: obj==undefined ?0:obj.date,
				time: obj==undefined ?0:obj.time,
				flight_number: obj==undefined ?'':obj.flight_number,
				xyz:this.xyz,
				is_arrival_flight: obj==undefined ?false:obj.is_arrival_flight,
				// passengers info
				passengers: obj==undefined ?'':obj.passengers,
				//booker Info
				booker: {
					first_name: obj==undefined ?'':obj.booker.first_name,
					last_name: obj==undefined ?'':obj.booker.last_name,
					mobile_number: obj==undefined ?'':obj.booker.mobile_number,
					comments: obj==undefined ?'':obj.booker.comments,
					//optional pram
					email: obj==undefined ?'':obj.booker.email
				}
					
		   }
		},
		methods :{
			setData(){
           var obj = {};
            obj.service_id=  this.service_id ;
            obj.number_of_adults = parseInt(this.number_of_adults == null ? 0 : this.number_of_adults);
            obj.number_of_children = parseInt(this.number_of_children == null ? 0 : this.number_of_children );
            obj.number_of_infants = parseInt(this.number_of_infants == null ? 0 : this.number_of_infants);
            obj.total = parseInt(parseInt(this.number_of_adults) + parseInt(this.number_of_children) + parseInt(this.number_of_infants));
			   obj.countriesoptions=this.countriesoptions;
            obj.airport_id =  this.airport_id;
			   obj.airport_name = this.airport_name;
            obj.date =  this.date;
            obj.time =  this.time;
            obj.flight_number =  this.flight_number;
            obj.is_arrival_flight = this.is_arrival_flight;
            obj.passengers = this.passengers;
            obj.booker = this.booker;
			   obj.airportoptions = this.airportoptions;
				obj.eliteserviceoptions= this.eliteserviceoptions;
				obj.xyz = this.xyz;
				obj.commontype = this.commontype;
				obj.privatetype = this.privatetype;

            localStorage.setItem('elitedata', JSON.stringify(obj));

			},
			getDropdownData()
			{
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    }
                };
             axios.get('https://awal.viitech.net/api/metadata', axiosConfig)
                .then((res) => {
                     var obj= localStorage.elitedata != undefined ?  JSON.parse(localStorage.elitedata):undefined;

                    this.airportoptions = res.data.data.airports;
                    this.countriesoptions = res.data.data.countries;
                    this.eliteserviceoptions = res.data.data.elite_service_types;
                    this.servicefeatureoptions = res.data.data.elite_service_features;
						  this.xyz = res.data.data.elite_service_types;
					this.commontype = this.servicefeatureoptions.filter(element => element.service_id == this.eliteserviceoptions[0].id);
					this.privatetype = this.servicefeatureoptions.filter(element => element.service_id == this.eliteserviceoptions[1].id);
                    this.service_id = obj == undefined ? this.eliteserviceoptions[0].id: obj.service_id;  

					localStorage.setItem('airportoptions1', JSON.stringify(res.data.data.airports));

			   })
                .catch((err) => {
                    toastr.error('Server Error Please Try again.. 🙁');
                })
			},
		}
	};
</script>
<style>
.elite-form {
  padding: 60px 0 100px;
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
.step-one-block {
  margin-bottom: 40px;
}
@media only screen and (max-width: 767px) {
  .elite-form .step-heading {
    font-size: 40px;
    line-height: 44px;
  }
}
@media only screen and (max-width: 767px) {
  .elite-form {
    padding: 30px 0 65px;
  }
  .elite-form .elit-form-logo {
    width: 80px;
  }
  .elite-form .logo-holder {
    margin: 0 0 30px;
  }
  .elite-form .step-heading {
    font-size: 30px;
    line-height: 34px;
  }
  .elite-form h3 {
    font-size: 18px;
    line-height: 22px;
  }
  .elite-offer-services .elite-offer-service {
    width: 100%;
    margin: 0 0 20px;
  }
  .elite-offer-services .service-name {
    font-size: 24px;
    line-height: 27px;
  }
  .elite-forrm-footer {
    padding: 15px 0;
  }
}
@media only screen and (max-width: 575px) {
  .elite-form .elit-form-logo {
    width: 60px;
  }
  .elite-form .logo-holder {
    margin: 0 0 20px;
  }
  .elite-form .step-text-block p {
    font-size: 16px;
    line-height: 22px;
  }
  .elite-form .custom-radio .checkmark {
    padding: 15px;
  }
}
@media only screen and (max-width: 479px) {
  .elite-form .step-heading {
    font-size: 26px;
    line-height: 30px;
  }
}
</style>