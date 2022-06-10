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
                        <p class="form-p lora-semi m-0 ">Step <span>2</span> of <span>6</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-10">
                        <form class="general-form">
                            <fieldset>
                                <legend class="form-title sub-title">Journey Information</legend>
                                <p class="form-title mb-2">Arrival</p>
                                <div class="row">
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Call Sign<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Call Sign">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label">ETA (UTC Time)<span class="asterik">*</span></label>
                                            <div class="form-border">
                                                <input type="text" class="form-control border-0" placeholder="HH:MM">
                                                <span class="input-icon">
                                                    <img src="../../assets/images/icons/schedule.svg" alt="couch" class=" img-fluid"/>
                                                </span>
                                            </div>
                                        </div>   
                                        <div class="form-group">
                                            <label class="form-label">Nature of Flight<span class="asterik">*</span></label>
                                            
                                             <div class="input-group">
                                                <span class="fa fa-minus minus-icon"></span>
                                                <input type="text" class="form-control" placeholder="Nature of Flight">
                                                <span class="fa fa-plus plus-icon"></span>
                                            </div>
                                        </div>  
                                    </div>
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">From Airport<span class="asterik">*</span></label>
                                            <select class="form-select" id="inputGroupSelect01">
                                                <option selected>Select Airport</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">arrival date<span class="asterik">*</span></label>
                                            <div class="form-border">
                                                <input type="text" class="form-control border-0" placeholder="DD/MM/YYYY">
                                                <div class="d-flex align-items-center"><span class="input-icon">
                                                    <img src="../../assets/images/icons/date-range.svg" alt="couch" class=" img-fluid"/>
                                                </span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Passenger Count<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Passenger Count">
                                        </div> 
                                    </div> 
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend class="form-title">departure</legend>
                                <div class="row">
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Call Sign<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Call Sign">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label">ETA (UTC Time)<span class="asterik">*</span></label>
                                            <div class="form-border"><input type="text" class="form-control border-0" placeholder="HH:MM"><span class="input-icon">
                                                    <img src="../../assets/images/icons/schedule.svg" alt="couch" class=" img-fluid"/>
                                                </span></div>
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label">Nature of Flight<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Nature of Flight">
                                        </div>  
                                    </div>
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">to Airport<span class="asterik">*</span></label>
                                            <select class="form-select" id="inputGroupSelect01">
                                                <option selected>Select Airport</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">departure date<span class="asterik">*</span></label>
                                            <div class="form-border">
                                                <input type="text" class="form-control border-0" placeholder="DD/MM/YYYY">
                                                <div class="d-flex align-items-center">
                                                    <span class="input-icon">
                                                        <img src="../../assets/images/icons/date-range.svg" alt="couch" class=" img-fluid"/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Passenger Count<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Passenger Count">
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
                        <router-link to="/general-aviation-form1" class="light-button d-inline-block">back</router-link>
                    </div>
                    <div class="d-block">
                        <router-link to="/general-aviation-form3"  class="beige-button d-inline-block">next</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>  

<script>
export default {

mounted () {
  window.scrollTo(0, 0)
}
}
import '@fortawesome/fontawesome-free/js/all.js';
</script>
<style>
</style>
