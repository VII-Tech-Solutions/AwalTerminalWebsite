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
                                <legend class="form-title sub-title">Required Services  </legend>
                                <p class="form-p fw-semi-bold mb-lg-3 mb-2">Select all the services that you require upon arrival/departure</p>
                                <div class="form-service-check">
                                    <ul class="ul_css">
                                        <li>
                                            <label class="checked-container">Landing Permit
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">fuel
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">catering 
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">passenger limo services 
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">hotel reservation 
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container mb-3 text-inherit">Crew Transport (to and from)
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                            <div class="d-flex align-items-center ms-4">
                                                <div class="form-group mb-0 w-100">
                                                    <input type="text" class="form-control" placeholder="Enter hotel name" />
                                                </div>
                                                <div class="form-border ms-1"><input type="text" class="form-control border-0" placeholder="HH:MM"><span class="input-icon">
                                                    <img src="../../assets/images/icons/schedule.svg" alt="couch" class=" img-fluid"/>
                                                </span></div>
                                            </div>
                                        </li>
                                        <li>
                                            <label class="checked-container">Toilet Service
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">Water Service
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">Air Conditioning Unit (ACU) 
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">Air Start Unit (ASU) 
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="checked-container">Ground Power Unit (GPU)
                                                <input type="checkbox" checked="checked">
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
        <div class="form-footer">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-block">
                        <a class="light-button d-inline-block">cancel</a>
                    </div>
                    <div class="d-block">
                        <router-link to="/general-aviation-form5"  class="beige-button d-inline-block">next</router-link>
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
</style>
