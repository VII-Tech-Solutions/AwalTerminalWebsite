<template>
  <div class="aviation-form bg-white">
    <div class="container">
      <div class="form-header">
        <router-link to="/">
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
                      <p class="fw-semi-bold extra-small-text mb-2">You requested Fuel Services, upload Fuel Release (if
                        available)</p>
                      <div class="form-group">
                        <div class="form-border upload-form px-1"><input type="text" v-model="fuelServices"
                                                                         class="form-control border-0"
                                                                         placeholder="arrival_20220415_fasdolaw97w3…">
                          <input type="file" @change="uploadFile($event,'Fuel Release')" ref="file"
                                 class="form-control upload-input" placeholder=""/>
                          <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                            <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                          </button>
                        </div>
                        <button :fileid="fuelid" @click="deleteFile($event,'fuel')"
                                class="form-error-btn text-capitalize my-2 d-flex align-items-center"
                                v-if="fuelServices">
                                                    <span class="input-icon delete-icon me-2">
                                                        <img src="../../assets/images/icons/delete.svg" alt="couch"
                                                             class=" img-fluid"/>
                                                    </span>delete attachement
                        </button>
                      </div>
                    </li>
                    <li>
                      <p class="fw-semi-bold extra-small-text mb-2">You requested Catering Services, upload Catering
                        Order (if available)</p>
                      <div class="form-group">
                        <div class="form-border upload-form px-1"><input type="text" v-model="cateringServices"
                                                                         class="form-control border-0"
                                                                         placeholder="Upload catering order">
                          <input type="file" @change="uploadFile($event,'Catering Order')" ref="file"
                                 class="form-control upload-input" placeholder=""/>
                          <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                            <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                          </button>
                        </div>
                        <button :fileid="catid" @click="deleteFile($event,'Cater')"
                                class="form-error-btn text-capitalize my-2 d-flex align-items-center"
                                v-if="cateringServices">
                                                    <span class="input-icon delete-icon me-2">
                                                        <img src="../../assets/images/icons/delete.svg" alt="couch"
                                                             class=" img-fluid"/>
                                                    </span>delete attachement
                        </button>
                      </div>
                    </li>
                    <li>
                      <div class="form-group">
                        <div class="d-flex justify-content-between align-items-center">
                          <label class="form-label text-capitalize"> Aircraft Certifications Checklist<span
                              class="asterik">*</span></label>
                          <router-link className="text-capitalize text-color-btn"
                                       to="/aircraft-certificates-checklist.pdf" target="_blank">download checklist
                            template
                          </router-link>
                        </div>
                        <div class="form-border upload-form px-1"><input type="text" v-model="airCraftCert"
                                                                         class="form-control border-0"
                                                                         placeholder="certificate_20220415_f8jq8cdh…">
                          <input type="file" @change="uploadFile($event,'Aircraft Certifications Checklist')" ref="file"
                                 class="form-control upload-input" placeholder=""/>
                          <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                            <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                          </button>
                        </div>
                        <button :fileid="airid" @click="deleteFile($event,'Aircraft')"
                                class="form-error-btn text-capitalize my-2 d-flex align-items-center"
                                v-if="airCraftCert">
                                                    <span class="input-icon delete-icon me-2">
                                                        <img src="../../assets/images/icons/delete.svg" alt="couch"
                                                             class=" img-fluid"/>
                                                    </span>delete attachement
                        </button>
                      </div>
                    </li>
                    <li>
                      <div class="form-group">
                        <label class="form-label text-capitalize">Arrival Gendec<span class="asterik">*</span></label>
                        <div class="form-border upload-form px-1"><input type="text" v-model="arrivalgendec"
                                                                         class="form-control border-0"
                                                                         placeholder="arrival_20220415_fasdolaw97w3…">
                          <input type="file" @change="uploadFile($event,'Arrival Gendec')" ref="file"
                                 class="form-control upload-input" placeholder=""/>
                          <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                            <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                          </button>
                        </div>
                        <button :fileid="arrid" @click="deleteFile($event,'Arrival')"
                                class="form-error-btn text-capitalize my-2 d-flex align-items-center"
                                v-if="arrivalgendec">
                                                    <span class="input-icon delete-icon me-2">
                                                        <img src="../../assets/images/icons/delete.svg" alt="couch"
                                                             class=" img-fluid"/>
                                                    </span>delete attachement
                        </button>
                      </div>
                    </li>
                    <li>
                      <div class="form-group">
                        <label class="form-label text-capitalize">Departure Gendec<span class="asterik">*</span></label>
                        <div class="form-border upload-form px-1"><input type="text" v-model="departureGendec"
                                                                         class="form-control border-0"
                                                                         placeholder="departure_20220415_pkmai856as…">
                          <input type="file" @change="uploadFile($event,'Departure Gendec')" ref="file"
                                 class="form-control upload-input" placeholder=""/>
                          <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                            <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                          </button>
                        </div>
                        <button :fileid="depid" @click="deleteFile($event,'Departure')"
                                class="form-error-btn text-capitalize my-2 d-flex align-items-center"
                                v-if="departureGendec">
                                                    <span class="input-icon delete-icon me-2">
                                                        <img src="../../assets/images/icons/delete.svg" alt="couch"
                                                             class=" img-fluid"/>
                                                    </span>delete attachement
                        </button>
                      </div>
                    </li>
                    <li>
                      <div class="form-group">
                        <label class="form-label text-capitalize">other documents</label>
                        <div class="form-border upload-form px-1"><input type="text" v-model="otherDocuments"
                                                                         class="form-control border-0"
                                                                         >
                          <input type="file" @change="uploadFile($event,'other')" ref="file"
                                 class="form-control upload-input" placeholder=""/>
                          <button class="form-blue-btn text-capitalize my-2 d-flex align-items-center">
                            <span class="fa fa-arrow-up border-bottom me-2"></span>upload file
                          </button>
                        </div>
                        <button :fileid="othid" @click="deleteFile($event,'other')"
                                class="form-error-btn text-capitalize my-2 d-flex align-items-center"
                                v-if="otherDocuments">
                                                    <span class="input-icon delete-icon me-2">
                                                        <img src="../../assets/images/icons/delete.svg" alt="couch"
                                                             class=" img-fluid"/>
                                                    </span>delete attachement
                        </button>
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
                <textarea class="form-control" v-model="remarks"
                          placeholder="Enter any remarks that you want us to know about"
                          id="exampleFormControlTextarea1" rows="3"></textarea>
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
            <span  class="beige-button d-inline-block"
                   v-if="!(airCraftCert && arrivalgendec && departureGendec)"
                  :disabled="notFormValid" @click="error()">
                            Next
                        </span>
            <span v-if="airCraftCert && arrivalgendec && departureGendec">
                  <router-link to="/general-aviation-form6" @click="setData()" class="beige-button d-inline-block">Next
                  </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import '@fortawesome/fontawesome-free/js/all.js';
