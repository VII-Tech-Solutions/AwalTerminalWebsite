<template>
    <section class="two-fold two-fold-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 offset-lg-5">
                    <div class="two-fold-content" >
                        <h2 data-aos="fade-up" data-aos-duration="2500">{{heading3}}</h2>
                        <div data-aos="fade-up" data-aos-duration="2500">
                            <div class="two-fold-inner-text">
                                <p>{{paragraph3}}</p>
                            </div>
                            <ul class="tailored-list p-0" data-aos="fade-up" data-aos-duration="2500">
                                <li class="d-flex align-items-center">
                                    <div class="tailored-icon">
                                        <img src="../../../assets/images/icons/weekend.svg" alt="couch" class="icon img-fluid"/>
                                    </div>
                                    <p>{{bulletPoint1}}</p>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="tailored-icon">
                                        <img src="../../../assets/images/icons/drive-eta.svg" alt="couch" class="icon img-fluid"/>
                                    </div>
                                    <p>{{bulletPoint2}} </p>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="tailored-icon">
                                        <img src="../../../assets/images/icons/luggage.svg" alt="couch" class="icon img-fluid"/>
                                    </div>
                                    <p>{{bulletPoint3}}</p>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="tailored-icon">
                                        <img src="../../../assets/images/icons/groups.svg" alt="couch" class="icon img-fluid"/>
                                    </div>
                                    <p>{{bulletPoint4}}</p>
                                </li>
                                <li class="d-flex align-items-center mb-0">
                                    <div class="tailored-icon">
                                        <img src="../../../assets/images/icons/person.svg" alt="couch" class="icon img-fluid"/>
                                    </div>
                                    <p>{{bulletPoint5}}</p>
                                </li>
                            </ul>
                            <router-link to="/services" data-aos="fade-bottom" data-aos-duration="2500" class="common-btn">All services</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props:{
        heading3:  String,
        paragraph3: String,
        bulletPoint1: String,
        bulletPoint2: String,
        bulletPoint3: String,
        bulletPoint4: String,
        bulletPoint5: String
    },
    name: "TwoFolderModule2",
}
</script>