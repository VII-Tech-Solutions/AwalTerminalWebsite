
<template>
    <div class="comfort-service">
       <div class="container">
        <div class="main-page-title">
            <div class="horizon" data-aos="fade-up" data-aos-duration="2500"><span class="page-subtitle text-uppercase">{{headingTop2}}</span></div>
            <div class="page-title" data-aos="fade-up" data-aos-duration="2500">
                <h2 class=" mx-auto text-center">{{heading4}}</h2>
                <p class="mx-auto" v-html="paragraph3"></p>
            </div>
        </div>
        <div class="comfort-grid-cards" data-aos="fade-up" data-aos-duration="2500">
            <div class="comfort-card"><p class="comfort-card-title">Landing Permit</p></div>
            <div class="comfort-card"><p class="comfort-card-title">Fuel Services</p></div>
            <div class="comfort-card"><p class="comfort-card-title">catering</p></div>
            <div class="comfort-card"><p class="comfort-card-title">passenger limo service</p></div>
            <div class="comfort-card"><p class="comfort-card-title">Hotel Reservation</p></div>
            <div class="comfort-card"><p class="comfort-card-title"> Crew Transport</p></div>
            <div class="comfort-card"><p class="comfort-card-title">Toilet & Water Service </p></div>
            <div class="comfort-card"><p class="comfort-card-title">Air Conditioning Unit (ACU)</p></div>
            <div class="comfort-card"><p class="comfort-card-title">Air Start Unit (ASU) </p></div>
            <div class="comfort-card"><p class="comfort-card-title">Ground Power Unit (GPU) </p></div>
        </div>
        <div class="container"><div class="mx-auto text-center" data-aos="fade-bottom" data-aos-duration="2500">
            
            
                <router-link to="/general-aviation-form1" class="text-uppercase blue-btn text-center">book general aviation</router-link>
                </div></div>
       </div>
    </div>
</template>
<script>

export default {
    props: {
        headingTop2: String,
        heading4: String,
        paragraph3: String
    }
}
</script>
<style>
.comfort-grid-cards {display:grid; grid-template-columns:repeat(5, 1fr); grid-template-rows:repeat(2, auto); gap:13px; margin-inline:auto; padding-bottom:60px;  grid-template-columns: repeat(auto-fill, 200px); justify-content:center;}
.comfort-grid-cards .comfort-card {display:flex; align-items:center; justify-content:center; height:214px; border:1px solid #011e41; background-color:transparent; padding:15px; transition:all ease-in-out .3s;}
.comfort-card .comfort-card-title {font-family:"Lora"; color: #011e41; text-transform:capitalize; text-align:center; line-height:24px; transition:all ease-in-out .4s;}
.comfort-grid-cards .comfort-card:hover {background-color:#011e41; transform: scale(1.1);}
.comfort-grid-cards .comfort-card:hover .comfort-card-title{color:#fff;}
@media (max-width:768px) {
.comfort-grid-cards{padding-bottom:30px;}
}
</style>