import configs from "../constants";

export default {
  mounted() {
    window.scrollTo(0, 0)
  },
  data() {
    var obj = JSON.parse(localStorage.data);
    var textboxobj = localStorage.textboxdata != undefined ? JSON.parse(localStorage.textboxdata) : undefined;
    return {
      remarks: obj.remarks,
      fuelServices: textboxobj == undefined ? '' : textboxobj.fuelServices,
      cateringServices: textboxobj == undefined ? '' : textboxobj.cateringServices,
      airCraftCert: textboxobj == undefined ? '' : textboxobj.airCraftCert,
      arrivalgendec: textboxobj == undefined ? '' : textboxobj.arrivalgendec,
      departureGendec: textboxobj == undefined ? '' : textboxobj.departureGendec,
      otherDocuments: textboxobj == undefined ? '' : textboxobj.otherDocuments,
      attachement: obj.attachments,
      fuelid: 0,
      catid: 0,
      airid: 0,
      notFormValid: true,
      arrid: 0,
      depid: 0,
      othid: 0,
    }
  },
  methods: {
    uploadFile(ref, name) {
      var ext = ref.target.files[0].name.split('.').pop();
      if ((name != "other" && (parseFloat(ref.target.files[0].size / (1024 * 1024)).toFixed(2)) <= 2) || (name == "other" && (parseFloat(ref.target.files[0].size / (1024 * 1024)).toFixed(2)) <= 10)) {
        if (ext == "pdf") {
          const formData = new FormData();
          formData.append('file', ref.target.files[0]);
          const headers = {'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
          };
          axios.post(configs.base_url+'/api/general-aviation/media', formData, {headers}).then((res) => {
            if (res.status == 200) {
              if (name == "Fuel Release") {
                this.fuelServices = ref.target.files[0].name;
                this.fuelid = res.data.data.attachments[0].id;
              } else if (name == "Catering Order") {
                this.cateringServices = ref.target.files[0].name;
                this.catid = res.data.data.attachments[0].id;
              } else if (name == "Aircraft Certifications Checklist") {
                this.airCraftCert = ref.target.files[0].name;
                this.airid = res.data.data.attachments[0].id;
              } else if (name == "Arrival Gendec") {
                this.arrivalgendec = ref.target.files[0].name;
                this.arrid = res.data.data.attachments[0].id;
              } else if (name == "Departure Gendec") {
                this.departureGendec = ref.target.files[0].name;
                this.depid = res.data.data.attachments[0].id;
              } else {
                this.otherDocuments = ref.target.files[0].name;
                this.othid = res.data.data.attachments[0].id;
              }
              //  name=="fuel"?this.fuelServices = ref.target.files[0].name :name=="Cater"?
              //  this.cateringServices = ref.target.files[0].name :name=="Aircraft"?
              //  this.airCraftCert = ref.target.files[0].name :name=="Arrival"?
              //  this.arrivalgendec = ref.target.files[0].name :name=="Departure"?
              //  this.departureGendec = ref.target.files[0].name:this.otherDocuments=ref.target.files[0].name;

              this.attachement.push(res.data.data.attachments[0].id);
              this.setDocumentText();
              var obj = JSON.parse(localStorage.data);
              obj.attachments = this.attachement;
              localStorage.setItem('data', JSON.stringify(obj));

            }
          });
        } else {
          toastr.error('file should be in pdf format');
        }
      } else {
        name != "other" ? toastr.error('file size should not exceed 2MB') : toastr.error('File size for other documents should not exceed 10MB');
      }
    },
    deleteFile(ref, name) {
      if (name == "fuel") {
        this.fuelServices = "";
      } else if (name == "Cater") {
        this.cateringServices = "";
      } else if (name == "Aircraft") {
        this.airCraftCert = "";
      } else if (name == "Arrival") {
        this.arrivalgendec = "";
      } else if (name == "Departure") {
        this.departureGendec = "";
      } else {
        this.otherDocuments = "";
      }
      this.attachement = this.attachement.filter(element => element != ref.currentTarget.attributes["fileid"].nodeValue)
      this.setDocumentText();
      var obj = JSON.parse(localStorage.data);
      obj.attachments = this.attachement;
      localStorage.setItem('data', JSON.stringify(obj));
    },
    error() {
      toastr.error('Kindly fillout required fields 🙁');
    },
    setDocumentText() {

      var textboxobj = localStorage.textboxdata != undefined ? JSON.parse(localStorage.textboxdata) : undefined;
      if (textboxobj != undefined) {
        textboxobj.fuelServices = this.fuelServices;
        textboxobj.cateringServices = this.cateringServices;
        textboxobj.airCraftCert = this.airCraftCert;
        textboxobj.arrivalgendec = this.arrivalgendec;
        textboxobj.departureGendec = this.departureGendec;
        textboxobj.otherDocuments = this.otherDocuments;
        localStorage.setItem('textboxdata', JSON.stringify(textboxobj));
      } else {
        var textobjinit = {};
        textobjinit.fuelServices = this.fuelServices;
        textobjinit.cateringServices = this.cateringServices;
        textobjinit.airCraftCert = this.airCraftCert;
        textobjinit.arrivalgendec = this.arrivalgendec;
        textobjinit.departureGendec = this.departureGendec;
        textobjinit.otherDocuments = this.otherDocuments;
        localStorage.setItem('textboxdata', JSON.stringify(textobjinit));
      }
    },
    setData() {
      var obj = JSON.parse(localStorage.data);
      obj.attachments = this.attachement,
          obj.remarks = this.remarks,
          localStorage.setItem('data', JSON.stringify(obj));
    }
  }

}
</script>
<style>
.remark-list {
  margin-bottom: 30px;
}

.remark-list ul {
  padding-left: 15px;
}

.form-service-check .remark-list ul li:not(:last-child) {
  margin-bottom: 10px;
}

.form-service-check .remark-list ul li p {
  font-size: 14px;
  line-height: 24px;
  color: #011e41;
  font-weight: 400;
}

.upload-form {
  position: relative;
}

.upload-form .upload-input {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
}

.delete-icon {
  height: 15px;
}

.delete-icon img {
  height: 100%;
  width: 100%;
}

@media (max-width: 767px) {
  .remark-list {
    margin-bottom: 25px;
  }
}

@media (max-width: 567px) {
  .remark-list {
    margin-bottom: 20px;
  }
}
</style>
