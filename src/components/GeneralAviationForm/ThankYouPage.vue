<template>
  <div class="thank-you-page background-gradient">
    <div class="container">
      <div class="bg-overlay">
        <div class="form-header">
          <router-link to="/">
            <figure class="mb-0 form-logo">
              <img
                class="img-fluid"
                src="../../assets/images/forms-header-logo.png"
              />
            </figure>
          </router-link>
        </div>
        <div class="thankyou-p">
          <h2>Thank you for <br />applying for General Aviation!</h2>

          <p class="mb-4">
            We will send an email to
            <a
              class="contact-links"
              v-bind:href="'mailto:' + booker"
              >{{ booker }}</a
            >
            once your request has been approved.
          </p>
          <p class="">
            If you require any further assistance please contact the Bookings
            Team on 
            <a
              class="contact-links text-decoration-none"
              href="tel:+973 39471116"
              >+973 39471116</a
            > or <a
              class="contact-links text-decoration-none"
              href="mailto:cip@halabahrain.bh"
              >cip@halabahrain.bh</a
            >
          </p>
        </div>
        <div class="d-flex">
          <router-link to="/" class="blue-btn d-inline"
            >Back to home</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      booker: {
        email: localStorage.aviation_user_email,
      },
    };
  },
};
</script>
<style>
.background-gradient {
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.75) 24%,
      #fff 83%
    ),
    url("../../assets/images/thankyou-bg.webp");
  width: 100%;
  height: 100vh;
  background-size: cover;
}
.contact-links {
  color: #011e41;
}
.contact-links:hover {
  color: #011e41;
}
.thankyou-p {
  width: 100%;
  max-width: 700px;
  margin-bottom: 77px;
  margin-top: 60px;
}
.thankyou-p h2 {
  font-size: 50px;
  line-height: 65px;
  margin-bottom: 30px;
}
.thankyou-p p {
  font-size: 18px;
  line-height: 27px;
  font-weight: 600;
}
.thank-you-page .blue-btn {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  padding: 10px 20px;
}
@media (max-width: 991px) {
  .thankyou-p h2 {
    font-size: 40px;
    line-height: 55px;
  }
}
@media (max-width: 767px) {
  .thankyou-p h2 {
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 20px;
  }
  .thankyou-p p {
    font-size: 16px;
    line-height: 24px;
  }
  .thankyou-p {
    margin-bottom: 50px;
    margin-top: 40px;
  }
}
@media (max-width: 575px) {
  .thankyou-p {
    width: 100%;
    margin-bottom: 60px;
  }
  .thankyou-p {
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .thankyou-p h2 {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .thankyou-p p {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
