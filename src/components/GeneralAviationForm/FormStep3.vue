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
                                            <input type="text" class="form-control" placeholder="Full Name">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label">Telephone Number<span class="asterik">*</span></label>
                                            <div class="form-border">
                                                 <select class="form-select phone-select h-100" id="inputGroupSelect01">
                                                    <option selected>+973</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <input type="text" class="form-control border-0" placeholder="1234 5678">
                                            </div>
                                        </div>   
                                        <div class="form-group">
                                             <label for="exampleFormControlTextarea1" class="form-label text-capitalize">address<span class="asterik">*</span></label>
                                             <textarea class="form-control" placeholder="Enter your address" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div class="custom-radio-btn ">
                                            <p class="form-small-text mb-3">Are you using an agent?</p>
                                            <div class="d-flex align-items-center">
                                                <div class="form-check px-0 ms-0 me-4">
                                                    <label class="radio-container text-capitalize">yes
                                                        <input type="radio" checked="checked" name="radio">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div class="form-check ms-0">
                                                    <label class="radio-container text-capitalize">no
                                                        <input type="radio" checked="checked" name="radio">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">Country<span class="asterik">*</span></label>
                                            <select class="form-select" id="inputGroupSelect01">
                                                <option selected>Select a country </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>  
                                       <div class="form-group">
                                            <label class="form-label text-capitalize">email address<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="name@example.com">
                                        </div>
                                        <div class="form-group">
                                             <label for="exampleFormControlTextarea1" class="form-label text-capitalize">billing address<span class="asterik">*</span></label>
                                             <textarea class="form-control" placeholder="Enter the billing address" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                                            <input type="text" class="form-control" placeholder="Full Name">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label">Telephone Number<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="+973 1234 5678">
                                        </div>   
                                        <div class="form-group">
                                             <label for="exampleFormControlTextarea1" class="form-label text-capitalize">address<span class="asterik">*</span></label>
                                             <textarea class="form-control" placeholder="Enter your address" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div> 
                                    </div>
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">Country<span class="asterik">*</span></label>
                                            <select class="form-select" id="inputGroupSelect01">
                                                <option selected>Select a country </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>  
                                       <div class="form-group">
                                            <label class="form-label text-capitalize">email address <span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="name@example.com">
                                        </div>
                                        <div class="form-group">
                                             <label for="exampleFormControlTextarea1" class="form-label text-capitalize">billing address<span class="asterik">*</span></label>
                                             <textarea class="form-control" placeholder="Enter the billing address" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                        <router-link to="/general-aviation-form4"  class="beige-button d-inline-block">next</router-link>
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
.phone-select{width:160px !important; border-right: 1px solid #000 !important; border-top: 0px solid transparent !important; border-bottom: 0px solid transparent !important; border-left: 0px solid transparent !important;}
</style>
