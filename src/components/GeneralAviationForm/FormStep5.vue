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
                                                <div class="form-border upload-form px-1"><input type="text" class="form-control border-0" placeholder="arrival_20220415_fasdolaw97w3…">
                                                    <input type="file" class="form-control upload-input" placeholder="" />
                                                    <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                                                        <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                                                    </button>
                                                </div>
                                                <button class="form-error-btn text-capitalize my-2 d-flex align-items-center">
                                                    <span class="input-icon me-2">
                                                        <img src="../../assets/images/icons/delete.svg" alt="couch" class=" img-fluid"/>
                                                    </span>delete attachement
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <p class="fw-semi-bold extra-small-text mb-2">You requested Catering Services, upload Catering Order (if available)</p>
                                            <div class="form-group">
                                                <div class="form-border upload-form px-1"><input type="text" class="form-control border-0" placeholder="Upload catering order">
                                                    <input type="file" class="form-control upload-input" placeholder="" />
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
                                                <div class="form-border upload-form px-1"><input type="text" class="form-control border-0" placeholder="certificate_20220415_f8jq8cdh…">
                                                    <input type="file" class="form-control upload-input" placeholder="" />
                                                    <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                                                        <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                                                    </button>
                                                </div>
                                                <button class="form-error-btn text-capitalize my-2 d-flex align-items-center">
                                                    <span class="input-icon delete-icon me-2">
                                                        <img src="../../assets/images/icons/delete.svg" alt="couch" class=" img-fluid"/>
                                                    </span>delete attachement
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-group">
                                                <label class="form-label text-capitalize">Arrival Gendec<span class="asterik">*</span></label>
                                                <div class="form-border upload-form px-1"><input type="text" class="form-control border-0" placeholder="arrival_20220415_fasdolaw97w3…">
                                                    <input type="file" class="form-control upload-input" placeholder="" />
                                                    <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                                                        <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                                                    </button>
                                                </div>
                                                <button class="form-error-btn text-capitalize my-2 d-flex align-items-center">
                                                    <span class="input-icon delete-icon me-2">
                                                        <img src="../../assets/images/icons/delete.svg" alt="couch" class=" img-fluid"/>
                                                    </span>delete attachement
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-group">
                                                <label class="form-label text-capitalize">Departure Gendec<span class="asterik">*</span></label>
                                                <div class="form-border upload-form px-1"><input type="text" class="form-control border-0" placeholder="departure_20220415_pkmai856as…">
                                                    <input type="file" class="form-control upload-input" placeholder="" />
                                                    <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                                                        <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                                                    </button>
                                                </div>
                                                <button class="form-error-btn text-capitalize my-2 d-flex align-items-center">
                                                    <span class="input-icon delete-icon me-2">
                                                        <img src="../../assets/images/icons/delete.svg" alt="couch" class=" img-fluid"/>
                                                    </span>delete attachement
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-group">
                                                <label class="form-label text-capitalize">other documents</label>
                                                <div class="form-border upload-form px-1"><input type="text" class="form-control border-0" placeholder="Upload other documents">
                                                    <input type="file" class="form-control upload-input" placeholder="" />
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
                                <textarea class="form-control" placeholder="Enter any remarks that you want us to know about" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                        <router-link to="/general-aviation-form6"  class="beige-button d-inline-block">next</router-link>
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
