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
                        <p class="form-p lora-semi m-0">Step <span>3</span> of <span>4</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-10">
                        <form class="general-form">
                            <fieldset>
                                <legend class="form-title">Booker&#39;s Details</legend>
                                <p class="form-p fw-semi-bold mb-lg-3 mb-2">Enter the details of the person making the booking</p>
                                <div class="row">
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">First Name<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" v-model="booker.first_name" placeholder="Enter your first name">
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Last Name<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" v-model="booker.last_name" placeholder="Enter your last name">
                                        </div>  
                                    </div>
                                </div>
                               <div class="row">
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Email Address<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" v-model="booker.email" placeholder="Enter your first name">
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Mobile Number<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" v-model="booker.mobile_number" placeholder="Enter your last name">
                                        </div>  
                                    </div>
                                </div>
                                <div class="row">
                                     <div class="col-lg-6">
                                        <div class="form-group"><label for="exampleFormControlTextarea1" class="form-label text-capitalize">Comments</label>
                                        <textarea class="form-control" placeholder="Enter any comments that you want us to know about" v-model="booker.comments" id="exampleFormControlTextarea1" rows="3"></textarea></div> 
                                    </div>
                                </div>
                            </fieldset>
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
                        <router-link to="/elite-form3" class="cancel-link d-inline-block text-decoration-none">Back</router-link>
                    </div>
                    <div class="d-block">
                       <span class="btn-next d-inline-block align-top transition" v-if="!(booker.first_name && booker.last_name && booker.mobile_number)" :disabled="notFormValid" @click="error()" >
                            Next
                        </span>
                       <span  v-if="booker.first_name && booker.last_name && booker.mobile_number">
                       <router-link to="/elite-form5" @click="setData()"  class="btn-next d-inline-block align-top transition">Next</router-link>
                        </span>
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
         notFormValid: true,
        countriesoptions:obj.countriesoptions,
         service_id: obj.service_id,
         Totle: obj.total,
        arriving_from_airport : obj.arriving_from_airport,  
        airport_name : obj.airport_name,
         arrival_date : obj.arrival_date,  
         arrival_time : obj.arrival_time,  
         flight_number : obj.flight_number,
         flight_type : obj.flight_type,
         date : obj.date,
         time :obj.time,   
			// passengers info
         passengers:obj.passengers,
         //booker Info
        booker:{
            first_name:obj.booker.first_name,
			last_name:obj.booker.last_name,
			mobile_number:obj.booker.mobile_number,
			comments:obj.booker.comments,
            //optional pram
            email: obj.booker.email
         }
			
         
        }
        
    },
   methods:{
    
       error(){
        toastr.error('Kindly fillout required fields 🙁');
       },
      setData()
      {
           debugger;
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
            obj.booker = this.booker;
            localStorage.setItem('elitedata', JSON.stringify(obj));
      }
    }
  }
</script>
<style>
</style>
