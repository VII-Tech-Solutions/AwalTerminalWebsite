<template>
    <div class="fascilities section-bottom">
        <div class="container">
        <div class="main-page-title" data-aos="fade-up" data-aos-duration="2500">
            <div class="horizon"><span class="page-subtitle text-uppercase">The only way to travel</span></div>
            <div class="page-title">
                <h2 class="text-capitalize mx-auto text-center">Facilities & Services</h2>
            </div>
        </div>
        <div class="fascilities-list">
            <ul class="ul_css" >
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/weekend.svg" alt="couch" class=" img-fluid"/>
                        </span>
                        <p>8 private lounges as well as common loungess</p>
                    </div>
                </li>
                 <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                          <img src="../../assets/images/icons/mosque.svg" alt="weekend" class=" img-fluid"/>
                        </span>
                        <p>Prayer rooms for men and women</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/shield.svg" alt="shield" class=" img-fluid"/>
                        </span>
                        <p>Dedicated immigration and police screening areas</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/person.svg" alt="person" class=" img-fluid"/>
                        </span>
                        <p>Personal assistant for Duty-Free shopping</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/car.svg" alt="car" class=" img-fluid"/>
                        </span>
                        <p>Dedicated car service between the Awal Private Terminal and departure gates/ flights</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/groups.svg" alt="groups" class=" img-fluid"/>
                        </span>
                        <p>The terminal is also open to passengers' guests who are not traveling</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/parking.svg" alt="parking" class=" img-fluid"/>
                        </span>
                        <p>Convenient VIP parking and drop-off at the curbside for quick access</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/luggage.svg" alt="luggage" class=" img-fluid"/>
                        </span>
                        <p>All travel formalities, including check-in, immigration, and baggage are handled by a personal assistant</p>
                    </div>
                </li>
            </ul>
            <div class="d-flex justify-content-center">
                <a data-aos="fade-bottom" data-aos-duration="2500" href="#" class="blue-btn text-capitalize d-inline">Take a tour</a>
            </div>
        </div>
       </div>
    </div>
</template>
<script>
</script>
<style>
.fascilities-list ul{padding-bottom:100px; display:grid; grid-template-columns:repeat(2, 1fr) ;gap:50px;}
.fascilities-item p {
    line-height: 30px;
}
.fascilities-item span{margin-right:20px; width:30px; height:30px; display:flex; align-items:center;}
.fascilities-item span .fa{width:30px; height:30px;}
.fascilities-item span .svg-inline--fa{color: #011e41; fill: #011e41;}     
    
/* .fascilities-list ul{padding-bottom:100px; column-count:2; gap:50px;}
.fascilities-list ul li{margin-bottom: 50px;} */
/* MEDIA QUERY */
@media (max-width: 1199px) {
.fascilities-list ul{padding-bottom:80px; gap:40px;}
}
@media (max-width: 767px) {
.fascilities-list ul{padding-bottom:50px; gap:30px;}
}
@media (max-width: 567px) {
.fascilities-item span{margin-right:15px;}
.fascilities-list ul{display:flex; flex-wrap:wrap; gap:20px;}
}
</style>