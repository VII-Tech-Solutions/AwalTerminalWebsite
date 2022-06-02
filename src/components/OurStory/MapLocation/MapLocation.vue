<template>
	<Section class="map-location">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="location-wrapper">
						<div class="loaction-heading" data-aos="fade-up" data-aos-duration="2500">
							<h2 >A prime location</h2>
							<p>The Awal Private Terminal is located in Muharraq and provides services to those
								travelling by private jet or on commercial flights. The terminal is operated by premium
								hospitality service provider, Hala Bahrain.</p>
						</div>
						<div class="company-logo" data-aos="fade-in" data-aos-duration="2500">
							<img class="img-fluid" src="../../../assets/images/company-logo.png" alt="Logo">
						</div>
					</div>
					<div class="map-img" data-aos="fade-up" data-aos-duration="2500">
						<img class="img-fluid" src="../../../assets/images/map-location.jpg" alt="Map Image">
					</div>
				</div>
			</div>
		</div>
	</Section>
</template>
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