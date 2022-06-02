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
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Select an airport </option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                        </div>  
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">date<span class="asterik">*</span></label>
                                            <div class="form-border calender">
                                                <input type="date" class="form-control calender-date border-0" placeholder="">
                                                <input type="text" class="form-control border-0" placeholder="DD/MM/YYYY">
                                                <div class="d-flex align-items-center"><span class="input-icon">
                                                    <img src="../../assets/images/icons/date-range.svg" alt="couch" class=" img-fluid"/>
                                                </span></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="col-lg-2 ">

                                        <div class="form-group">
                                            <label class="form-label">Time<span class="asterik">*</span></label>
                                            <div class="form-border"><input type="text" class="form-control border-0" placeholder="HH:MM">
                                            <span class="input-icon"><img src="../../assets/images/icons/schedule.svg" alt="couch" class="img-fluid"></span>
                                            </div>
                                        </div>  
                                        
                                    </div>
                                    
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Flight Number <span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="e.g. BAH2233">
                                        </div>  
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend class="form-title">Number of Passengers </legend>
                                 <div class="row align-items-baseline">
                                    <div class="col-lg-2 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Adults <span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="e.g. 2">
                                        </div>  
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Children <span class="fw-normal text-lowercase">(2 to 12 years)</span> </label>
                                            <input type="text" class="form-control" placeholder="e.g. 1">
                                        </div>  
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Infants <span class="fw-normal text-lowercase">(below 2 years)</span></label>
                                            <input type="text" class="form-control" placeholder="e.g. 0">
                                        </div>  
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
                    <div class="elite-forrm-footer">
                        <div class="container">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-block">
                                    <router-link to="/elite-form1" class="cancel-link d-inline-block text-decoration-none">Back</router-link>
                                </div>
                                <div class="d-block">
                                    <router-link to="/elite-form3"  class="btn-next d-inline-block align-top transition text-capitalize">next</router-link>
                                </div>
                            </div>
                        </div>
                </div>
                    
    </div>    
</template>  

<script>
import '@fortawesome/fontawesome-free/js/all.js';
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
</style>
