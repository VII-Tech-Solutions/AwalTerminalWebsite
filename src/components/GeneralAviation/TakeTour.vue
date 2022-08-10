
<template>
    <div class="take-tour">
       <div class="container">
        <div>
            <div class="horizon" data-aos="fade-up" data-aos-duration="2500"><span class="page-subtitle text-uppercase">Private lounges, delightful dining, and luxurious shopping</span></div>
            <div class="page-title" data-aos="fade-up" data-aos-duration="2500">
                <h2 class=" mx-auto text-center">{{heading5}}</h2>
            </div>
        </div>
        <div class="take-tour-details" >
            <figure data-aos="fade-up" data-aos-duration="2500">
                <img class="img-fluid"  :src="image_1" />
            </figure>
            <p class="text-center" data-aos="fade-up" data-aos-duration="2500">{{paragraph4}}</p>
            <div class="d-flex justify-center align-center"><button class="common-btn mx-auto" data-aos="fade-bottom" data-aos-duration="2500" @click="$router.push('tour')">tour the terminal</button></div>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    props: {
        heading5: String,
        paragraph4: String,
        image_1:String
    }
}
</script>
<style>
.take-tour-details{width:70%; margin:0 auto;}
.take-tour-details > p, .take-tour-details > figure{margin-bottom:40px;}
@media (max-width:1199px) {
.take-tour-details > p, .take-tour-details > figure{margin-bottom:30px;}
}
@media (max-width:767px) {
.take-tour-details{width:80%;}
.take-tour-details > p, .take-tour-details > figure{margin-bottom:25px;}
}
@media (max-width:567px) {
.take-tour-details{width:100%;}
}
</style>