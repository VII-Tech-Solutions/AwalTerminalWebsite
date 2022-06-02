<template>
    <section class="banner">
        <div class="container">
            <div class="row ">
                <div class="col-12">
                    <div class="banner-content" data-aos="fade-up" data-aos-duration="2500">
                        <strong class="heading-top">{{HeadingTopText}}</strong>
                        <h1>{{MainHeading}}</h1>
                        <span class="sub-heading">{{SubHeading}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
//      props: {
//     HeadingTopText: String,
//     MainHeading: String,
//     SubHeading: String,
//     image: String,
//   },
    name: "Banner",
    data() {
        return {
            HeadingTopText: "Welcome to Awal Private Terminal",
            MainHeading: "We’ll take it from here",
            SubHeading: "Awal Private Terminal is setting new standards of luxury for private aircraft users and Elite guests on commercial flights.",
        };
    },
}

</script>
<style>
.banner {
    background: url("../../assets/images/banner-img.jpg");
    background-position: top center;
    background-size: cover;
    height: 100vh;
    position: relative;
    z-index: 1;
    color: #fff;
    display: flex;
    align-items: flex-end;
    padding: 60px 0;
    background-attachment: fixed;
}
.banner-content {
    /* position: absolute;
    bottom: 0;
    margin-bottom: 60px; */
}
.banner-content .heading-top{
    font-size: 20px;
    line-height: 1.7;
    text-transform: uppercase;
    font-weight: 600;
}
.banner-content .sub-heading{
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    width: 100%;
    max-width: 604px;
    display: inline-block;
}
@media (max-width: 991px) {
    .banner-content .sub-heading{width: 80%;}
}
@media (max-width: 767px){
    .banner-content .sub-heading {width: 90%;}
    .banner-content .sub-heading {font-size: 16px;line-height: 1.3;}
    .banner{
        padding: 40px 0;
    }
}
@media (max-width: 575px){
    .banner-content .sub-heading {width: 100%;}
    .banner-content .heading-top {font-size: 18px;line-height: 1.5;}
}
</style>