<template>
  <div class="form-section">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="form-wrapper">
            <h2 data-aos="fade-up" data-aos-duration="2500">Leave us a message</h2>
            <form >
                <div class="form-group" data-aos="fade-up" data-aos-duration="2500">
                <label for="fullname" class="form-label"
                  >Full Name*</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  placeholder="Enter your full name"
                />
              </div>
              <div class="form-group" data-aos="fade-up" data-aos-duration="2500">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="yourname@exmaple.com"
                />
                
              </div>
              <div class="form-group" data-aos="fade-up" data-aos-duration="2500">
                <label for="exampleInputEmail1" class="form-label"
                  >Your Message*</label
                >
               <textarea class="form-control" rows="7">What would you like to discuss?</textarea>
                
              </div>
             
              <button data-aos="fade-bottom" data-aos-duration="2500" type="submit" class="btn-blue">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
.form-section {background: url('../../assets/images/map.jpg');background-repeat: no-repeat;
    background-size: cover; }

.form-wrapper {background: #fff;padding: 150px 90px;margin-bottom: 100px;}

.form-wrapper h2 {margin-bottom: 40px;}

.form-wrapper .form-label {margin-bottom: 15px;color: #011e41;font-size: 20px;line-height: 27px;font-weight: 600;}

.form-wrapper form .form-group {margin-bottom: 40px ;}

.form-wrapper .form-control {border: 1px solid #4d627a;padding: 5px 10px;height: 50px;background: transparent;box-shadow: none;outline: none;border-radius: 0;}
.form-wrapper textarea.form-control{height: auto;}
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
    margin-bottom: 30px ;
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
    margin-bottom: 20px ;
}
}
@media (max-width: 767px) {
}
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