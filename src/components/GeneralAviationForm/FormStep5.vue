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
                        <h3 class="form-h3 text-capitalize">General Aviation </h3>
                        <p class="form-p lora-semi m-0">Step <span>5</span> of <span>6</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-10">
                        <form class="general-form">
                            <fieldset>
                                <legend class="form-title sub-title">documents & remarks</legend>
                                <div class="form-service-check">
                                    <ul class="ul_css">
                                        <li>
                                            <p class="fw-semi-bold extra-small-text mb-2">You requested Fuel Services, upload Fuel Release (if available)</p>
                                            <div class="form-group">
                                                <div class="form-border upload-form px-1"><input type="text" v-model="fuelServices" class="form-control border-0" placeholder="arrival_20220415_fasdolaw97w3…">
                                                    <input type="file" @change="uploadFile($event,'fuel')" ref="file" class="form-control upload-input" placeholder="" />
                                                    <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                                                        <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                                                    </button>
                                                </div>
                                                
                                            </div>
                                        </li>
                                        <li>
                                            <p class="fw-semi-bold extra-small-text mb-2">You requested Catering Services, upload Catering Order (if available)</p>
                                            <div class="form-group">
                                                <div class="form-border upload-form px-1"><input type="text" v-model="cateringServices" class="form-control border-0" placeholder="Upload catering order">
                                                    <input type="file" @change="uploadFile($event,'Cater')" ref="file" class="form-control upload-input" placeholder="" />
                                                    <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                                                        <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-group">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <label class="form-label text-capitalize"> Aircraft Certifications Checklist<span class="asterik">*</span></label>
                                                    <a class="text-capitalize text-color-btn">download checklist template</a>
                                                </div>
                                                <div class="form-border upload-form px-1"><input type="text" v-model="airCraftCert" class="form-control border-0" placeholder="certificate_20220415_f8jq8cdh…">
                                                    <input type="file" @change="uploadFile($event,'Aircraft')" ref="file" class="form-control upload-input" placeholder="" />
                                                    <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                                                        <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                                                    </button>
                                                </div>
                
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-group">
                                                <label class="form-label text-capitalize">Arrival Gendec<span class="asterik">*</span></label>
                                                <div class="form-border upload-form px-1"><input type="text" v-model="arrivalgendec" class="form-control border-0" placeholder="arrival_20220415_fasdolaw97w3…">
                                                    <input type="file" @change="uploadFile($event,'Arrival')" ref="file" class="form-control upload-input" placeholder="" />
                                                    <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                                                        <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                                                    </button>
                                                </div>
                                                
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-group">
                                                <label class="form-label text-capitalize">Departure Gendec<span class="asterik">*</span></label>
                                                <div class="form-border upload-form px-1"><input type="text"  v-model="departureGendec" class="form-control border-0" placeholder="departure_20220415_pkmai856as…">
                                                    <input type="file" @change="uploadFile($event,'Departure')" ref="file" class="form-control upload-input" placeholder="" />
                                                    <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                                                        <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-group">
                                                <label class="form-label text-capitalize">other documents</label>
                                                <div class="form-border upload-form px-1"><input type="text" v-model="otherDocuments" class="form-control border-0" placeholder="Upload other documents">
                                                    <input type="file" @change="uploadFile($event,'other')" ref="file" class="form-control upload-input" placeholder="" />
                                                    <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                                                        <span class="fa fa-arrow-up border-bottom me-2"></span>upload 
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="remark-list">
                                        <ul>
                                            <li><p>All file types should be in PDF format</p></li>
                                            <li><p>File name should be Alphanumeric only</p></li>
                                            <li><p>File size should not exceed 2MB</p></li>
                                            <li><p>File size for other documents should not exceed 10MB</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1" class="form-label text-capitalize"> remarks</label>
                                <textarea class="form-control" v-model="remarks" placeholder="Enter any remarks that you want us to know about" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div> 
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
                        <router-link to="/general-aviation-form4" class="light-button d-inline-block">back</router-link>
                    </div>
                    <div class="d-block">
                        <router-link to="/general-aviation-form6" @click="setData()"  class="beige-button d-inline-block">next</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>  

