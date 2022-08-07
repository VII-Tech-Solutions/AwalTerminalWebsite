
<template>
   
      <footer>              
           <div class="footer-bottom">
                <div class="footer-nav">
                    <div class="container">
                        <div class="footer-logo">
                            <figure class="mb-0 logo-img">
                                <img src="../../assets/images/footer-logo.svg" class="img-fluid" alt="Site Logo" />
                            </figure>
                        </div>
                        <div class="footer-nav-links">
                            <ul>
                                <li><router-link to="/" class="text-capitalize">Home</router-link></li>
                                <li><router-link to="/tour" class="text-capitalize">Tour the terminal</router-link></li>
                                <li><router-link to="/story" class="text-capitalize">Our Story</router-link></li>
                                <li><router-link to="/services" class="text-capitalize">All Services</router-link></li>
                                <li><router-link to="/contact" class="text-capitalize">Contact Us</router-link></li>
                            </ul>
                        </div>
                        <div class="operated-by">
                            <span>Operated by</span>
                            <div class="image">
                                <img src="/images/operated-by.png" alt="" class="img-fluid"/>
                            </div>
                        </div>
                   </div>
              </div>
               <div class="footer-copyright">
                    <div class="container">
                        <div class="d-flex align-items-center justify-content-md-between justify-content-center footer-copyright-content">
                            <div class="footer-copyrigt-links">
                                <ul>
                                    <li><router-link class="text-capitalize" to="/terms-conditions">Terms & Conditions</router-link></li>
                                    <li><router-link class="text-capitalize" to="/privacy-policy">Privacy Policy</router-link></li>
                                    <li><router-link class="text-capitalize" to="/">Cookies Policy</router-link></li>
                                </ul>
                            </div>
                            <p>Awal Terminal Building. © 2022 All rights reserved.</p>
                        </div>
                   </div>
              </div>
           </div>
      </footer>
    
</template>


<script>
export default {
 
}
</script>

                                

<style>
.footer-service {
    background-image: url('../../assets/images/footer-img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-content: flex-end;
    padding: 100px 0;
    background-attachment: fixed;
}
.footer-service.services-bg {
    background-image: url('../../assets/images/service-footer-bg.jpg');
}
.footer-service.tour-bg {
    background-image: url('../../assets/images/tour-footer-bg.jpg');
}
.footer-service.story-bg {
    background-image: url('../../assets/images/story-footer-bg.jpg');
}
.footer-service.elite-story-bg {
    background-image: url('../../assets/images/elite-footer-bg.jpg');
}
.footer-service.GeneralAviation-bg {
    background-image: url('../../assets/images/general-service-footer-bg.jpg');
}
.footer-service.privacy-bg {
    background-image: url('../../assets/images/privacy-bg.jpg') !important;
}
.footer-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
}
.footer-booking {
    margin-bottom: 20px;
}
.footer-content > a {
    margin-bottom: 40px;
}
.footer-service .footer-content .service-list ul{
    display: flex;
    align-items: baseline;
    padding-left: 0px;
    margin-bottom: 0px;
    list-style: none;
}
.footer-service .footer-content .service-list ul li:not(:last-child) {
    margin-right: 20px;
}
.footer-service .footer-content .service-list ul li figure {
    margin-bottom: 20px;
    width: 170px;
    height: 170px;
}
.footer-service .footer-content .service-list ul li figure img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.footer-service .footer-content .service-list ul li > .footer-list-element > p {
  /* font-family: SourceSansPro; */
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 27px;
  letter-spacing: normal;
  color: #fff;
}
.footer-nav .logo-img {
    margin-right: 60px;
    width: 65px;
}
.footer-nav {
    padding: 30px 0px;
    border-bottom: 2px solid #f0f0f1
}
.footer-nav > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.footer-nav .footer-nav-links ul {
    display: flex;
    align-items: center;
    padding-left: 0px;
    margin-bottom: 0px;
    list-style: none;
}
.footer-nav .footer-nav-links ul li a{
  font-family: Lora;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #011e41;
  text-decoration: none;
  position: relative;
}
.footer-nav .footer-nav-links ul li:not(:last-child) {
    margin-right: 50px;
}
.footer-nav .footer-nav-links ul li a:after {
	content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100%;
    border-bottom: 2px solid;
    margin-top: 10px;
    opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
}
.footer-nav .footer-nav-links ul li a:hover:after {
  opacity: 1;
 -webkit-transform: scale(1);
 transform: scale(1);
}
.footer-copyright {
    padding: 20px 0px;
}
.footer-copyright p{
  font-family: Lora;
  font-size: 11px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 15px;
  letter-spacing: normal;
  color: #011e41;
  text-decoration: none;
}
.footer-copyright .footer-copyrigt-links ul {
    display: flex;
    align-items: center;
    padding-left: 0px;
    margin-bottom: 0px;
    list-style: none;
}
.footer-copyright .footer-copyrigt-links ul li a{
  font-family: Lora;
  font-stretch: normal;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: normal;
  color: #011e41;
  text-decoration: none;
  font-size: 11px;
    font-weight: 600;
}
.footer-copyright .footer-copyrigt-links ul li:not(:last-child) {
    margin-right: 40px;
}
@media (max-width: 991px) {
    .footer-service .footer-content .service-list ul li figure{width: 150px; height: auto;}
    .footer-service{min-height: 80vh;padding: 50px 0;background-attachment: scroll;}
    .footer-copyright .footer-copyrigt-links ul li:not(:last-child) {margin-right: 25px;}
.footer-nav > div{flex-direction: column;}
.footer-nav .logo-img{
    margin-right: 0;
}
.footer-nav-links{margin: 30px 0;}
}
@media (max-width: 767px) {
    .footer-service .footer-content .service-list ul li figure{width: 130px;}
    .white-btn{padding: 12px 15px !important;}
    .footer-content > a {margin-bottom: 30px;}
    .footer-list-element{display: flex;flex-direction: column;align-items: center;}
    .footer-nav .logo-img{margin-right: 40px}
    .footer-nav .footer-nav-links ul li:not(:last-child) {margin-right: 25px;}
    .footer-nav{padding: 25px 0;}
    .footer-copyright-content{flex-wrap: wrap;justify-content: center;}
    .footer-copyright .footer-copyrigt-links ul{margin-bottom: 15px;}
}
@media (max-width: 575px) {
    .footer-service{padding: 20px 0;}
    .footer-nav{padding:15px 0;}
    .footer-service .footer-content {text-align:center; align-items:center;}
    .footer-service .footer-content .service-list ul li figure {width: 110px;}
    .footer-service .footer-content .service-list ul li > .footer-list-element > p{font-size: 16px;line-height: 20px;}
    .white-btn {padding: 10px 15px !important;font-size: 16px;line-height: 20px;}
    .footer-service .footer-content .service-list ul {flex-wrap: wrap;justify-content: center;}
    .footer-list-element{margin-bottom: 20px;}
    .footer-nav > div{display: block;text-align: center;}
    .footer-nav .logo-img{margin-right: 0;margin-bottom: 20px !important;}
    .footer-nav .footer-nav-links ul{justify-content: center;flex-wrap: wrap;}
    .footer-nav .footer-nav-links ul li{margin-right: 20px;margin-bottom: 10px}
    .footer-copyright .footer-copyrigt-links ul{flex-wrap: wrap;justify-content: center;}
    .footer-service .footer-content .service-list ul li:not(:last-child) {margin-right:10px;}
}
</style>