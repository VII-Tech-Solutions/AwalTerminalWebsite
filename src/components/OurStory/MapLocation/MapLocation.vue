<template>
	<Section class="map-location">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="location-wrapper">
						<div class="loaction-heading" data-aos="fade-up" data-aos-duration="2500">
							<h2 >{{heading4}}</h2>
							<p>{{paragraph2}}</p>
						</div>
						<div class="company-logo" data-aos="fade-in" data-aos-duration="2500">
							<a href="https://www.google.com/maps/place/Awal+Private+Terminal/@26.2723455,50.6232724,15z/data=!4m5!3m4!1s0x0:0x8fb53419757a27f1!8m2!3d26.2723455!4d50.6232724" target="_blank">
							<img class="img-fluid" src="../../../assets/images/company-logo.png" alt="Logo">
							</a>
						</div>
					</div>
					<div class="map-img" data-aos="fade-up" data-aos-duration="2500" >
						<a href="https://www.google.com/maps/place/Awal+Private+Terminal/@26.2723455,50.6232724,15z/data=!4m5!3m4!1s0x0:0x8fb53419757a27f1!8m2!3d26.2723455!4d50.6232724" target="_blank">
							<img class="img-fluid" src="../../../assets/images/map-location.jpg" alt="Map Image">
						</a>
					</div>
				</div>
			</div>
		</div>
	</Section>
</template>

<script >
export default {
    props: {
        heading4: String,
        paragraph2: String,
        quote1: String,
        image1: String
    },
    name: "MapLocation",
    // data() {
    //     return {
    //         HeadingTopText: "Welcome to Awal Private Terminal",
    //         MainHeading: "We'll take it from here",
    //         SubHeading: "Awal Private Terminal is setting new standards of luxury for private aircraft users and Elite guests on commercial flights.",
    //     };
    // },
}

</script>


<style>
.map-location{padding: 0 0 57px 0}
.location-wrapper{margin-bottom: 50px;display: flex;justify-content: space-between;}
.loaction-heading{max-width: 58%}
.company-logo{width: 185px;height: 185px;margin-top: 18px}
@media (max-width: 991px) {
	.loaction-heading {max-width: 68%;}
	.company-logo{margin-top: 14px;}
	.map-location {padding: 0 0 40px 0;}
}
@media (max-width: 767px) {
	.company-logo{width: 100%;height: auto;margin-top: 10px}
	.map-location {padding: 0 0 30px 0;}
}
@media (max-width: 575px){
	.location-wrapper{display: block !important;}
	.loaction-heading{max-width: 100%; margin-bottom: 30px;}
	.company-logo{width: 150px;height: 150px;margin: 0 auto;margin-top: 0;}
	.map-location {padding: 0 0 20px 0;}
}
</style>