<script>
import axios  from 'axios'
import '@fortawesome/fontawesome-free/js/all.js';
    export default{
    mounted () {
     window.scrollTo(0, 0)
    },
    data() {
          var obj= JSON.parse(localStorage.data);
          var textboxobj= localStorage.textboxdata != undefined ?  JSON.parse(localStorage.textboxdata):undefined;
          
      
        return {
         notFormValid: true,
         remarks:obj.remarks,
         fuelServices:    textboxobj == undefined ? '' : textboxobj.fuelServices,
         cateringServices:textboxobj == undefined ? '' : textboxobj.cateringServices,
         airCraftCert:    textboxobj == undefined ? '' : textboxobj.airCraftCert,
         arrivalgendec:   textboxobj == undefined ? '' : textboxobj.arrivalgendec,
         departureGendec: textboxobj == undefined ? '' : textboxobj.departureGendec,
         otherDocuments:  textboxobj == undefined ? '' : textboxobj.otherDocuments,
         attachement : obj.attachments,
     }
    },
      methods:{
       uploadFile(ref,name) {
      
        var ext =     ref.target.files[0].name.split('.').pop(); 
        if((name !="other" && (parseFloat(ref.target.files[0].size / (1024 * 1024)).toFixed(2)) <= 2) || (name =="other" && (parseFloat(ref.target.files[0].size / (1024 * 1024)).toFixed(2)) <= 10) )
        {
        if(ext == "pdf")
        {
        const formData = new FormData();
        formData.append('file', ref.target.files[0]);
        const headers = { 'Content-Type': 'multipart/form-data' };
        axios.post('https://awal.viitech.net/api/general-aviation/media', formData, { headers }).then((res) => {
            if(res.status == 200)
            {
                 name=="fuel"?this.fuelServices = ref.target.files[0].name :name=="Cater"?
                 this.cateringServices = ref.target.files[0].name :name=="Aircraft"? 
                 this.airCraftCert = ref.target.files[0].name :name=="Arrival"?
                 this.arrivalgendec = ref.target.files[0].name :name=="Departure"?
                 this.departureGendec = ref.target.files[0].name:this.otherDocuments=ref.target.files[0].name;
                 this.attachement.push(res.data.data.attachments[0].id);
            }
        }); 
        }
        else{
           toastr.error('file should be in pdf format');
        }
         }
         else{
            name!="other"? toastr.error('file size should not exceed 2MB'):toastr.error('File size for other documents should not exceed 10MB');
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
            obj1.services=obj.services, 
            obj1.attachments= this.attachement,
            obj1.transport_hotel_name=obj.transport_hotel_name,  
            obj1.transport_time=obj.transport_time,  
            obj1.remarks=this.remarks

             localStorage.setItem('data', JSON.stringify(obj1));

             var textboxobj = {};
             textboxobj.fuelServices = this.fuelServices; 
             textboxobj.cateringServices = this.cateringServices; 
             textboxobj.airCraftCert = this.airCraftCert; 
             textboxobj.arrivalgendec = this.arrivalgendec; 
             textboxobj.departureGendec = this.departureGendec; 
             textboxobj.otherDocuments = this.otherDocuments; 
            localStorage.setItem('textboxdata', JSON.stringify(textboxobj));

      }
  }

}
</script>
<style>
.remark-list{margin-bottom:30px;}
.remark-list ul{padding-left:15px;}
.form-service-check .remark-list ul li:not(:last-child){margin-bottom:10px;}
.form-service-check .remark-list ul li p{font-size:14px; line-height:24px; color:#011e41; font-weight:400;}
.upload-form{position:relative;}
.upload-form .upload-input{position:absolute; left:0; right:0; top:0; bottom:0; opacity:0;}
.delete-icon{height:15px;}
.delete-icon img{height:100%; width:100%;}
@media (max-width:767px) {
.remark-list{margin-bottom:25px;}
}
@media (max-width:567px) {
.remark-list{margin-bottom:20px;}
}
</style>
