<template>
    <div class="fascilities section-bottom">
        <div class="container">
        <div class="main-page-title" data-aos="fade-up" data-aos-duration="2500">
            <div class="horizon"><span class="page-subtitle text-uppercase">The only way to travel</span></div>
            <div class="page-title">
                <h2 class="text-capitalize mx-auto text-center">{{heading3}}</h2>
            </div>
        </div>
        <div class="fascilities-list">
            <ul class="ul_css" >
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/weekend.svg" alt="couch" class=" img-fluid"/>
                        </span>
                        <p>{{bulletPoint1}}</p>
                    </div>
                </li>
                 <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                          <img src="../../assets/images/icons/mosque.svg" alt="weekend" class=" img-fluid"/>
                        </span>
                        <p>{{bulletPoint2}}</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/shield.svg" alt="shield" class=" img-fluid"/>
                        </span>
                        <p>{{bulletPoint3}}</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/person.svg" alt="person" class=" img-fluid"/>
                        </span>
                        <p>{{bulletPoint4}}</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/car.svg" alt="car" class=" img-fluid"/>
                        </span>
                        <p>{{bulletPoint5}}</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/groups.svg" alt="groups" class=" img-fluid"/>
                        </span>
                        <p>{{bulletPoint6}}</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/parking.svg" alt="parking" class=" img-fluid"/>
                        </span>
                        <p>{{bulletPoint7}}</p>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2500">
                    <div class="fascilities-item d-flex align-items-start">
                        <span>
                            <img src="../../assets/images/icons/luggage.svg" alt="luggage" class=" img-fluid"/>
                        </span>
                        <p>{{bulletPoint8}}</p>
                    </div>
                </li>
            </ul>
            <div class="d-flex justify-content-center">
                <router-link to="/tour" data-aos="fade-bottom" data-aos-duration="2500" href="#" class="blue-btn text-uppercase d-inline">Take a tour</router-link>
            </div>
        </div>
       </div>
    </div>
</template>
<script>
export default {
 props: {
    heading3: String,
    bulletPoint1: String,
    bulletPoint2: String,
    bulletPoint3: String,
    bulletPoint4: String,
    bulletPoint5: String,
    bulletPoint6: String,
    bulletPoint7: String,
    bulletPoint8: String,
  },
}

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