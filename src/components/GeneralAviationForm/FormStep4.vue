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
                        <p class="form-p lora-semi m-0">Step <span>4</span> of <span>6</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-10">
                        <form class="general-form">
                            <fieldset>
                                <legend class="form-title sub-title">Required Services</legend>
                                <p class="form-p fw-semi-bold mb-lg-3 mb-2">Select all the services that you require upon arrival/departure</p>
                                <div class="form-service-check">
                                    <ul class="ul_css">
                                        <li>
                                            <label class="checked-container">Landing Permit
                                                <input type="checkbox" value="Landing Permit"  v-model="checkedNames" >
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">fuel
                                                <input type="checkbox" value="fuel"  v-model="checkedNames" >
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">catering 
                                                <input type="checkbox" value="catering"  v-model="checkedNames"  >
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">passenger limo services 
                                                <input type="checkbox" value="passenger limo services"  v-model="checkedNames" >
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">hotel reservation 
                                                <input type="checkbox" value="hotel reservation"  v-model="checkedNames" >
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container mb-3 text-inherit">Crew Transport (to and from)
                                                <input type="checkbox" value="Crew Transport (to and from)"  v-model="checkedNames" 
                                                >
                                                <span class="checkmark"></span>
                                            </label>
                                            <div class="d-flex align-items-center ms-4">
                                                <div class="form-group mb-0 w-100">
                                                    <input type="text" v-model="transport_hotel_name" class="form-control" placeholder="Enter hotel name" />
                                                </div>
                                                <div class="form-border ms-1">
                                                    <input type="time" v-model="transport_time"  class="form-control border-0" placeholder="HH:MM">
                                                    <span class="input-icon">
                                                        <img src="../../assets/images/icons/schedule.svg" alt="couch" class=" img-fluid"/>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <label class="checked-container">Toilet Service
                                                <input type="checkbox" value="Toilet Service"  v-model="checkedNames" >
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">Water Service
                                                <input type="checkbox" value="Water Service"  v-model="checkedNames" >
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">Air Conditioning Unit (ACU) 
                                                <input type="checkbox" value="Air Conditioning Unit (ACU)"  v-model="checkedNames" >
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">Air Start Unit (ASU) 
                                                <input type="checkbox" value="Air Start Unit (ASU)"  v-model="checkedNames" >
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">Ground Power Unit (GPU)
                                                <input type="checkbox" value="Ground Power Unit (GPU)"  v-model="checkedNames" >
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
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
                        <router-link to="/general-aviation-form3" class="light-button d-inline-block">back</router-link>
                    </div>
                    <div class="d-block">
                        <router-link to="/general-aviation-form5"  @click="setData()"  class="beige-button d-inline-block">Next</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>  

<script>
import '@fortawesome/fontawesome-free/js/all.js';
    export default{
    mounted () {
     window.scrollTo(0, 0)
    },
    data() {
        debugger;
          var obj= JSON.parse(localStorage.data);
        return {
         notFormValid: true,
         checkedNames:obj.services == ""?[]:obj.services,
         transport_hotel_name:obj.transport_hotel_name,
         transport_time:obj.transport_time,
     }
    },
      methods:{
       setData()
      {
          debugger;
            var obj= localStorage.data != undefined ?  JSON.parse(localStorage.data):undefined;
     
            var obj1 = {};
            obj1.aircraft_type =  obj.aircraft_type;
            obj1.registration_number =  obj.registration_number;
            obj1.mtow =  obj.mtow;
            obj1.lead_passenger_name =  obj.lead_passenger_name;   
            obj1.landing_purpose = obj.landing_purpose;

            obj1.arrival_call_sign=obj.arrival_call_sign;    
            obj1.arriving_from_airport=obj.arriving_from_airport,    
            obj1.estimated_time_of_arrival=obj.estimated_time_of_arrival,  
            obj1.arrival_date=obj.arrival_date,   
            obj1.arrival_flight_nature=obj.arrival_flight_nature,  
            obj1.arrival_passenger_count=obj.arrival_passenger_count,    
            obj1.departure_call_sign=obj.departure_call_sign,
            obj1.departure_to_airport=obj.departure_to_airport,    
            obj1.estimated_time_of_departure=obj.estimated_time_of_departure
            obj1.departure_date=obj.departure_date,   
            obj1.departure_flight_nature=obj.departure_flight_nature,    
            obj1.departure_passenger_count=obj.departure_passenger_count,  

            obj1.operator_full_name=obj.operator_full_name,    
            obj1.operator_country=obj.operator_country,   
            obj1.operator_tel_number=  obj.operator_tel_number,    
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
            obj1.services=this.checkedNames, 
            obj1.attachments=obj.attachments,
            obj1.transport_hotel_name=this.transport_hotel_name,  
            obj1.transport_time=this.transport_time,  
            obj1.remarks=obj.remarks
             localStorage.setItem('data', JSON.stringify(obj1));
      }
  }

}
</script>
<style>
.form-service-check ul li:not(:last-child){margin-bottom:20px;}
.checked-container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 14px;
  line-height:16px;
  text-transform:capitalize;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checked-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checked-container .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius:3.2px;
  border:1px solid #011e41;
  bottom:0;
  margin:auto;
}
.checked-container:hover input ~ .checkmark {
  background-color: #fff;
  border:1px solid #011e41
}
.checked-container input:checked ~ .checkmark {
  background-color: #011e41;
}
.checked-container .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checked-container input:checked ~ .checkmark:after {
  display: block;
}
.checked-container .checkmark:after {
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  top: 0;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
input[type="time"]::-webkit-inner-spin-button,
input[type="time"]::-webkit-calendar-picker-indicator {
    height: 100%;
    width: 30%;
    opacity: 0;
    margin-right: 50px;
    margin-left: -20px;
    z-index: 999999;
    position: absolute;
}
</style>
