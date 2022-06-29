<template>
        <div class="services luxurious-exp">
          <div class="service-bg">
              <div class="container">
                  <div class="bg-white service-fixed">
                          <div class="main-page-title">
                              <div class="page-title">
                                  <h2 class=" mx-auto text-center" data-aos="fade-up" data-aos-duration="2500">A luxurious experience</h2>
                                  <p class="mx-auto w-100 mb-lg-4 mb-3" data-aos="fade-up" data-aos-duration="2500">For total comfort and sublime luxury, try our elite services. From your arrival or departure, we will take care of everything. We pride ourselves on extending the warm hospitality Bahrain is known for.</p>
                                  <div class="d-flex justify-content-center"><router-link to="/elite-form" data-aos="fade-bottom" data-aos-duration="2500" class="blue-btn text-uppercase d-inline">book now</router-link></div>
                              </div>
                          </div>
                          <div class="service-card">
                              <div class="row">
                                  <div class="col-lg-6 mb-lg-0 mb-2">
                                      <div class="service-card-style book-service-card" data-aos="fade-up" data-aos-duration="2500">
                                          <div class="d-flex flex-column justify-content-between h-100">
                                              <div class="service-card-body">
                                                  <div class="title-content">
                                                      <strong class="service-title text-capitalize theme mb-lg-3 mb-2 d-block">Common Lounge</strong>
                                                      <p class="service-cost text-uppercase">bhd 100 <span class="text-lowercase gold-text">/adult</span></p>
                                                  </div>
                                                  <div class="service-checklist">
                                                    <ul class="ul_css">
                                                      <li><div class="checklist-points"><span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span><p>50% of the adult rate for children aged 2 to 12</p></div></li>
                                                      <li><div class="checklist-points"><span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span><p>Free entry for infants ( 0 to 2 years old)</p></div></li>
                                                      <li><div class="checklist-points"><span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span><p>10% group discount (5 PAX and above)</p></div></li>
                                                    </ul>
                                                  </div>
                                              </div>
                                              <div class="card-small-text">
                                                  <p class="mb-0">* 10% VAT on the total amount</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-6 mb-lg-0 mb-2">
                                      <div class="service-card-style book-service-card" data-aos="fade-up" data-aos-duration="2500">
                                          <div class="d-flex flex-column justify-content-between h-100">
                                              <div class="service-card-body">
                                                  <div class="title-content">
                                                      <strong class="service-title text-capitalize theme mb-lg-3 mb-2 d-block">Private Lounge</strong>
                                                      <p class="service-cost text-uppercase">bhd 150 <span class="text-lowercase gold-text">/adult</span></p>
                                                  </div>
                                                  <div class="service-checklist">
                                                    <ul class="ul_css">
                                                      <li><div class="checklist-points"><span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span><p>Minimum of 2 adults full fares required to access a Private Lounge</p></div></li>
                                                      <li><div class="checklist-points"><span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span><p>50% of the adult rate for children aged 2 to 12</p></div></li>
                                                      <li><div class="checklist-points"><span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span><p>Free entry for infants ( 0 to 2 years old)</p></div></li>
                                                      <li><div class="checklist-points"><span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span><p>Rates are per passenger capped at a total BHD 600.000 per lounge</p></div></li>
                                                      <li><div class="checklist-points"><span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span><p>Rates apply to standard lounge size with a maximum of 6 passengers per lounge</p></div></li>
                                                    </ul>
                                                  </div>
                                              </div>
                                              <div class="card-small-text">
                                                  <p class="mb-0">* 10% VAT on the total amount</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    </div>
              </div>
          </div>
          <figure class="service-img mb-0" data-aos="zoom-in" data-aos-duration="2500">
                  <img src="../../assets/images/service-bg1.png" class="img-fluid"/>
          </figure>
      </div>
</template>  

<script>
</script>
<style>
.service-card-style.book-service-card{padding:40px 30px;}
.service-card-body .service-cost{  font-size:26px; font-weight:800; line-height:30px; color:#caa17b;}
.gold-text{font-size:16px; font-weight:600; line-height:20px;position: relative;top:-3px}
.service-checklist ul li:not(:last-child){margin-bottom:20px;}
.service-checklist ul li .checklist-points{display:flex; align-items:center;}
.service-checklist ul li .checklist-points .icon{margin-right:10px; width:20px;}
.service-checklist ul li .checklist-points p{font-size:18px; line-height:22px; color: #011e41;}
.card-small-text p{font-size:12px; line-height:16px; color: #011e41;}
.service-img{position: relative;z-index: -1;margin-top: -395px;min-height: 100vh;}
.service-img img{height:100%; width:100%;}
.service-fixed{padding: 100px 95px 95px 95px;}
.service-card-style{padding: 60px 40px; border-radius:0%; border:1px solid #011e41; height:100%;}
.service-card-body{padding-bottom: 60px;}
.service-card-body .title-content{padding-bottom:40px;}
.service-card-body .title-content .icon{margin-right: 20px;}
.service-card-body .title-content .service-title{font-family:"Lora"; font-size:36px; font-weight:500; line-height:30px; color:#011e41;}
.service-card-body p{font-size:20px; line-height:40px;}
.luxurious-exp .main-page-title {padding-bottom:40px;}
/* MEDIA QUERY */
@media (max-width: 1199px) {
.service-fixed{padding:80px 75px 75px 75px;}
.service-card-style {padding: 45px 30px;}
.service-card-body .title-content .service-title{font-size:25px; line-height:30px;}
.service-card-body .title-content{padding-bottom:30px;}
.service-card-body{padding-bottom:50px;}
.service-card-body .title-content .icon{margin-right: 15px;}
.service-card-body p{font-size:18px; line-height:35px;}
.luxurious-exp .main-page-title {padding-bottom:30px;}
}
@media (max-width: 992px) {.service-img{height:600px;}}
@media (max-width: 767px) {
.service-card-body .title-content{padding-bottom:25px;}
.service-fixed{padding:70px 50px 50px 50px;}
.service-card-style{padding: 40px 25px;}
.service-card-body p{font-size:16px; line-height:30px;}
.service-card-body{padding-bottom:40px;}
.luxurious-exp .main-page-title {padding-bottom:20px;}
.service-card-body .service-cost {font-size:20px; line-height:24px;}
.service-checklist ul li:not(:last-child){margin-bottom:16px;}
.comfort-list ul li {width:250px;}
}
@media (max-width: 567px) {
.service-fixed{left:5%; right:5%; }
.service-card-body .title-content .service-title{font-size:22px; line-height:26px;}
.service-card-body .title-content{padding-bottom:15px;}
.service-img{height:450px;}
.service-card-body{padding-bottom:25px;}
.service-card-style {padding: 30px 25px;}
.service-fixed{padding:35px 20px 20px 20px;}
.service-card-body p{font-size:15px; line-height:25px;}
}
@media (max-width: 467px) {
.service-img{display:none}
.service-fixed{position: inherit;}
}
  
</style>
