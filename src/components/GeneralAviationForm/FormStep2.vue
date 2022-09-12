<template>
  <div class="aviation-form bg-white">
    <div class="container">
      <div class="form-header">
        <router-link  to="/">
          <figure class="mb-0 form-logo">
            <img class="img-fluid" src="../../assets/images/forms-header-logo.png"/>
          </figure>
        </router-link>
      </div>
      <div class="form-body">
        <div class="form-page-title">
          <div class="d-flex flex-md-row flex-column align-items-center justify-content-between">
            <h3 class="form-h3 text-capitalize">General Aviation</h3>
            <p class="form-p lora-semi m-0 ">Step <span>2</span> of <span>6</span></p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-10">
            <form class="general-form">
              <fieldset>
                <legend class="form-title sub-title">Journey Information</legend>
                <p class="form-title mb-2">Arrival</p>
                <div class="row">
                  <div class="col-lg-6 mb-0">
                    <div class="form-group">
                      <label class="form-label text-capitalize">Call Sign<span class="asterik">*</span></label>
                      <input type="text" v-model="arrival_call_sign"  class="form-control" placeholder="Call Sign">
                    </div>
                    <div class="form-group">
                      <label class="form-label">ETA (UTC Time)<span class="asterik">*</span></label>
                      <div class="form-border">
                        <input type="time" onkeydown="return false" v-model="estimated_time_of_arrival" class="form-control border-0" placeholder="HH:MM">
                        <span class="input-icon">
                                                    <img src="../../assets/images/icons/schedule.svg" alt="couch" class=" img-fluid"/>
                                                </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Nature of Flight<span class="asterik">*</span></label>
                      <input type="text" v-model="arrival_flight_nature" class="form-control" placeholder="Nature of Flight">
                    </div>
                  </div>
                  <div class="col-lg-6 mb-0">
                    <div class="form-group">
                      <label class="form-label text-capitalize" for="inputGroupSelect01">From Airport<span class="asterik">*</span></label>
                      <v-select placeholder="Select an airport" :class="{'azul':!color}" :options="airportoptions"  required label="name" id="inputGroupSelect01" v-model="arriving_from_airport" :value="airport_name" ></v-select>
                    </div>
                    <div class="form-group">
                      <label class="form-label text-capitalize">arrival date<span class="asterik">*</span></label>
                      <div class="form-border">
                        <input type="date" onkeydown="return false" v-model="arrival_date" class="form-control border-0" placeholder="DD/MM/YYYY">
                        <div class="d-flex align-items-center"><span class="input-icon">
                                                    <img src="../../assets/images/icons/date-range.svg" alt="couch" class=" img-fluid"/>
                                                </span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Passenger Count<span class="asterik">*</span></label>
                                            <input type="text" v-model="arrival_passenger_count" class="form-control" min="1" placeholder="Passenger Count">
                                        </div> 
                                    </div> 
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend class="form-title">departure</legend>
                                <div class="row">
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Call Sign<span class="asterik">*</span></label>
                                            <input type="text" v-model="departure_call_sign" class="form-control" placeholder="Call Sign">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label">ETA (UTC Time)<span class="asterik">*</span></label>
                                            <div class="form-border"><input type="time" onkeydown="return false" v-model="estimated_time_of_departure" class="form-control border-0" placeholder="HH:MM"><span class="input-icon">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label text-capitalize">Passenger Count<span class="asterik">*</span></label>
                      <input type="number" v-model="arrival_passenger_count" class="form-control" min="1" placeholder="Passenger Count">
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend class="form-title">departure</legend>
                <div class="row">
                  <div class="col-lg-6 mb-0">
                    <div class="form-group">
                      <label class="form-label text-capitalize">Call Sign<span class="asterik">*</span></label>
                      <input type="text" v-model="departure_call_sign" class="form-control" placeholder="Call Sign">
                    </div>
                    <div class="form-group">
                      <label class="form-label">ETA (UTC Time)<span class="asterik">*</span></label>
                      <div class="form-border"><input type="time" onkeydown="return false" v-model="estimated_time_of_departure" class="form-control border-0" placeholder="HH:MM"><span class="input-icon">
                                                    <img src="../../assets/images/icons/schedule.svg" alt="couch" class=" img-fluid"/>
                                                </span></div>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Nature of Flight<span class="asterik">*</span></label>
                      <input type="text" v-model="departure_flight_nature" class="form-control" placeholder="Nature of Flight">
                    </div>
                  </div>
                  <div class="col-lg-6 mb-0">
                    <div class="form-group">
                      <label class="form-label text-capitalize" for="inputGroupSelect01">to Airport<span class="asterik">*</span></label>
                      <v-select  placeholder="Select an airport" :class="{'azul':!color}" :options="airportoptions"  required label="name" id="inputGroupSelect01" v-model="departure_to_airport" :value="airport_name" ></v-select>
                    </div>
                    <div class="form-group">
                      <label class="form-label text-capitalize">departure date<span class="asterik">*</span></label>
                      <div class="form-border">
                        <input type="date" v-model="departure_date" class="form-control border-0" placeholder="DD/MM/YYYY">
                        <div class="d-flex align-items-center">
                                                    <span class="input-icon">
                                                        <img src="../../assets/images/icons/date-range.svg" alt="couch" class=" img-fluid"/>
                                                    </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label text-capitalize">Passenger Count<span class="asterik">*</span></label>
                      <input type="number" v-model="departure_passenger_count" class="form-control" min="1" placeholder="Passenger Count">
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <div class="form-footer">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-block">
            <router-link to="/general-aviation-form1" class="light-button d-inline-block">back</router-link>
          </div>
          <div class="d-block">
                      <span class="beige-button d-inline-block" v-if="!(arrival_call_sign && arriving_from_airport && estimated_time_of_arrival
                       && arrival_date && arrival_flight_nature && arrival_passenger_count
                       && departure_call_sign && departure_to_airport && estimated_time_of_departure
                       && departure_date && departure_flight_nature && departure_passenger_count

                       )" :disabled="notFormValid" @click="error()">
                            Next
                        </span>
            <span v-if="arrival_call_sign && arriving_from_airport && estimated_time_of_arrival
                        && arrival_date && arrival_flight_nature && arrival_passenger_count
                        && departure_call_sign && departure_to_airport && estimated_time_of_departure
                        && departure_date && departure_flight_nature && departure_passenger_count
                        ">
                         <router-link to="/general-aviation-form3" @click="setData()"  class="beige-button d-inline-block">Next</router-link>
                         </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import '@fortawesome/fontawesome-free/js/all.js';
