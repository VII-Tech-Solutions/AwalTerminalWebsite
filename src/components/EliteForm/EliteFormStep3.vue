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
                                <legend class="form-title sub-title">Passenger Details</legend>
                                <legend class="form-title">Passenger 1</legend>
                                <div class="row">
                                    
                                    <div class="col-lg-2">
                                         <div class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">Title<span class="asterik">*</span></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Mr</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">First Name<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter your first name">
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Last Name<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter your last name">
                                        </div>  
                                    </div>
                                    
                                </div>
                               <div class="row">
                                    
                                    <div class="col-lg-2">
                                         <div class="form-group">
                                            <label class="form-label">Date of Birth<span class="asterik">*</span></label>
                                            <div class="form-border calender">
                                                <input type="date" class="form-control calender-date border-0" placeholder="">
                                                <input type="text" class="form-control border-0" placeholder="DD/MM/YYYY">
                                                <div class="d-flex align-items-center"><span class="input-icon">
                                                    <img src="../../assets/images/icons/date-range.svg" alt="couch" class=" img-fluid"/>
                                                </span></div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                             <label class="form-label text-capitalize" for="inputGroupSelect01">Nationality<span class="asterik">*</span></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Select a nationality</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                             <label class="form-label text-capitalize" for="inputGroupSelect01">Class<span class="asterik">*</span></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Economy</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                        </div>  
                                    </div>
                                    
                                </div>
                                 <div class="row">
                                    <div class="col-lg-8">
                                        <hr class="bottom-line">
                                    </div>
                                </div>
                            </fieldset>
                             <fieldset>
                                <legend class="form-title">Passenger 2</legend>
                                <div class="row">
                                    
                                    <div class="col-lg-2">
                                         <div class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">Title<span class="asterik">*</span></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Mr</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">First Name<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter your first name">
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Last Name<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter your last name">
                                        </div>  
                                    </div>
                                    
                                </div>
                               <div class="row">
                                    
                                    <div class="col-lg-2">
                                         <div class="form-group">
                                            <label class="form-label">Date of Birth<span class="asterik">*</span></label>
                                            <div class="form-border calender">
                                                <input type="date" class="form-control calender-date border-0" placeholder="">
                                                <input type="text" class="form-control border-0" placeholder="DD/MM/YYYY">
                                                <div class="d-flex align-items-center"><span class="input-icon">
                                                    <img src="../../assets/images/icons/date-range.svg" alt="couch" class=" img-fluid"/>
                                                </span></div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                             <label class="form-label text-capitalize" for="inputGroupSelect01">Nationality<span class="asterik">*</span></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Select a nationality</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                             <label class="form-label text-capitalize" for="inputGroupSelect01">Class<span class="asterik">*</span></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Economy</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                        </div>  
                                    </div>
                                    
                                </div>
                                 <div class="row">
                                    <div class="col-lg-8">
                                        <hr class="bottom-line">
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend class="form-title">Passenger 3</legend>
                                <div class="row">
                                    
                                    <div class="col-lg-2">
                                         <div class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">Title<span class="asterik">*</span></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Mr</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">First Name<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter your first name">
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Last Name<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter your last name">
                                        </div>  
                                    </div>
                                    
                                </div>
                               <div class="row">
                                    
                                    <div class="col-lg-2">
                                         <div class="form-group">
                                            <label class="form-label">Date of Birth<span class="asterik">*</span></label>
                                            <div class="form-border calender">
                                                <input type="date" class="form-control calender-date border-0" placeholder="">
                                                <input type="text" class="form-control border-0" placeholder="DD/MM/YYYY">
                                                <div class="d-flex align-items-center"><span class="input-icon">
                                                    <img src="../../assets/images/icons/date-range.svg" alt="couch" class=" img-fluid"/>
                                                </span></div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                             <label class="form-label text-capitalize" for="inputGroupSelect01">Nationality<span class="asterik">*</span></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Select a nationality</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                             <label class="form-label text-capitalize" for="inputGroupSelect01">Class<span class="asterik">*</span></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Economy</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
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
                        <router-link to="/elite-form2" class="cancel-link d-inline-block text-decoration-none">Back</router-link>
                    </div>
                    <div class="d-block">
                        <router-link to="/elite-form4"  class="btn-next d-inline-block align-top transition text-capitalize">next</router-link>
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
.bottom-line{border-bottom:1px solid #011e41; opacity:inherit;}
</style>
