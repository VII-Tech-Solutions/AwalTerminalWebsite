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
                    <h2>Thank you for <br>booking the Elite Service!</h2>
                        <p class="mb-4 ">We will send an email to <a class="contact-links" v-bind:href="'mailto:'+booker.email" >{{ booker.email }}</a> to complete the payment process and reserve your booking.</p>
                        <p class="">If you require any further assistance please contact the Bookings Team on  <a class="contact-links text-decoration-none" href="tel:+973 39471116">+973 39471116</a> or <a class="contact-links text-decoration-none" href="mailto:cip@halabahrain.bh">cip@halabahrain.bh</a></p>
                </div>
                <div class="d-flex"><router-link to="/" class="blue-btn d-inline">Back to home</router-link></div>
            </div>
        </div>
    </div>    
</template>  
<script>

export default {

    data() {

        var obj = JSON.parse(localStorage.elitedata);
        return {
           
            booker: {
                email: obj.booker.email
            },
            
        }

    },
    methods: {

        setData() {

            //toastr.info('Are you sure you want to buy ');

            var obj = {};
   
            obj.booker = this.booker;
          localStorage.removeItem("elitedata");

        },

        
    },

     
}
</script>
<style>
.elite.background-gradient{
    background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.75) 24%, #fff 83%),
    url('../../assets/images/luxury-view2.jpg');
}
.elite .thankyou-p{width:100%;max-width: 600px;}

</style>
