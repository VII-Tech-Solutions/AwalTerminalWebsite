<template>
    <div class="aviation-form bg-white">
        <div class="container">
            <div class="form-header">
                <router-link to="/">
                    <figure class="mb-0 form-logo">
                        <img class="img-fluid" src="../../assets/images/forms-header-logo.png" />
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
                            <fieldset v-for="(passenger, index) in passengers" :key="passenger">
                                <legend class="form-title sub-title">Passenger Details</legend>
                                <legend class="form-title">Passenger {{index+1}}</legend>
                                <div class="row">
                                    <div class="col-lg-2">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize"
                                                for="inputGroupSelect01">Title<span class="asterik">*</span></label>
                                            <select class="form-select" v-model="passenger.title" required
                                                id="inputGroupSelect01">
                                                <option  default-checked=true > Select Title</option>
                                                <option value="N/A">N/A</option>
                                                <option value="Ms">Ms.</option>
                                                <option value="Mrs">Mrs.</option>
                                                <option value="Mr">Mr.</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">First Name<span
                                                    class="asterik">*</span></label>
                                            <input type="text" class="form-control" required
                                                v-model="passenger.first_name" placeholder="Enter your first name">
                                        </div>
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Last Name<span
                                                    class="asterik">*</span></label>
                                            <input type="text" class="form-control" required
                                                v-model="passenger.last_name" placeholder="Enter your last name">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-2">
                                        <div class="form-group">
                                            <label class="form-label">Date of Birth<span
                                                    class="asterik">*</span></label>
                                            <div class="form-border">
                                                <input type="date" onkeydown="return false"
                                                    class="form-control border-0" v-model="passenger.birth_date"
                                                    required placeholder="DD/MM/YYYY">
                                                <div class="d-flex align-items-center">
                                                    <span class="input-icon">
                                                        <img src="../../assets/images/icons/date-range.svg" alt="couch"
                                                            class=" img-fluid" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize"
                                                for="inputGroupSelect01">Nationality<span
                                                    class="asterik">*</span></label>
                                            <select class="form-select" required v-model="passenger.nationality_id"
                                                id="inputGroupSelect01" @change="fetch_title($event,passenger)">
                                                <option v-for="item in countriesoptions" :key="item.id" :value="item.id">{{item.name}} </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize"
                                                for="inputGroupSelect01">Class<span class="asterik">*</span></label>
                                            <select class="form-select" required v-model="passenger.class_id"
                                                id="inputGroupSelect01">
                                                <option value="Economy">Economy Class</option>
                                                <option value="Business">Business Class</option>
                                                <option value="First">First Class</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-8">
                                        <hr class="bottom-line">
                                    </div>
                                </div>

                                <!-- FOOTER -->
                                <div class="elite-forrm-footer">
                                    <div class="container">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-block">
                                                <router-link to="/elite-form2"
                                                    class="cancel-link d-inline-block text-decoration-none">Back
                                                </router-link>
                                            </div>
                                            <div class="d-block">
                                                <span class="btn-next d-inline-block align-top transition"
                                                    v-if="!(passenger.first_name&& passenger.title&&passenger.nationality_id&&passenger.last_name&&passenger.birth_date)" @click="error()" :disabled="notFormValid">Next
                                                </span>
                                                <span v-if="passenger.first_name && passenger.title&&passenger.nationality_id&&passenger.last_name&&passenger.birth_date">
                                                    <router-link to="/elite-form4" @click="setData()"
                                                        class="btn-next d-inline-block align-top transition">Next
                                                    </router-link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>  

<script>
import '@fortawesome/fontawesome-free/js/all.js';
export default {
    mounted () {
     window.scrollTo(0, 0)
    },
  data() {
      debugger;
      var obj = JSON.parse(localStorage.elitedata);
    return {
		 number_of_adults:obj.number_of_adults,
         number_of_children:obj.number_of_children,
         number_of_infants:obj.number_of_infants,
         countriesoptions:obj.countriesoptions,
         notFormValid: true,
         service_id: obj.service_id,
         Totle: obj.total,
          arriving_from_airport : obj.arriving_from_airport,  
          airport_name: obj.airport_name,
         arrival_date : obj.arrival_date,  
         arrival_time : obj.arrival_time,  
         flight_number : obj.flight_number,
         flight_type : obj.flight_type,
         date : obj.date,
         time :obj.time,
         passengers:obj.passengers
     }
        
    },
   methods:{
    
       error(){
        toastr.error('Kindly fillout required fields 🙁');
       },
       fetch_title(event,passenger){
          debugger;
           passenger.nationality_title=this.countriesoptions.find(x=>x.id== event.target.value).name;
        //   passenger.nationality_title
       },
      setData()
      {
           debugger;
           var abc= localStorage.elitedata != undefined ?  JSON.parse(localStorage.elitedata) : undefined;
           var obj = {};
            obj.number_of_adults = parseInt(this.number_of_adults == null ? 0 : this.number_of_adults);
            obj.number_of_children = parseInt(this.number_of_children == null ? 0 : this.number_of_children );
            obj.number_of_infants = parseInt(this.number_of_infants == null ? 0 : this.number_of_infants);
            obj.total = parseInt(parseInt(this.number_of_adults) + parseInt(this.number_of_children) + parseInt(this.number_of_infants)); 
            obj.service_id= this.service_id,
            obj.countriesoptions=this.countriesoptions,
            obj.arriving_from_airport =  this.arriving_from_airport;
            obj.airport_name = this.airport_name;
            obj.arrival_date =  this.arrival_date;
            obj.arrival_time =  this.arrival_time;
            obj.flight_number =  this.flight_number;
            obj.flight_type = this.flight_type;
            obj.date = this.date;
            obj.time = this.time;
            obj.passengers = this.passengers; 
             console.log("mY Pessenegerss");
            console.table(this.passengers);
            obj.booker = abc == undefined ?  '': abc.booker;
            // var obj = {};
            debugger;
            localStorage.setItem('elitedata', JSON.stringify(obj));
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
.bottom-line{border-bottom:1px solid #011e41; opacity:inherit;}
</style>
