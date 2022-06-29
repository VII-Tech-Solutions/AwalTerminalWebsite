<template>
	<div class="services story-services">
		<figure class="service-img mb-0" data-aos="zoom-out" data-aos-duration="2500">
			<img src="../../../assets/images/story-services.jpg" class="img-fluid" />
		</figure>
		<div class="service-bg">
			<div class="container">
				<div class="bg-white service-fixed">
					<div class="main-page-title">
						<div class="page-title" data-aos="fade-up" data-aos-duration="2500">
							<h2 class=" mx-auto text-center">Services tailored to you</h2>
							<p class="mx-auto w-100">Hala Bahrain offers a wide rande of premium hospitality services, packages, and facilities that turn your dream travel experience into a reality.</p>
						</div>
					</div>
					<div class="service-card">
						<div class="row">
							<div class="col-lg-6 mb-lg-0 mb-2" data-aos="fade-up" data-aos-duration="2500">
								<div class="service-card-style">
									<div class="d-flex flex-column justify-content-between h-100">
										<div class="service-card-body">
											<div class="title-content d-flex align-items-center">
												<span class="icon">
                                        			<img src="../../../assets/images/icons/star-purple.svg" alt="couch" class=" img-fluid"/>
												</span>
												<strong class="service-title text-capitalize theme">Elite
													Services</strong>
											</div>
											<p>
												Through our Elite Service, we ensure Commercially Important Persons
												(CIPs) enjoy an exceptionally smooth, comfortable, and pleasant airport
												experience. Passengers are received by our agents who handle all travel
												formalities.
											</p>
										</div>
										<div class="d-flex justify-content-center">
											<router-link to="/elite-services" class="card-blue-btn text-uppercase d-inline">learn more</router-link>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6 mb-lg-0 mb-2" data-aos="fade-up" data-aos-duration="2500">
								<div class="service-card-style">
									<div class="d-flex flex-column justify-content-between h-100">
										<div class="service-card-body">
											<div class="title-content d-flex align-items-center">
												<span class="icon">
                                        			<img src="../../../assets/images/icons/flight.svg" alt="couch" class=" img-fluid"/>
												</span>
												<strong class="service-title text-capitalize theme">General
													Aviation</strong>
											</div>
											<p>
												Hala Bahrain's experienced flight coordinators are on hand 24/7 to
												provide exceptional support services to aircraft crew and prepare the
												aircraft for the turnaround process.
											</p>
										</div>
										<div class="d-flex justify-content-center">
											<router-link to="/general-aviation" class="card-blue-btn text-uppercase d-inline">learn more</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>                           
<script>

</script>
<style>
.story-services .service-img{margin-top: 0;}
.story-services .service-bg{margin-top: -440px;}
@media (max-width: 467px){
	.story-services .service-bg{margin-top: 0;}
}
</style>
