<template>
  <div class="form-section">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="form-wrapper">
            <h2 data-aos="fade-up" data-aos-duration="2500">{{ heading2 }}</h2>
            <form v-on:submit.prevent="submitForm">
              <div class="form-group" data-aos="fade-up" data-aos-duration="2500">
                <label for="fullname" class="form-label">First Name<span class="asterik">*</span></label>
                <input type="text" class="form-control" @change="checkError" v-model="first_name" id="fullname"
                  placeholder="Enter your full name" />
                <p v-if="firstNameError" class="text-danger">please enter the first name</p>
              </div>
              <div class="form-group" data-aos="fade-up" data-aos-duration="2500">
                <label for="fullname" class="form-label">Last Name<span class="asterik">*</span></label>
                <input type="text" class="form-control" @change="checkError" v-model="last_name" id="fullname"
                  placeholder="Enter your full name" />
                <p v-if="lastNameError" class="text-danger">please enter the last name</p>
              </div>
              <div class="form-group" data-aos="fade-up" data-aos-duration="2500">
                <label for="exampleInputEmail1" class="form-label">Email address<span class="asterik">*</span></label>
                <input type="text" class="form-control" @change="checkError" v-model="email" id="exampleInputEmail1"
                  aria-describedby="emailHelp" placeholder="yourname@exmaple.com" />
                <p v-if="emailError" class="text-danger">please enter valid email address.</p>
              </div>
              <div class="form-group" data-aos="fade-up" data-aos-duration="2500">
                <label for="exampleInputEmail1" class="form-label">Your Message<span class="asterik">*</span></label>
                <textarea class="form-control" @change="checkError" v-model="message"
                  rows="7">What would you like to discuss?</textarea>
                <p v-if="messageError" class="text-danger">please enter your message.</p>
              </div>
              <button data-aos="fade-bottom" data-aos-duration="2500" class="btn-blue">Send
                Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios';
export default {


  props: {
    heading2: String
  },
  name: 'PostFormAxios',
  mounted() {
    window.scrollTo(0, 0)
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      messageError: false,

    }
  },
  methods: {

    checkError() {
      console.log("asdasdasdasda");
      if (this.first_name == '') {
        this.firstNameError = true;
      } else {
        this.firstNameError = false;
      }

      if (this.last_name == '') {
        this.lastNameError = true;
      } else {
        this.lastNameError = false;
      }

      if (this.email == '') {
        this.emailError = true;
      } else if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
        this.emailError = false;
      }
      else {
        this.emailError = true;
      }

      if (this.message == '') {
        this.messageError = true;
      } else {
        this.messageError = false;
      }
    },

    submitForm() {
      //debugger;
      if (this.first_name == '') {
        this.firstNameError = true;
      } else {
        this.firstNameError = false;
      }

      if (this.last_name == '') {
        this.lastNameError = true;
      } else {
        this.lastNameError = false;
      }

      if (this.email == '') {
        this.emailError = true;
      } else if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
        this.emailError = false;
      }
      else {
        this.emailError = true;
      }

      if (this.message == '') {
        this.messageError = true;
      } else {
        this.messageError = false;
      }


      if (!this.firstNameError && !this.lastNameError && !this.emailError && !this.messageError) {

        const formData = new FormData();
        formData.append('first_name', this.first_name);
        formData.append('last_name', this.last_name);
        formData.append('email', this.email);
        formData.append('message', this.append)
        let axiosConfig = {
          headers: {
            'Content-Type': 'Content-Type: multipart/form-data',
          }
        };
        //debugger;
        axios.post('https://awal.viitech.net/api/contact-us', formData, axiosConfig)
          .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            toastr.success('Congratulation! Conform Ticket 🙂');
            //localStorage.removeItem("elitedata");
            //window.location.href='/payment-recevied';
            //this.route='/elite-payement-form';

            this.first_name = '';
            this.last_name = '';
            this.email = '';
            this.message = '';
          })
          .catch((err) => {
            // debugger
            console.log("AXIOS ERROR: ", err);
            toastr.error('Server Error Please Try again.. 🙁');
            //window.location.href='/elite-payement-form';
            //router.go('/payment-recevied');
          })
      }
    }
  }
}
</script>
<style>
.form-section {
  background: url('../../assets/images/map.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.form-wrapper {
  background: #fff;
  padding: 150px 90px;
  margin-bottom: 100px;
}

.form-wrapper h2 {
  margin-bottom: 40px;
}

.form-wrapper .form-label {
  margin-bottom: 15px;
  color: #011e41;
  font-size: 20px;
  line-height: 27px;
  font-weight: 600;
}

.form-wrapper form .form-group {
  margin-bottom: 40px;
}

.form-wrapper .form-control {
  border: 1px solid #4d627a !important;
  padding: 5px 10px;
  height: 50px;
  background: transparent;
  box-shadow: none !important;
  outline: none !important;
  border-radius: 0;
}

.form-wrapper .form-control::placeholder {
  color: #888;
}

.form-wrapper textarea.form-control {
  height: auto;
}

.btn-blue {
  font-size: 18px;
  letter-spacing: 3px;
  color: #fff;
  background: #011e41;
  font-weight: 600;
  border: 1px solid #011e41;
  padding: 12px 30px;
  text-transform: uppercase;
  font-family: 'Lora';
}

.btn-blue:hover {
  background: transparent;
  color: #011e41;
}

@media (max-width: 1199px) {
  .form-wrapper {
    padding: 100px 70px;
  }

  .form-wrapper h2 {
    margin-bottom: 30px;
  }

  .form-wrapper form .form-group {
    margin-bottom: 30px;
  }
}

@media (max-width: 991px) {
  .form-wrapper {
    padding: 70px 40px;
    margin-bottom: 60px;
  }

  .form-wrapper h2 {
    margin-bottom: 20px;
  }

  .form-wrapper form .form-group {
    margin-bottom: 20px;
  }
}

@media (max-width: 767px) {}

@media (max-width: 567px) {
  .form-wrapper {
    padding: 40px 20px;
    margin-bottom: 40px;
  }

  .btn-blue {
    font-size: 16px;
    letter-spacing: 2px;
  }
}
</style>