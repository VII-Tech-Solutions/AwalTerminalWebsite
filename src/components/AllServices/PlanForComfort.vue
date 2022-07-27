<template>
        <div class="plan-for-comfort">
            <div class="container">
                <div class="main-page-title">
                    <div class="horizon pb-0 mb-lg-4 mb-3" data-aos="fade-up" data-aos-duration="2500"><span class="page-subtitle text-uppercase">how to book</span></div>
                </div>
                <div class="row">
                    <div class="col-md-6" data-aos="fade-up" data-aos-duration="2500">
                        <div class="page-title" >
                            <h2>{{heading4}}</h2>
                        </div>
                        <div class="comfort-checklist">
                            <ul class="ul_css">
                                <li><div class="comfort-checklist-points"><span class="icon"><img src="../../assets/images/icons/computer.svg" alt="luggage" class=" img-fluid"/></span><p>Book on our online portal </p></div></li>
                                    <li><div class="comfort-checklist-points"><span class="icon"><img src="../../assets/images/icons/schedule.svg" alt="luggage" class=" img-fluid"/></span><p>Available 24/7</p></div></li>
                            </ul>
                        </div>
                        <div class="custom-mb mb-lg-5 mb-3">
                            <p class="text-start w-100 custom-mb">Once your booking is received, our team will review the details and an email will be sent back confirming the booking.</p>
                            <strong><p class="theme-color fw-bold">Requests require a minimum of 24 hours to be confirmed.</p></strong>
                        </div>
                    </div>
                    <div class="col-md-4 offset-lg-2 offset-md-1" >
                        <figure class="mb-0 plan-img">
                            <img :src="squareImage1" class="img-fluid" alt="Plan For Comfort">
                        </figure>
                    </div>
                </div>
                <div class="booking-details">
                    <div data-aos="fade-up" data-aos-duration="2500">
                        <p class="mb-lg-4 mb-3">{{paragraph3}}:</p>
                        <div class="comfort-list">
                            <ul class="ul_css" >
                                <li>
                                    <div class="fascilities-item d-flex align-items-center">
                                        <span>
                                            <img src="../../assets/images/icons/person.svg" alt="luggage" class=" img-fluid"/>
                                        </span>
                                        <p class="text-capitalize">{{bulletPoint1}}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="comfort-item d-flex align-items-center">
                                        <span>
                                            <img src="../../assets/images/icons/event.svg" alt="luggage" class=" img-fluid"/>
                                        </span>
                                        <p class="text-capitalize">{{bulletPoint5}}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="comfort-item d-flex align-items-center">
                                        <span>
                                            <img src="../../assets/images/icons/date-range.svg" alt="luggage" class=" img-fluid"/>
                                        </span>
                                        <p class="text-calendar">{{bulletPoint2}}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="comfort-item d-flex align-items-center">
                                        <span>
                                            <img src="../../assets/images/icons/flight.svg" alt="luggage" class=" img-fluid"/>
                                        </span>
                                        <p class="text-capitalize">{{bulletPoint6}}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="comfort-item d-flex align-items-center">
                                        <span>
                                            <img src="../../assets/images/icons/flag.svg" alt="luggage" class=" img-fluid"/>
                                        </span>
                                        <p class="text-capitalize">{{bulletPoint3}}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="comfort-item d-flex align-items-center">
                                        <span>
                                            <img src="../../assets/images/icons/groups.svg" alt="luggage" class=" img-fluid"/>
                                        </span>
                                        <p class="text-capitalize">{{bulletPoint7}}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="comfort-item d-flex align-items-center">
                                        <span>
                                            <img src="../../assets/images/icons/tag.svg" alt="luggage" class=" img-fluid"/>
                                        </span>
                                        <p class="text-capitalize">{{bulletPoint4}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="contact-address d-block" data-aos="fade-up" data-aos-duration="2500">
                        <p>For further assistance, please contact the Bookings Team on <a class="phone" href="tel:+973 39471116">
                        +973 39471116</a> or <span class="effect-span"><a class="mail effect-box" href="mailto:cip@halabahrain.bh">cip@halabahrain.bh</a></span></p>
                    </div>
                     <div class="d-flex justify-content-start">
                        <router-link to="/elite-form" data-aos="fade-bottom" data-aos-duration="2500" class="blue-btn text-uppercase d-inline">Book Elite Services</router-link>
                    </div>
                </div>
            </div>
        </div>
</template>  

<script>
export default {

    props: {
        heading4: String,
        paragraph3: String,
        bulletPoint1: String,
        bulletPoint2: String,
        bulletPoint3: String,
        bulletPoint4: String,
        bulletPoint5: String,
        bulletPoint6: String,
        bulletPoint7: String,
        squareImage1: String,
        
    },
}
</script>
<style>
.plan-for-comfort{padding:150px 0px;}
.plan-for-comfort .page-title h2{padding-bottom:30px;}
.custom-mb{margin-bottom:40px;}
.comfort-checklist ul li{margin-bottom:30px;}
.comfort-checklist ul li .comfort-checklist-points{display:flex; align-items:center;}
.comfort-checklist ul li .comfort-checklist-points .icon{margin-right:20px; width:30px;}
.comfort-checklist ul li .comfort-checklist-points p{color: #011e41; text-align:start; width:100%; line-height:1.5;}
.comfort-list ul{padding-bottom:60px; display:grid; grid-template-columns:repeat(2, 1fr); gap:30px; width:80%;}
.comfort-item span{margin-right:20px; width:30px; height:30px; display:flex; align-items:center;}
.comfort-item span .fa{width:30px; height:30px;}
.comfort-item span .svg-inline--fa{color: #011e41; fill: #011e41;}
.contact-address{padding-bottom:50px}  
.comfort-item p{text-align:start; width:auto; line-height:1.5;}
.contact-address p{line-height:1.5;}
.contact-address .phone, .contact-address .mail{color: #011e41;background-color:transparent;transition:all ease-in-out .3s;}
.icon-none{opacity: 0;}
/* .contact-address .phone:hover{border} */
.contact-address .phone{text-decoration:none;}
@media (max-width:1199px) {
.plan-for-comfort{padding:100px 0px;}
.plan-for-comfort .page-title h2{padding-bottom:25px;}
.comfort-checklist ul li {margin-bottom: 25px;}
.plan-for-comfort h2{font-size:35px; line-height:39px;}
.contact-address{padding-bottom:54px}
/* .plan-for-comfort p{font-size:16px; line-height:20px;} */
.custom-mb{margin-bottom:20px;}
}
@media (max-width:767px) {
.plan-for-comfort{padding:80px 0px;}
.comfort-list ul{padding-bottom:60px; gap:18px; width:100%;}
.booking-details{padding-top:50px;}
.plan-for-comfort .page-title h2{padding-bottom:18px;}
.contact-address{padding-bottom:30px}
}
@media (max-width:567px) {
.plan-img{width:300px; margin:auto;}
.contact-address{padding-bottom:25px}
}
@media (max-width:467px) {
.plan-img{width:250px;}
.comfort-list ul{padding-bottom:40px; display:flex; flex-wrap:wrap;}
.comfort-list ul li{margin-right:20px;}
}
</style>
