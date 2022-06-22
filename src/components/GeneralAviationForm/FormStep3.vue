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
                        <p class="form-p lora-semi m-0">Step <span>3</span> of <span>6</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-10">
                        <form class="general-form">
                            <fieldset class="mb-0">
                                <legend class="form-title sub-title">Operator Information </legend>
                                <div class="row">
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Full Name<span class="asterik">*</span></label>
                                            <input type="text" v-model="operator_full_name" class="form-control" placeholder="Full Name">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label">Telephone Number<span class="asterik">*</span></label>
                                            <div class="form-border">
                                                 <select class="form-select phone-select h-100"  id="inputGroupSelect01">
                                                    <option selected>+973</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <input type="text" v-model="operator_tel_number" class="form-control border-0" placeholder="1234 5678">
                                            </div>
                                        </div>   
                                        <div class="form-group">
                                             <label for="exampleFormControlTextarea1" class="form-label text-capitalize">address<span class="asterik">*</span></label>
                                             <textarea class="form-control" v-model="operator_address" placeholder="Enter your address" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div class="custom-radio-btn ">
                                            <p class="form-small-text mb-3">Are you using an agent?</p>
                                            <div class="d-flex align-items-center">
                                                <div class="form-check px-0 ms-0 me-4">
                                                    <label class="radio-container text-capitalize">yes
                                                        <input type="radio" value="1" :change="is_using_agent"  v-model="is_using_agent"  name="radio">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div class="form-check ms-0">
                                                    <label class="radio-container text-capitalize">no
                                                        <input type="radio" value="2"  :change="is_using_agent"   v-model="is_using_agent" name="radio">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">Country<span class="asterik">*</span></label>
                                            <select class="form-select" v-model="operator_country" id="inputGroupSelect01">
                                                <option v-for="item in countriesoptions" :key="item.id" :value="item.id">{{item.name}} </option>
                                            </select>
                                        </div>  
                                       <div class="form-group">
                                            <label class="form-label text-capitalize">email address<span class="asterik">*</span></label>
                                            <input type="text" v-model="operator_email" class="form-control" placeholder="name@example.com">
                                        </div>
                                        <div class="form-group">
                                             <label for="exampleFormControlTextarea1" class="form-label text-capitalize">billing address<span class="asterik">*</span></label>
                                             <textarea class="form-control" v-model="operator_billing_address" placeholder="Enter the billing address" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div> 
                                    </div> 
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend class="form-title">Agent Information</legend>
                                <div class="row">
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Full Name<span class="asterik">*</span></label>
                                            <input type="text" v-model="agent_fullname" class="form-control" placeholder="Full Name">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label">Telephone Number<span class="asterik">*</span></label>
                                            <input type="text" v-model="agent_phoneNumber" class="form-control" placeholder="+973 1234 5678">
                                        </div>   
                                        <div class="form-group">
                                             <label for="exampleFormControlTextarea1" class="form-label text-capitalize">address<span class="asterik">*</span></label>
                                             <textarea class="form-control" v-model="agent_address" placeholder="Enter your address" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div> 
                                    </div>
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">Country<span class="asterik">*</span></label>
                                            <select class="form-select" v-model="agent_country" id="inputGroupSelect01">
                                                <option v-for="item in countriesoptions" :key="item.id" :value="item.id">{{item.name}} </option>
                                            </select>
                                        </div>  
                                       <div class="form-group">
                                            <label class="form-label text-capitalize">email address <span class="asterik">*</span></label>
                                            <input type="text" v-model="agent_email" class="form-control" placeholder="name@example.com">
                                        </div>
                                        <div class="form-group">
                                             <label for="exampleFormControlTextarea1" class="form-label text-capitalize">billing address<span class="asterik">*</span></label>
                                             <textarea class="form-control" v-model="agent_billing_address" placeholder="Enter the billing address" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                        <router-link to="/general-aviation-form2" class="light-button d-inline-block">back</router-link>
                    </div>
                    <div class="d-block">
                      <span class="beige-button d-inline-block" v-if="!(operator_full_name && operator_country && operator_tel_number
                       && operator_email && operator_address && operator_billing_address
                       && agent_fullname && agent_country && agent_phoneNumber
                       && agent_email && agent_address && agent_billing_address
                       
                       )" :disabled="notFormValid" @click="error()">
                            Next
                        </span>
                      <span v-if="operator_full_name && operator_country && operator_tel_number 
                        && operator_email && operator_address && operator_billing_address
                        && agent_fullname && agent_country && agent_phoneNumber
                        && agent_email && agent_address && agent_billing_address
                        ">
                         <router-link to="/general-aviation-form4" @click="setData()"  class="beige-button d-inline-block">Next</router-link>
                         </span>
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
          var obj= JSON.parse(localStorage.data);
        return {
             
         notFormValid: true,
         airport_name: obj.airport_name,
         operator_full_name:obj.operator_full_name,  
         operator_country:obj.operator_country,  
         operator_tel_number:obj.operator_tel_number,   
         operator_email:obj.operator_email,   
         operator_address:obj.operator_address,  
         operator_billing_address:obj.operator_billing_address,  
         agent_country:obj.agent_country,   
         agent_fullname:obj.agent_fullname,   
         agent_phoneNumber:obj.agent_phoneNumber,  
         agent_email:obj.agent_email,   
         agent_address:obj.agent_address,  
         countriesoptions:obj.countriesoptions,
         agent_billing_address:obj.agent_billing_address, 
         is_using_agent: obj.is_using_agent == false? 2: 1,
         //agentno: !this.is_using_agent
     }
    },
      methods:{
        
       error(){
        toastr.error('Kindly fillout required fields 🙁');
       },
        checkunchecked(va)
        {
            debugger;
         if(va == "1")
         {
          this.is_using_agent = true;
          this.agentno = !this.is_using_agent;
         }
         else{
            this.agentno= true;
            this.is_using_agent=!this.agentno;
         }

        },
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
            obj1.arriving_from_airport=obj.arriving_from_airport;    
            obj1.estimated_time_of_arrival=obj.estimated_time_of_arrival;  
            obj1.arrival_date=obj.arrival_date;   
            obj1.arrival_flight_nature=obj.arrival_flight_nature; 
            obj1.arrival_passenger_count=obj.arrival_passenger_count;   
            obj1.departure_call_sign=obj.departure_call_sign;
            obj1.departure_to_airport=obj.departure_to_airport;   
            obj1.estimated_time_of_departure=obj.estimated_time_of_departure;
            obj1.departure_date=obj.departure_date;   
            obj1.departure_flight_nature=obj.departure_flight_nature;   
            obj1.departure_passenger_count=obj.departure_passenger_count;  

            obj1.operator_full_name=this.operator_full_name;    
            obj1.operator_country=this.operator_country;  
            obj1.operator_tel_number=  this.operator_tel_number;    
            obj1.operator_email=this.operator_email,   
            obj1.operator_address=this.operator_address;    
            obj1.operator_billing_address=this.operator_billing_address;
            obj1.agent_fullname=this.agent_fullname;   
            obj1.agent_country=this.agent_country;   
            obj1.agent_phoneNumber=this.agent_phoneNumber;    
            obj1.agent_email=this.agent_email;   
            obj1.agent_address=this.agent_address;    
            obj1.agent_billing_address=this.agent_billing_address; 
             obj1.is_using_agent=this.is_using_agent == "1"?true:false; 
             
            obj1.airport_name = this.airport_name;
            obj1.services=obj.services; 
            obj1.attachments=obj.attachments;
            obj1.transport_hotel_name=obj.transport_hotel_name;  
            obj1.transport_time=obj.transport_time;  
            obj1.remarks=obj.remarks;
            obj1.airportoptions=obj.airportoptions;
            obj1.countriesoptions=obj.countriesoptions;
            obj1.formserviceoption=obj.formserviceoption;

             localStorage.setItem('data', JSON.stringify(obj1));
      }
  }

}
</script>
<style>
.radio-container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height:1.14;
}
.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.radio-container .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border: 1px solid  #4d627a;
  background-color: transparent;
  border-radius: 50%;
  bottom: 0;
  margin: auto;
}
.radio-container:hover input ~ .checkmark {
  background-color: transparent;
}
.radio-container input:checked ~ .checkmark {
  background-color: transparent;
}
.radio-container .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.radio-container input:checked ~ .checkmark:after {
  display: block;
}
.radio-container .checkmark:after {
 	top: 3px;
	left: 3px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #011e41;
}
.phone-select{width:160px !important; border-right: 1px solid #000 !important; border-top: 0px solid transparent !important; border-bottom: 0px solid transparent !important; border-left: 0px solid transparent !important;}
</style>
