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
                                <legend class="form-title">Booker’s Details</legend>
                                <p class="form-p fw-semi-bold mb-lg-3 mb-2">Enter the details of the person making the booking</p>
                                <div class="row">
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
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Email Address<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter your first name">
                                        </div>  
                                    </div>
                                    <div class="col-lg-3 ">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Mobile Number<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter your last name">
                                        </div>  
                                    </div>
                                </div>
                                <div class="row">
                                     <div class="col-lg-6">
                                        <div class="form-group"><label for="exampleFormControlTextarea1" class="form-label text-capitalize">Comments</label>
                                        <textarea class="form-control" placeholder="Enter any comments that you want us to know about" id="exampleFormControlTextarea1" rows="3"></textarea></div> 
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
                        <router-link to="/elite-form5"  class="btn-next d-inline-block align-top transition text-capitalize">next</router-link>
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
