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
                        <h3 class="form-h3 text-capitalize">Elite Service</h3>
                        <p class="form-p lora-semi m-0">Step <span>2</span> of <span>5</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-10">
                        <form class="general-form">
                            <fieldset>
                                <legend class="form-title sub-title">Your Journey </legend>
                                <div class="row">
                                    <div class="col-lg-12 ">
                                        <div class="custom-radio-btn mt-0 form-group">
                                            <p class="form-title">Enter your flight details</p>
                                            <div class="d-flex align-items-center justify-content-md-start justify-content-center">
                                                <div class="form-check px-0 ms-0 me-4">
                                                    <label class="radio-container text-capitalize">Arrival
                                                        <input type="radio" checked="checked" name="radio">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div class="form-check ms-0">
                                                    <label class="radio-container text-capitalize">Departure
                                                        <input type="radio" checked="checked" name="radio">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 ">
                                         <div class="form-group">
                                            <label class="form-label" for="inputGroupSelect01">Arriving from<span class="asterik">*</span></label>
                                            <select class="form-select" v-model="airport_id" id="inputGroupSelect01" @change="fligh_name($event)">
                                                <option  v-for="item in airportoptions" :key="item.id" :value="item.id">{{item.name}}</option>
                                            </select>
                                        </div>  
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">date<span class="asterik">*</span></label>
                                            <div class="form-border">
                                                <input type="date" onkeydown="return false"  v-model="date" class="form-control border-0" placeholder="DD/MM/YYYY">
                                                <div class="d-flex align-items-center">
                                                    <span class="input-icon">
                                                        <img src="../../assets/images/icons/date-range.svg" alt="couch" class=" img-fluid"/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 ">
                                        <div class="form-group">
                                            <label class="form-label">Time<span class="asterik">*</span></label>
                                            <div class="form-border"><input onkeydown="return false"  type="time" class="form-control border-0" v-model="time" placeholder="HH:MM">
                                                <span class="input-icon"><img src="../../assets/images/icons/schedule.svg" alt="couch" class="img-fluid"></span>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Flight Number <span class="asterik">*</span></label>
                                            <input type="text" class="form-control" v-model="flight_number" placeholder="e.g. BAH2233">
                                        </div>  
                                    </div>
                                </div>
                                <!-- <div class="row">
                                    <div class="col-lg-3 ">
                                         <div class="form-group">
                                            <label class="form-label" for="inputGroupSelect01">Flight Type<span class="asterik">*</span></label>
                                            <select class="form-select" v-model="is_arrival_flight" id="inputGroupSelect01" >
                                              
                                                <option v-for="item in flightoptions" :key="item.id" :value="item.id" >
                                                    {{item.name}}
                                                  </option>
                                                
                                            
                                            </select>
                                        </div>  
                                    </div>
                                </div> -->
                            </fieldset>
                            <fieldset>
                                <legend class="form-title">Number of Passengers </legend>
                                 <div class="row align-items-baseline">
                                    <div class="col-lg-2 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Adults <span class="asterik">*</span></label>
                                            <div class="input-group">
                                                <a @click="AdultDec()"><span class="fa fa-minus minus-icon" ></span></a>
                                                <input type="text" class="form-control" placeholder="e.g. 2" v-model="number_of_adults" />
                                                <a @click="AdultInc()">
                                                <span class="fa fa-plus plus-icon"></span></a>
                                            </div>
                                        </div>  
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Children <span class="fw-normal text-lowercase">(2 to 12 years)</span> </label>
                                             <div class="input-group">
                                                 <a @click="number_of_childrenDec()">
                                                <span class="fa fa-minus minus-icon"></span></a>
                                                <input type="text" class="form-control" placeholder="e.g. 1" v-model="number_of_children"/>
                                                <a @click="number_of_childrenInc()">
                                                <span class="fa fa-plus plus-icon"></span></a>
                                            </div>
                                        </div>  
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Infants <span class="fw-normal text-lowercase">(below 2 years)</span></label>
                                             <div class="input-group">
                                                 <a @click="number_of_infantsDec">
                                                <span class="fa fa-minus minus-icon"></span>
                                                 </a>
                                                <input type="text" class="form-control" placeholder="e.g. 0" v-model="number_of_infants" />
                                                <a @click="number_of_infantsInc">
                                                <span class="fa fa-plus plus-icon"></span></a>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </fieldset>
                            <!-- <fieldset>
                                <legend class="form-title">Number of Passengers </legend>
                                 <div class="row align-items-baseline">
                                    <div class="col-lg-2 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">number_of_adults <span class="asterik">*</span></label>
                                            <input type="text" class="form-control" v-model="number_of_adults" placeholder="e.g. 2">
                                        </div>  
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">number_of_children <span class="fw-normal text-lowercase">(2 to 12 years)</span> </label>
                                            <input type="text" class="form-control" v-model="number_of_children" placeholder="e.g. 1">
                                        </div>  
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">number_of_infants <span class="fw-normal text-lowercase">(below 2 years)</span></label>
                                            <input type="text" class="form-control" v-model="number_of_infants"  placeholder="e.g. 0">
                                        </div>  
                                    </div>
                                </div>
                            </fieldset> -->
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
                        <router-link to="/elite-form" class="cancel-link d-inline-block text-decoration-none">Back</router-link>
                    </div>
                    <div class="d-block">
                      <span class="btn-next d-inline-block align-top transition" v-if="!(airport_id && date && time && flight_number && number_of_adults )" :disabled="notFormValid" @click="error()" >
                            Next
                        </span>
                      <span v-if="airport_id && date && time && flight_number && number_of_adults ">
                         <router-link to="/elite-form3" @click="setData()"  class="btn-next d-inline-block align-top transition">Next</router-link>
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
export default {
    mounted () {
     window.scrollTo(0, 0);
     this.getDropdownData();
    },   
  data() {
      debugger;
        var obj = JSON.parse(localStorage.elitedata);
    return {
        airportoptions:[],
        countriesoptions:obj.countriesoptions,
        flightoptions:this.flightoptions,
        servicefeatureoptions:this.servicefeatureoptions,
         number_of_adults:obj==undefined ?0:obj.number_of_adults,
         number_of_children:obj==undefined ?0:obj.number_of_children,
         number_of_infants:obj==undefined ?0:obj.number_of_infants,
         notFormValid: true,
         service_id: obj.service_id,  
         airport_id : obj==undefined ?'':obj.airport_id,  
         airport_name : obj==undefined ?'':obj.airport_name, 
         date : obj==undefined ? '' : obj.date,  
         time : obj==undefined ? '': obj.time,  
         flight_number : obj==undefined ?'':obj.flight_number,
         is_arrival_flight : obj==undefined ? false :obj.is_arrival_flight,
         passengers:[{
                    title:"",
                    first_name: "",
                    last_name: "",
                    gender: 1,
                    birth_date: "",
                    nationality_id: "",
                    nationality_title:"",
                    class_id: ""
                }]
     }
        
    },
   
   methods:{
         fligh_name(event){
                debugger;
                this.airport_name=this.airportoptions.find(x => x.id ==event.target.value).name;
            },
           
           getDropdownData()
			{
            debugger;
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    }
                };
                axios.get('https://awal.viitech.net/api/metadata', axiosConfig)
                .then((res) => {
                    debugger;
                    this.airportoptions = res.data.data.airports;
                    this.countriesoptions = res.data.data.countries;
                    this.flightoptions = res.data.data.elite_service_types;
                    this.servicefeatureoptions = res.data.data.elite_service_features;
                })
                .catch((err) => {
                    toastr.error('Server Error Please Try again.. 🙁');
                })
			},
       AdultInc(){
           this.number_of_adults = this.number_of_adults + 1;
           
       },AdultDec(){
           if(this.number_of_adults > 0)
           this.number_of_adults = this.number_of_adults - 1;
       },
       number_of_childrenInc(){
           this.number_of_children = this.number_of_children + 1;
           
       },number_of_childrenDec(){
           if(this.number_of_children > 0)
           this.number_of_children = this.number_of_children - 1;
       },
       number_of_infantsInc(){
           this.number_of_infants = this.number_of_infants + 1;
           
       },number_of_infantsDec(){
           if(this.number_of_infants > 0)
           this.number_of_infants = this.number_of_infants - 1;
       },
       error(){
        toastr.error('Kindly fillout required fields 🙁');
       },
      setData()
      {
            var abc= localStorage.elitedata != undefined ?  JSON.parse(localStorage.elitedata) : undefined;
            debugger;
            console.log("abc Data");
            console.table(abc);
            var obj = {};
            obj.number_of_adults =  parseInt(this.number_of_adults == null ? 0 : this.number_of_adults);
            obj.number_of_children = parseInt(this.number_of_children == null ? 0 : this.number_of_children );
            obj.number_of_infants = parseInt(this.number_of_infants == null ? 0 : this.number_of_infants);
            obj.total = parseInt(parseInt(this.number_of_adults) + parseInt(this.number_of_children) + parseInt(this.number_of_infants));
            for (let i = 0; i < obj.total; i++) {
                if(abc != undefined){
                    if(abc.passengers.length == obj.total){
                         this.passengers.push({
                            title:abc.passengers[i].title,
                            first_name: abc.passengers[i].first_name,
                            last_name: abc.passengers[i].last_name,
                            gender: 1,
                            birth_date: abc.passengers[i].birth_date,
                            nationality_id: abc.passengers[i].nationality_id,
                              nationality_title: abc.passengers[i].nationality_title,
                            class_id: abc.passengers[i].class_id
                        })
                    }
                    else if(abc.passengers.length >= obj.total){
                        this.passengers.push({
                            title: abc.passengers[i].title,
                            first_name: abc.passengers[i].first_name,
                            last_name: abc.passengers[i].last_name,
                            gender: 1,
                            birth_date: abc.passengers[i].birth_date,
                            nationality_id: abc.passengers[i].nationality_id,
                               nationality_title: abc.passengers[i].nationality_title,
                            class_id: abc.passengers[i].class_id
                        })
                    

                    }
                    else{
                        this.passengers.push({
                            title:"",
                            first_name: "",
                            last_name: "",
                            gender: 1,
                            birth_date: "",
                            nationality_id: "",
                            nationality_title: "",
                            class_id: ""
                        })
                    }
                }
            }
           if(this.passengers.length > 1){
                this.passengers.splice(0, 1);
           }  
            obj.service_id= this.service_id,
            obj.countriesoptions=this.countriesoptions;
            obj.airport_id =  this.airport_id;
            obj.airport_name =  this.airport_name;
            obj.date =  this.date;
            obj.time =  this.time;
            obj.flight_number =  this.flight_number;  
            obj.is_arrival_flight = this.is_arrival_flight;
            obj.passengers = this.passengers; 
            obj.booker = abc == undefined ?  '': abc.booker;
            debugger;
            localStorage.setItem('elitedata',JSON.stringify(obj));
      }
  }
  
  }
</script>

<style>

.radio-container {
  display: block;
  position: relative;
  padding-left: 23px;
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
</style>
