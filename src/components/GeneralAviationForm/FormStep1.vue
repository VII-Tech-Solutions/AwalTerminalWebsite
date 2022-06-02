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
                        <p class="form-p lora-semi m-0">Step <span>1</span> of <span>6</span></p>
                    </div>
                    <p class="form-p custom-w"><strong>To reserve and book a general aviation service, please fill in the following form.</strong> If you would like to book an elite service, please <a class="text--btn" href="#">click here.</a></p>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-10">
                        <form class="general-form pt-0">
                            <fieldset>
                                <legend class="form-title">Flight Information</legend>
                                <div class="row">
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">Aircraft Type<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter aircraft type">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label text-uppercase">mtow (kg) <span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter MTOW in KG">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label text-capitalize" for="inputGroupSelect01">purpose of landing <span class="asterik">*</span></label>
                                            <select class="form-select" id="inputGroupSelect01">
                                                <option selected>Other</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div> 
                                    </div>
                                    <div class="col-lg-6 mb-0">
                                        <div class="form-group">
                                            <label class="form-label text-capitalize">registration<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Registration number">
                                        </div>  
                                        <div class="form-group">
                                            <label class="form-label text-capitalize"> lead passenger name<span class="asterik">*</span></label>
                                            <input type="text" class="form-control" placeholder="Lead Passenger Name">
                                        </div>  
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1" class="form-label fw-normal"> Please specify the reason for your landing</label>
                                        <textarea class="form-control" placeholder="Explain the reason for landing" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                        <a class="light-button d-inline-block">cancel</a>
                    </div>
                    <div class="d-block">
                        <router-link to="/general-aviation-form2" class="beige-button d-inline-block">next</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>  

<script>
</script>
<style>
</style>