import axios from 'axios';
import vSelect from "vue-select";
export default{
  components:{
    vSelect
  },
  mounted () {
    window.scrollTo(0, 0);
    this.getDropdownData();
  },
  data() {
    var obj= JSON.parse(localStorage.data);
    return {
      airportoptions:obj.airportoptions,
      countriesoptions:obj.countriesoptions,
      formserviceoption :obj.formserviceoption,
      airport_name: obj.airport_name,
      notFormValid: true,
      arrival_call_sign:obj.arrival_call_sign,

      arriving_from_airport:obj.arriving_from_airport,

      estimated_time_of_arrival:obj.estimated_time_of_arrival,
      arrival_date:obj.arrival_date,
      arrival_flight_nature:obj.arrival_flight_nature,
      arrival_passenger_count:obj.arrival_passenger_count,

      departure_call_sign:obj.departure_call_sign,
      departure_to_airport:obj.departure_to_airport,
      estimated_time_of_departure:obj.estimated_time_of_departure,
      departure_date:obj.departure_date,
      departure_flight_nature:obj.departure_flight_nature,
      departure_passenger_count:obj.departure_passenger_count,
    }
  },
  methods:{
    getDropdownData()
    {
      //debugger;
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        }
      };
      axios.get('https://awal.viitech.net/api/metadata', axiosConfig)
          .then((res) => {
            // debugger;
            this.airportoptions = res.data.data.airports;
            this.countriesoptions = res.data.data.countries;
            this.formserviceoption = res.data.data.form_services;

          })
          .catch((err) => {
            toastr.error('Server Error Please Try again.. 🙁');
          })
    },

    select_airport(event){
      this.airport_name=this.airportoptions.find(x=> x.id == event.target.value).name;
    },
    error(){
      toastr.error('Kindly fillout required fields 🙁');
    },
    setData()
    {
      var obj= localStorage.data != undefined ?  JSON.parse(localStorage.data):undefined;

      var obj1 = {};
      obj1.aircraft_type =  obj.aircraft_type;
      obj1.registration_number =  obj.registration_number;
      obj1.mtow =  obj.mtow;
      obj1.lead_passenger_name =  obj.lead_passenger_name;
      obj1.landing_purpose = obj.landing_purpose;
      obj1.arrival_call_sign=this.arrival_call_sign;
      if (this.arriving_from_airport.name != undefined )
      {
        this.arriving_from_airport = this.arriving_from_airport.name;
        obj1.arriving_from_airport =  this.arriving_from_airport;
      }
      else
      {
        obj1.arriving_from_airport =  this.arriving_from_airport;
      }
      obj1.estimated_time_of_arrival=this.estimated_time_of_arrival,
          obj1.arrival_date=this.arrival_date,
          obj1.arrival_flight_nature=this.arrival_flight_nature,
          obj1.arrival_passenger_count=this.arrival_passenger_count,
          obj1.departure_call_sign=this.departure_call_sign
      if (this.departure_to_airport.name != undefined )
      {
        this.departure_to_airport = this.departure_to_airport.name;
        obj1.departure_to_airport =  this.departure_to_airport;
      }
      else
      {
        obj1.departure_to_airport =  this.departure_to_airport;
      }
      obj1.estimated_time_of_departure=this.estimated_time_of_departure,
          obj1.departure_date=this.departure_date,
          obj1.departure_flight_nature=this.departure_flight_nature,
          obj1.departure_passenger_count=this.departure_passenger_count,

          obj1.operator_full_name=obj.operator_full_name,
          obj1.operator_country=obj.operator_country,
          obj1.teldrop=  obj.teldrop;
      obj1.operator_tel_number=obj.operator_tel_number,
          obj1.operator_email=obj.operator_email,
          obj1.operator_address=obj.operator_address,
          obj1.operator_billing_address=obj.operator_billing_address,
          obj1.agent_fullname=obj.agent_fullname,
          obj1.agent_country=obj.agent_country,
          obj1.agent_phoneNumber=obj.agent_phoneNumber,
          obj1.agent_email=obj.agent_email,
          obj1.agent_address=obj.agent_address,
          obj1.agent_billing_address=obj.agent_billing_address,
          obj1.is_using_agent=obj.is_using_agent,
          obj1.services=obj.services,
          obj1.attachments=obj.attachments,
          obj1.transport_hotel_name=obj.transport_hotel_name,
          obj1.transport_time=obj.transport_time,
          obj1.remarks=obj.remarks
      obj1.airportoptions=this.airportoptions;
      obj1.countriesoptions=this.countriesoptions;
      obj1.formserviceoption=this.formserviceoption;
      obj1.airport_name = this.airport_name;
      localStorage.setItem('data', JSON.stringify(obj1));
    }
  }

}




</script>
<style>

input[type="time"]::-webkit-inner-spin-button,
input[type="time"]::-webkit-calendar-picker-indicator {
  height: 20%;
  width: 20%;
  opacity: 0;
  margin-right: 50px;
  margin-left: -20px;
  z-index: 999999;
  position: absolute;
}




</style>
