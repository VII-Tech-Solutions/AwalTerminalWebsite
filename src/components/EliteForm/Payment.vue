<template>
    <div class="elite thank-you-page background-gradient">
        <div class="container">
            <div class="bg-overlay">
                <div class="form-header">
                    <router-link to="/">
                        <figure class="mb-0 form-logo">
                            <img class="img-fluid" src="../../assets/images/forms-header-logo.png"/>
                        </figure>
                    </router-link>
                </div>
                <div class="thankyou-p">
                    <h2>Your payment has  <br>been received!</h2>
                        <p class="mb-4 ">Thank you for booking the Elite Service.<br/>The details of your booking has been sent to <a class="contact-links" href="mailto:ahmad@example.com">ahmad@example.com</a> </p>
                        <p class="">If you require any further assistance please contact the Bookings Team on  <a class="contact-links text-decoration-none" href="tel:+973 39471116">+973 39471116</a> or <a class="contact-links text-decoration-none" href="mailto:cip@halabahrain.bh">cip@halabahrain.bh</a></p>
                </div>
                <div class="d-flex"><router-link to="/" class="blue-btn d-inline">Back to home</router-link></div>
            </div>
        </div>
    </div>    
</template>  

<script>
</script>
<style>
.elite.background-gradient{
    background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.75) 24%, #fff 83%),
    url('../../assets/images/luxury-view2.jpg');
}
.elite .thankyou-p{width:100%;max-width: 600px;}

</style>
