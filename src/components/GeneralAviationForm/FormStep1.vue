<template>
<form>
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
                        <p class="form-p lora-semi m-0">Step <span>1</span> of <span>6</span></p>
                    </div>
                    <p class="form-p custom-w"><strong>To reserve and book a general aviation service, please fill in the following form.</strong> If you would like to book an elite service, please <a class="text--btn" href="#">click here.</a></p>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-10">
                        <form class="general-form pt-0">
                            <fieldset>
                                <legend class="form-title">Flight Information</legend>
                                <div class="row">
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Aircraft Type<span class="asterik">*</span></label>
                                            <input required type="text" class="form-control" v-model="aircraft_type" placeholder="Enter aircraft type">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label text-uppercase">mtow (kg) <span class="asterik">*</span></label>
                                            <input type="text" v-model="mtow" class="form-control" placeholder="Enter MTOW in KG">
                                        </div>  
                                        <div  class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">purpose of landing <span class="asterik">*</span></label>
                                            <select class="form-select" v-model="landing_purpose" id="inputGroupSelect01">
                                                <option value="Other">Other</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div> 
                                    </div>
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">registration<span class="asterik">*</span></label>
                                            <input type="number" v-model="registration_number" class="form-control" placeholder="Registration number">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label text-capitalize"> lead passenger name<span class="asterik">*</span></label>
                                            <input type="text" v-model="lead_passenger_name" class="form-control" placeholder="Lead Passenger Name">
                                        </div>  
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1" class="form-label fw-normal"> Please specify the reason for your landing</label>
                                        <textarea class="form-control" v-model="name" placeholder="Explain the reason for landing" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                        <a class="light-button d-inline-block">cancel</a>
                    </div>
                    <div class="d-block">
                        <span v-if="!(aircraft_type && registration_number && mtow && lead_passenger_name && landing_purpose)">
                            <button :disabled="notFormValid" >Next</button>
                        </span>
                        <span v-if="aircraft_type && registration_number && mtow && lead_passenger_name && landing_purpose">
                         <router-link to="/general-aviation-form2" @click="setData()"  class="beige-button d-inline-block">next</router-link>
                         </span>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    </div>  
       
</form>
</template> 
<script>
export default {
   mounted () {
  window.scrollTo(0, 0)
},
  data() {
        var obj= localStorage.data != undefined ?  JSON.parse(localStorage.data):undefined;
       return {
         notFormValid: true,
         aircraft_type:obj==undefined ?'':obj.aircraft_type,  
         registration_number:obj==undefined ? '':obj.registration_number,    
         mtow:obj==undefined ?'':obj.mtow,    
         lead_passenger_name:obj==undefined ?'':obj.lead_passenger_name,   
         landing_purpose:obj==undefined ?'Other':obj.landing_purpose,    
     }
        
    },
  methods:{
      setData()
      {
          debugger;
            var today = new Date();
            var date =  (today.getFullYear()+'-'+((today.getMonth()+1)<10?'0'+ (today.getMonth()+1):(today.getMonth()+1))+'-'+today.getDate()).toString();
            var time = ((today.getHours()<10?'0'+ today.getHours():today.getHours()) + ":" + (today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())).toString();
            var obj= localStorage.data != undefined ?  JSON.parse(localStorage.data):undefined;
            var obj1 = {};
            obj1.aircraft_type =  this.aircraft_type;
            obj1.registration_number =  this.registration_number;
            obj1.mtow =  this.mtow;
            obj1.lead_passenger_name =  this.lead_passenger_name;   
            obj1.landing_purpose = this.landing_purpose;
            obj1.arrival_call_sign=obj==undefined ?'':obj.arrival_call_sign;    
            obj1.arriving_from_airport=obj==undefined ?'1':obj.arriving_from_airport,    
            obj1.estimated_time_of_arrival=obj==undefined ?time:obj.estimated_time_of_arrival,  
            obj1.arrival_date=obj==undefined ?date:obj.arrival_date,   
            obj1.arrival_flight_nature=obj==undefined ?'':obj.arrival_flight_nature,  
            obj1.arrival_passenger_count=obj==undefined ?1:obj.arrival_passenger_count,    
            obj1.departure_call_sign=obj==undefined ?'':obj.departure_call_sign,
            obj1.departure_to_airport=obj==undefined ?'1':obj.departure_to_airport,    
            obj1.estimated_time_of_departure=obj==undefined ?time:obj.estimated_time_of_departure,
            obj1.departure_date=obj==undefined ?date:obj.departure_date,   
            obj1.departure_flight_nature=obj==undefined ?'':obj.departure_flight_nature,    
            obj1.departure_passenger_count=obj==undefined ?'1':obj.departure_passenger_count,  
            obj1.operator_full_name=obj==undefined ?'':obj.operator_full_name,    
            obj1.operator_country=obj==undefined ?'1':obj.operator_country,   
            obj1.operator_tel_number=obj==undefined ?'':obj.operator_tel_number,    
            obj1.operator_email=obj==undefined ?'':obj.operator_email,   
            obj1.operator_address=obj==undefined ?'':obj.operator_address,    
            obj1.operator_billing_address=obj==undefined ?'':obj.operator_billing_address,
            obj1.agent_fullname=obj==undefined ?'':obj.agent_fullname,   
            obj1.agent_country=obj==undefined ?'1':obj.agent_country,    
            obj1.agent_phoneNumber=obj==undefined ?'':obj.agent_phoneNumber,    
            obj1.agent_email=obj==undefined ?'':obj.agent_email,   
            obj1.agent_address=obj==undefined ?'':obj.agent_address,    
            obj1.agent_billing_address=obj==undefined ?'':obj.agent_billing_address,    
            obj1.is_using_agent=obj==undefined ?false:obj.agent_billing_address,
            obj1.services=obj==undefined ?"":obj.services, 
            obj1.attachments=obj==undefined ?[]:obj.attachments,
            obj1.transport_hotel_name=obj==undefined ?'':obj.transport_hotel_name,  
            obj1.transport_time=obj==undefined ?time:obj.transport_time,  
            obj1.remarks=obj==undefined ?'':obj.remarks,

            localStorage.setItem('data', JSON.stringify(obj1));
      }
  }
}
</script>
<style>
</style>
